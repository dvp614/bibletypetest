import fs from 'fs';
import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';

async function translateText(koText: string): Promise<string> {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ko&tl=en&dt=t&q=${encodeURIComponent(koText)}`;
        const res = await fetch(url);
        if (!res.ok) return koText;
        const data = await res.json();
        const translated = data[0].map((item: any) => item[0]).join('');
        return translated;
    } catch(e) {
        return koText; // fallback
    }
}

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processFile() {
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath('src/constants.ts');

    const charactersDecl = sourceFile.getVariableDeclaration('CHARACTERS');
    if (!charactersDecl) return;

    const mapExpr = charactersDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!mapExpr) return;

    for (const prop of mapExpr.getProperties()) {
        if (prop.isKind(SyntaxKind.PropertyAssignment)) {
            const charObj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (charObj) {
                console.log("Processing", prop.getName());
                await processText(charObj, 'name');
                await processText(charObj, 'title');
                await processText(charObj, 'description');
                await processArray(charObj, 'traits');
                await processArray(charObj, 'strengths');
                await processArray(charObj, 'weaknesses');
                
                const bmatches = charObj.getProperty('bestMatches');
                if (bmatches && bmatches.isKind(SyntaxKind.PropertyAssignment)) {
                    const init = bmatches.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
                    if (init) {
                        for (const e of init.getElements()) {
                            if (e.isKind(SyntaxKind.ObjectLiteralExpression)) await processText(e, 'description');
                        }
                    }
                }
                const wmatches = charObj.getProperty('worstMatches');
                if (wmatches && wmatches.isKind(SyntaxKind.PropertyAssignment)) {
                    const init = wmatches.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
                    if (init) {
                        for (const e of init.getElements()) {
                            if (e.isKind(SyntaxKind.ObjectLiteralExpression)) await processText(e, 'description');
                        }
                    }
                }
            }
        }
    }

    await sourceFile.save();
    console.log("Translation complete!");
}

async function processText(obj: ObjectLiteralExpression, propName: string) {
    const prop = obj.getProperty(propName);
    if (!prop || !prop.isKind(SyntaxKind.PropertyAssignment)) return;

    const init = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (init) {
        const koProp = init.getProperty('ko');
        const enProp = init.getProperty('en');
        if (koProp && koProp.isKind(SyntaxKind.PropertyAssignment) && enProp && enProp.isKind(SyntaxKind.PropertyAssignment)) {
            const koInit = koProp.getInitializer();
            const enInit = enProp.getInitializer();
            
            if (koInit && enInit && 
                koInit.getText() === enInit.getText()) {
                const koText = koInit.getText().replace(/^["'\`]|["'\`]$/g, '');
                const translated = await translateText(koText);
                enProp.setInitializer(JSON.stringify(translated));
                await delay(100);
            }
        }
    }
}

async function processArray(obj: ObjectLiteralExpression, propName: string) {
    const prop = obj.getProperty(propName);
    if (!prop || !prop.isKind(SyntaxKind.PropertyAssignment)) return;

    const init = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (init) {
        const koProp = init.getProperty('ko');
        const enProp = init.getProperty('en');
        
        if (koProp && koProp.isKind(SyntaxKind.PropertyAssignment) && enProp && enProp.isKind(SyntaxKind.PropertyAssignment)) {
            const koArray = koProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
            const enArray = enProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
            
            if (koArray && enArray && koArray.getText() === enArray.getText()) {
                const translatedArr = [];
                for (const elem of koArray.getElements()) {
                    const koText = elem.getText().replace(/^["'\`]|["'\`]$/g, '');
                    translatedArr.push(await translateText(koText));
                    await delay(100);
                }
                enProp.setInitializer(JSON.stringify(translatedArr));
            }
        }
    }
}

processFile();

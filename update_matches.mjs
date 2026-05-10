import fs from 'fs';

const content = fs.readFileSync('src/constants.ts', 'utf-8');

const mapping = {
  PETER: { bestMatch: 'MARY', worstMatch: 'MOSES' },
  PAUL: { bestMatch: 'GIDEON', worstMatch: 'PETER' },
  MARY: { bestMatch: 'PETER', worstMatch: 'ABRAHAM' },
  DAVID: { bestMatch: 'ESTHER', worstMatch: 'PAUL' },
  JOSEPH: { bestMatch: 'PETER', worstMatch: 'ABRAHAM' },
  ESTHER: { bestMatch: 'DAVID', worstMatch: 'JOSEPH' },
  MOSES: { bestMatch: 'RUTH', worstMatch: 'PETER' },
  RUTH: { bestMatch: 'MOSES', worstMatch: 'PAUL' },
  DANIEL: { bestMatch: 'ABRAHAM', worstMatch: 'MARY' },
  NOAH: { bestMatch: 'DAVID', worstMatch: 'ABRAHAM' },
  ABRAHAM: { bestMatch: 'DANIEL', worstMatch: 'JOSEPH' },
  GIDEON: { bestMatch: 'PAUL', worstMatch: 'MARY' }
};

let newContent = content.replace(/export interface Character \{[\s\S]*?\}/, (match) => {
  return match.replace('weaknesses: string[];\n}', 'weaknesses: string[];\n  bestMatch: string;\n  worstMatch: string;\n}');
});

for (const [id, matches] of Object.entries(mapping)) {
  const regex = new RegExp(`"${id}": \\{[\\s\\S]*?weaknesses: \\[.*?\\]\\n  \\}`, 'g');
  newContent = newContent.replace(regex, (match) => {
    return match.replace(/weaknesses: (\[.*?\\])\n  \\}/, `weaknesses: $1,\n    bestMatch: "${matches.bestMatch}",\n    worstMatch: "${matches.worstMatch}"\n  }`);
  });
}

// Fixed Regex
for (const [id, matches] of Object.entries(mapping)) {
  const regex = new RegExp(`("${id}": \\{[\\s\\S]*?weaknesses: \\[.*?\\])\\n  \\}`, 'g');
  newContent = newContent.replace(regex, (match, p1) => {
    return `${p1},\n    bestMatch: "${matches.bestMatch}",\n    worstMatch: "${matches.worstMatch}"\n  }`;
  });
}

fs.writeFileSync('src/constants.ts', newContent);
console.log('Done!');

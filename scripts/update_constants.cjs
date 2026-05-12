const fs = require('fs');
const file = './src/constants.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\.png/g, '.webp');
fs.writeFileSync(file, content);

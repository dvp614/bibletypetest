const fs = require('fs');
const path = require('path');

const cleanDir = (dir) => {
  const dirPath = path.join(__dirname, '..', dir);
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    if (file.endsWith('.png')) {
      fs.unlinkSync(path.join(dirPath, file));
    }
  }
};

cleanDir('public/images');
cleanDir('public/images/results');
console.log('Cleaned up PNGs');

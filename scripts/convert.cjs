const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  execSync('npm install sharp');
} catch (e) {
  console.log('sharp already installed or failed');
}

const sharp = require('sharp');

async function convertDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      await convertDir(filePath);
    } else if (filePath.endsWith('.png') || filePath.endsWith('.jpg')) {
      const outPath = filePath.replace('.png', '.webp').replace('.jpg', '.webp');
      console.log(`Converting ${filePath} to ${outPath}`);
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outPath);
    }
  }
}

(async () => {
  await convertDir(path.join(__dirname, '../public/images'));
  console.log('Done!');
})();

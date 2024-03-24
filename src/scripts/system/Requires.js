const fs = require('fs-extra');
const path = require('path');

async function importAssets() {
    const assets = {};

    // Directory containing assets
    const directoryPath = path.join(__dirname, '../../sprites');

    // Read directory contents
    const files = await fs.readdir(directoryPath);

    // Filter files by extension and import them
    for (const file of files) {
        const extension = path.extname(file);
        if (extension === '.png' || extension === '.mp3') {
            const assetPath = path.join(directoryPath, file);
            const asset = await import(assetPath);
            assets[file] = asset;
        }
    }

    return assets;
}

module.exports = importAssets;
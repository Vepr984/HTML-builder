const path = require('path');
const fs = require('fs');
const folderPath = path.join(__dirname, 'secret-folder');

// ------------------------
fs.readdir(folderPath, (err, files) => {
    files.forEach(file => {
        fs.stat(path.join(folderPath, file), (err, stats) => {
            console.log(`${path.basename(file, path.extname(file))} - ${path.extname(file)} - ${(stats.size)}kb`)
        });
    });
});
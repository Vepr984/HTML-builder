const path  = require('path');
const fs = require('fs');

fs.mkdir(path.join(__dirname, 'files-cy'), (err) => {
  if (err) {
    console.log(err);
  }
});

fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err) {
        console.log(err);
    }
    files.forEach(file => {
        fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-cy', file), (err) => {
        if (err) {
            console.log(err);
        }
        });
    });
});

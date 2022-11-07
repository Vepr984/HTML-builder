const path = require('path');
const fs = require('fs');

// read directory 'styles', check if the object is a file and if the file has the .css extension
// if the file has the .css extension, read the file and append the content to the bundle.css file
// if the file does not have the .css extension, do nothing

fs.readdir(path.join(__dirname, 'styles'), (err, styles) => {
    if (err) {
        console.log(err);
    }
    styles.forEach(style => {
        if (style.includes('.css')) {
            fs.readFile(path.join(__dirname, 'styles', style), (err, data) => {
                if (err) {
                    console.log(err);
                }
                fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        }
    });
});

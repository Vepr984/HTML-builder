const fs = require('fs');
const path = require('path');

// create a new directory called 'project-dist'
fs.mkdir(path.join(__dirname, 'project-dist'), (err) => {
    if (err) {
        console.log(err);
    }
});
// copy template.html to the 'project-dist' directory and rename it to index.html
fs.copyFile(path.join(__dirname, 'template.html'), path.join(__dirname, 'project-dist', 'index.html'), (err) => {
    if (err) {
        console.log(err);
    }
    // replace tags in index.html with the correct data from components directory
    fs.readFile(path.join(__dirname, 'project-dist', 'index.html'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        // replace the tags with the correct data from files in the components directory
        data = data.replace(/{{header}}/g, fs.readFileSync(path.join(__dirname, 'components', 'header.html'), 'utf8'));
        data = data.replace(/{{articles}}/g, fs.readFileSync(path.join(__dirname, 'components', 'articles.html'), 'utf8'));
        data = data.replace(/{{footer}}/g, fs.readFileSync(path.join(__dirname, 'components', 'footer.html'), 'utf8'));
        // write the new data to index.html
        
        fs.writeFile(path.join(__dirname, 'project-dist', 'index.html'), data, (err) => {
            if (err) {
                console.log(err);
            }
        });
    })
});
// create style.css in the 'project-dist' directory
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
                fs.appendFile(path.join(__dirname, 'project-dist', 'style.css'), data, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        }
    });
});
// copy directory assets to the 'project-dist' directory
fs.mkdir(path.join(__dirname, 'project-dist', 'assets'), (err) => {
    if (err) {
        console.log(err);
    }
});
// copy all folders from the 'assets' directory to the 'project-dist/assets' directory. 
fs.readdir(path.join(__dirname, 'assets'), (err, assets) => {
    if (err) {
        console.log(err);
    }
    assets.forEach(asset => {
        fs.mkdir(path.join(__dirname, 'project-dist', 'assets', asset), (err) => {
            if (err) {
                console.log(err);
            }
        });
        fs.readdir(path.join(__dirname, 'assets', asset), (err, files) => {
            if (err) {
                console.log(err);
            }
            files.forEach(file => {
                fs.copyFile(path.join(__dirname, 'assets', asset, file), path.join(__dirname, 'project-dist', 'assets', asset, file), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        });
    });
}
);

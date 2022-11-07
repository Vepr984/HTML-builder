// read file text.txt
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

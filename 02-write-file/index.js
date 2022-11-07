
const fs = require('fs');
const path = require('path');
console.log('Hello, please enter your text below:');

process.stdin.on('data', (data) => {
    const filePath = path.join(__dirname, 'text.txt');
    fs.appendFile(filePath, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('The file has been update!');
    });
});
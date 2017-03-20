const fs = require('fs');
const fileName = process.argv[2];
const fileContent = fs.readFile(fileName, 'utf8', function (err, data) {
    if (data) {
        const noOfNewLines = data.split('\n').length - 1;
        console.log(noOfNewLines);
    }
    if (err) console.log('error reading file');
});

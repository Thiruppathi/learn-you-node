const fs = require('fs');
const fileName = process.argv[2];
const fileContent = fs.readFileSync(fileName);
const noOfNewLines = fileContent.toString().split('\n').length - 1;
console.log(noOfNewLines);
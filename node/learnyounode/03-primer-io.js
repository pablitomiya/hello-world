const fs = require('fs');
const file = process.argv[2]
const buffer = fs.readFileSync(file)
const numberLines = buffer.toString().split('\n').length - 1;
console.log(numberLines)
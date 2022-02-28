const fs = require('fs')
const file = process.argv[2]
// console.log(file)
fs.readFile(file,(error,data)=>{
    if (error){return console.log(error)}
    const numberLines = data.toString().split('\n').length - 1;
    console.log(numberLines)
})


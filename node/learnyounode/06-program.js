const myModule = require('./06-myModule')

const dir = process.argv[2]
const ext = process.argv[3]


myModule(dir,ext,(err,list)=>{
    if (err){
        console.log(err)
    }
    else console.log(list)
})
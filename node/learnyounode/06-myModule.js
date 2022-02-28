const fs = require('fs')
const path = require('path')

/**
 * 
 * @param {String} dir Directorio a listar
 * @param {String} ext Extension para filtrar
 * @param {Function} callback Funcion para ejecutar cuando finalice
 */

module.exports = function(dir, ext, callback){
    fs.readdir(dir, (err, list)=>{
        if (err){
            return callback(err)
        }
        const filteredList = list.filter((file)=> {
            if (path.extname(file) == `.${ext}`){
                return callback (file)
            }
        // console.log(filteredList)
        //return callback (filteredList)
        })
    })
}
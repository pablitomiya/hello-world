let suma=0
for(let i = 2; i < process.argv.length;i++){
    suma += parseInt(process.argv[i])
}
console.log(suma)
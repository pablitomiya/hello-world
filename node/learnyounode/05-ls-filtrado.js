const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
const ext = process.argv[3];
fs.readdir(dir, (err, arrFiles) => {
  if (err) {
    return console.log(err);
  }
  // console.log(arrFiles)
  arrFiles.forEach((elemento) => {
    const arrFiltered = path.extname(elemento);
    if (arrFiltered == `.${ext}`) {
      console.log(elemento);
    }
  });
  // console.log(arTexto)
});

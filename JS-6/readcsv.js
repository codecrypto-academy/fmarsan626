const csv = require("csv-parser")
const fs = require("fs")
const resultado=[]

fs.createReadStream("./datos/ciudades.csv")
    .pipe(csv())
    .on("headers", (header) => {
        console.log(header)
    })
    .on("data",(data)=>{
        //console.log(data)
        resultado.push(data)
    })
    .on("end",() =>{
        console.log("Finalizado")
    })

    
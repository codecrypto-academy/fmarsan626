const csv = require("csv-parser")
const fs = require("fs")
const {
    resolve
} = require("path")

function leerCsv(nombre) {
    return new Promise((resolve, reject) => {
        var datos = {
            data: [],
            headers: null
        }
        fs.createReadStream(`./datos/${nombre}.csv`)
            .on("error", err=>{
                reject(err)
            })
            .pipe(csv())
            .on("headers", headers => {
                datos.headers = headers
            })
            .on("data", (data) => {
                datos.data.push(data)
            })
            .on("end", () => {
                resolve(datos)
            })
    })
}

leerCsv("customers")
    .then((d) => {
       //console.log(d)

    }).catch((e) => {
        console.log(e)
    }).finally(() => {
        console.log("FIN")
    })
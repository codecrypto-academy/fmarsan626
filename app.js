const express = require("express")
const app = express()
const filesUpload = require("express-fileupload")

app.use(express.json())
app.use(express.static("public", {

    index: "myindex.html"
}))
app.use(filesUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))

app.use(express.urlencoded({ extended: true }))

app.get("/hi", (req, res) => {
    res.send("hi")
})

app.post("/echoPost", (req, res) => {
    res.send({ body: req.body, qs: req.query })
})
app.post("/echoParamPost/:cliente/facturas/:factura", (req, res) => {
    res.send({
        body: req.body,
        query: req.query,
        params: req.params
    })
})
app.post("/echoPostJson", (req, res) => {
    res.send({ bodyJson: req.body })
})
app.post("/addUser", (req, res) => {
    res.send("Añadido").status(200)
})

app.post("/uploadFicheros", async (req, res) => {
    try {
        for (const [index, file] of req.files.f1.entries()) {

            await file.mv(`uploads/${index}_${file.name}`)
        }
        // res.send({
        //     body: req.body, fichero: {
        //         nombre: req.files.f1.name
        //     }

        // })
        res.send("Ficheros subidos")




    } catch (err) {
        res.status(500).send("Error al subir fichero " + err)
    }
})


app.listen(3344)

//
const express = require("express")
const app = express()
const filesUpload = require("express-fileupload")
const morgan = require("morgan")
const fs = require("fs")
const { Pool } = require('pg')
const { Web3 } = require('web3');


const WEB3_PROVIDER = "https://sepolia.infura.io/v3/2b2915d7965f4adab8302a82a5b760f5"
const web3 = new Web3(WEB3_PROVIDER)
const pool = new Pool({
    localhost: "localhost",
    port: 5432,
    user: "postgres",
    password: "pwd"
})


const logOutput = fs.createWriteStream("uploads/logs.txt", {
    flags: 'a'
})
app.use(morgan('combined', {
    skip: function (req, res) { res.statusCode < 400 },
    stream: logOutput
}))
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


app.get("/bdd/test", async (req, res) => {
    try {
        const respuesta = await pool.query("select now() fecha");
        res.send(respuesta.rows)

    } catch (err) {
        res.status(500).send({ err })
    }

})


app.get("/bdd/customers", async (req, res) => {
    try {
        const respuesta = await pool.query("select * from customers");
        res.send(respuesta.rows)

    } catch (err) {
        res.status(500).send({ err })
    }

})

app.get("/bdd/customers/:id", async (req, res) => {
    try {
        const respuesta = await pool.query("select * from customers where customer_id =$1", [req.params.id]);
        res.send(respuesta.rows[0])

    } catch (err) {
        res.status(500).send({ err })
    }

})

app.get("/bdd/orders/:cliente", async (req, res) => {
    try {
        const respuesta = await pool.query("select * from orders where customer_id =$1", [req.params.cliente]);
        res.send(respuesta.rows)

    } catch (err) {
        res.status(500).send({ err })
    }

})

app.get("/bdd/orders/:cliente/:id", async (req, res) => {
    try {
        const respuesta = await pool.query("select * from orders where customer_id = $1 and order_id = $2", [req.params.cliente, req.params.id]);

        if (respuesta.rows.length == 0) {
            res.status(404).send("no existe")
        } else {
            res.send(respuesta.rows[0])
        }

    } catch (err) {
        res.status(500).send({ err })
    }

})


app.get("/web3/balance/:address", async (req, res) => {
    try {
        const address = req.params.address;

        const balance = await web3.eth.getBalance(address)
        res.send(balance.toString())
    } catch (err) {
        res.status(500).send({ err })
    }

})
app.get("/web3/getblock/:numero", async (req, res) => {
    try {
        const numero = req.params.numero;

        const block = await web3.eth.getBlock(numero)
        console.log(block)
        res.send(block.rows)
    } catch (err) {
        res.status(500).send({ err })
    }

})

app.listen(3344)

//
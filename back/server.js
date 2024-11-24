const express = require("express")
const cors = require("cors")
const db = require("./db")
const app = express()
app.listen(5555)
app.use(cors())

app.get("/productos", async (req, res) => {
    try {
        const [r, f] = await db.q("select * from Products", [])
        res.send(r)
    } catch (error) {
        res.send({ error })

    }

}) 

app.get("/productos/:id", async (req, res) => {
    try {
        const [r, f] = await db.q("select * from Products where ProductID =?", [req.params.id])
        res.send(r)
    } catch (error) {
        res.send({ error })

    }

}) 
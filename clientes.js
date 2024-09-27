const express = require("express")
const clientes = express.Router()

module.exports={
    clientes
}

clientes.get("/",(req, res)=>{
    res.send("sou de clientes")
})
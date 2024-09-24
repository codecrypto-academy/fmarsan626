const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public", {

    index:"myindex.html"
}))
app.use(express.urlencoded({extended:true}))

app.get("/hi", (req, res)=>{
    res.send("hi")
})

app.post("/echoPost",(req,res)=>{
    res.send({body:req.body, qs:req.query})
})
app.post("/echoParamPost/:cliente/facturas/:factura",(req,res)=>{
    res.send({
        body:req.body,
        query: req.query,
        params: req.params
    })
})
app.post("/echoPostJson",(req,res)=>{
    res.send({bodyJson:req.body})
})
app.post("/addUser", (req, res)=>{
    res.send("Añadido").status(200)
}) 
app.listen(3344) 
//
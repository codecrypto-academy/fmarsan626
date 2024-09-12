const ex = require ("express")
const app = ex()

app.get("/",(req,res)=>{
    res.send("hi!")
})

app.get("/ping",(req,res)=>{
    res.send({fecha:new Date})
})
app.listen("3000")

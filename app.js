const express = require("express")
const app = express()


app.get("/", (rew, res)=>{
    res.send("hi")
})
app.listen(3344)
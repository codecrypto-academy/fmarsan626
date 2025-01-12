const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send("hola");
})

app.listen(3333);
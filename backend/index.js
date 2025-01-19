const express = require("express");
const { Web3 } = require("web3");
const cors = require('cors');

const app = express();

const URL_INFURA = "https://mainnet.infura.io/v3/2b2915d7965f4adab8302a82a5b760f5"

const web3 = new Web3(URL_INFURA);
app.use(cors());

BigInt.prototype.toJSON = function () {
    return this.toString();
};



app.get("/", async (req, res) => {
    try {
        const bloque = await web3.eth.getBlockNumber();
        res.send({ bloque });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al obtener el número de bloque." }, error);
    }
});

app.get("/bloque/:bloque", async (req, res) => {
    try {
        const bloque = await web3.eth.getBlock(req.params.bloque);
        res.send(bloque);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al obtener el  bloque." }, error);
    }
});

app.get("/tx/:tx", async (req, res) => {
    try {
        const tx = await web3.eth.getTransaction(req.params.tx);
        res.send(tx);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al obtener la transaccion." }, error);
    }
});
app.get("/balance/:adress", async (req, res) => {
    try {
        const balance = await web3.eth.getBalance(req.params.adress);
        res.send({balance, ethers: web3.utils.fromWei(balance, 'ether')});
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al obtener el balancee." }, error);
    }
});


app.listen(3333);



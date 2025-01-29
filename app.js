const { Web3 } = require("Web3")

const web3 = new Web3("http://localhost:8545")
const walletAddress = '0x613aaDB6D66bC91159fb07Faf6A6ABD95b3255E7';

async function getUltimoBloque(){
    const bloque = await web3.eth.getBlockNumber();
    console.log(bloque)
    return bloque
}

async function getBalance(){
    const bloque = await web3.eth.getBalance(walletAddress);
    console.log(bloque)
    return bloque
}


var tx = {
    from: "0x613aaDB6D66bC91159fb07Faf6A6ABD95b3255E7",
    to :"0x87c30F82cFdb74dA33A6F6db4f37471b333650fa",
    value: 120000000,
    // web3.utils.toWei(100000000, "ether"),
    gasPrice: 1,
    gasUsed: 21000,
    gasLimit: 21000
}

async function sendTransaction() {
    const consttx = await web3.eth.sendTransaction(tx, "123456")
    console.log(consttx)
}

//sendTransaction()

 getBalance()

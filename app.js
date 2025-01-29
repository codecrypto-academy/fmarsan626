const { Web3 } = require("Web3")

const web3 = new Web3("http://localhost:8545")
const walletAddress = '<<wallet Metamask 1>>';

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
    from: "<<wallet Metamask 1>>",
    to :"<<wallet Node 1>>",
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

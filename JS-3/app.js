const ax = require("axios")

async function getDatos() {
    const res = await ax.get("https://jsonplaceholder.typicode.com/users")
    return res
}
//
(async () => {
    var datos = await getDatos()
    console.log(JSON.stringify(datos.data,null,4))
})()

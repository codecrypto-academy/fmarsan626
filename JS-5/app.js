const pg = require('pg')

const client1 = new pg.Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "123456"
})

//modo async await
async function query() {
    try {
        await client1.connect();
        const r = await client1.query("select product_name from products", [])
        console.log(r.rows)

    } catch (error) {
        console.log("error", e.message)

    } finally {
        await client1.end();

    }
}

//query();

//modo promesa
client1.connect().then((client1) => {
    client1.query("select product_name from products", []).then(data => {
        console.log(data.rows)
        client1.end();
    }).catch(e => {
        console.log("error", e.message)

    })
}).catch(e => {
    console.log("error", e.message)
})
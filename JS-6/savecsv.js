const pg = require("pg")
const csv = require("objects-to-csv")
const fs = require("fs")

const client = new pg.Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "123456"
})

async function query(select, fichero) {
    await client.connect()
    const res = await client.query(select)
    //fichero en json
    //fs.writeFileSync(`./datos/${fichero}.json`,JSON.stringify(res.rows,null,4))
    //fichero en csv
    const filas =res.rows.map(row => ({
        ...row,
        last_update: new Date(row.last_update).toISOString().substring(0,10)

    }))
    new csv(filas).toDisk(`./datos/${fichero}.csv`) 
}
query("select * from city", "ciudades")
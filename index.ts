import { Pool, ClientConfig } from "pg"

type CustomerType = {
    customer_id: string,
    company_name: string,
    contact_name: string,
    contact_title: string,
    address: string,
    city: string,
    region: string,
    postal_code: string,
    country: string,
    phone: string,
    fax: string
}
const clientConfig: ClientConfig = {
    user: 'postgres',
    host: 'localhost',
    password: 'pwd',
}
const pool = new Pool(clientConfig)

async function main() {
    try {
        const res = await pool.query<CustomerType>('SELECT * FROM customers limit 4', [])
        res.rows.forEach(row => {
            console.log(row.city, row.country, row.company_name)

        })

    } catch (error) {
        throw "Error en funcion"
    }

    //console.log( res.rows)
}

main().then(() => {
    console.log('Done')
}).catch((err) => {
    console.error('Error de main', err)
}).finally(() => {
    pool.end()
})
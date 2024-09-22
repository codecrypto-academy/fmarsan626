import { Pool } from "pg";

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


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'pwd',
});

pool.query("select * from customers limit 2", (err: any, res: any) => {
    console.log(err, res.rows);
    pool.end();
})
// 
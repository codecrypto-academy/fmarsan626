const mysql = require("mysql8")

const pool = mysql.createPool({
    host: "172.17.0.2",
    port: 3306,
    user: "root",
    password: "my-secret-pwd",
    database: "northwind",
    //connectTimeout: 10000

})

function q(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, function (error, results, fields) {
            if (error) reject(error);
            return resolve(results);
        })
    })
}

q("select * from Customers").then(d =>{
    console.log(d)
}).catch(err =>{
    console.log(err)
})
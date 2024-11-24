const mysql = require("mysql8")
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password:"my-secret-pw",
    database: "northwind",
    port: 3306
})

function q(sql, parameters) {
    return new Promise((resolve, reject) => {
        pool.query(sql, parameters, function (error, result, fields) {
            if (error) {
                reject(error)
                return
            }
            return resolve([result, fields])
        })
    })
}

module.exports={
    q
}
const mysql = require('mysql');

const connectionPool = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "dell",
    database: "ppmss"
});

const configurationLogic = {
    mysqlDBConfig : connectionPool,
    authConfig : {
        username: "15fab3de-4aa0-4638-9a5e-db0ffa769e69",
        password: "985a91df-222f-469a-8d9d-a1a1e400ab5d"
    },
    baseUrl : "https://api.karix.io/"
}
module.exports = configurationLogic;
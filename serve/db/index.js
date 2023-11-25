const mysql = require('mysql2');

const db = mysql.createPool({
    host : '127.0.0.1',// 连接的端口默认即可
    user : 'root',  
    password : 'LiU1121568QW',
    database : 'data',
    charset:'utf8'
})

module.exports = db;
import mysql from 'mysql2'

const connection = mysql.createConnection
(
    {
        host: 'localhost',
        port: '3307',
        user: 'root',
        password: 'root',
        database: 'taskong'
    }
)

export default connection
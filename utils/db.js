import mysql from 'mysql2/promise';

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mauFJcuf5dhRMQrjj',
    database: 'kelas_com',
    port:3307
});

export default dbPool;
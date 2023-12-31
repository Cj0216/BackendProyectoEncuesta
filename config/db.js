import mysql from 'mysql2/promise';
import dotenv from "dotenv"


dotenv.config()
const pool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password:process.env.DBPASS,
  database: process.env.DBSCHEMA,
  port: process.env.DBPORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
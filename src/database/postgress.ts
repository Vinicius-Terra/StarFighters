import { Pool } from 'pg';

const connection = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'starfighters',
  password: 'postgres',
  port: 5432
})


export default connection;
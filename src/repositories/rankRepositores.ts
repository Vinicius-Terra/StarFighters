import { Pool, QueryResult } from 'pg'
import connection from '../database/postgress'

export  async function selectRank(): Promise<QueryResult<any>>{
  return connection.query(
  `
  SELECT * FROM fighters  
  `)
}

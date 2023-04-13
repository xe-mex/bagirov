import * as dotenv from "dotenv"
dotenv.config()

import pg from "pg"

class DBClient {
    postgres = new pg.Pool({
        user: String(process.env.DB_USER),
        password: String(process.env.DB_PASSWORD),
        database: process.env.DB_NAME,
        schema: process.env.DB_SCHEMA,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        max: 20
    })
}

export default new DBClient()

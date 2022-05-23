import { DB } from "https://deno.land/x/sqlite/mod.ts"
import denver from "./denver.json" assert { type: "json" }

const db = new DB("fly.db")
const destinations = denver.data

const query = db.prepareQuery()

for (const destination of destinations) {

}

// const data = db.query(`
//    SELECT iata FROM Airports
// `)

db.close()
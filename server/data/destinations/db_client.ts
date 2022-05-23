import { DB } from "https://deno.land/x/sqlite/mod.ts"
import denver from "./denver.json" assert { type: "json" }

const db = new DB("fly.db")
const destinations = denver.data

// —————————————————————————————————————————————————————————————————————————————
// Prepare Query

const addRoute = db.prepareQuery<[string, string]>(`
   INSERT INTO Routes (from_iata, to_iata)
      VALUES (:from, :to)
      ON CONFLICT(from_iata, to_iata) DO NOTHING
`)

// —————————————————————————————————————————————————————————————————————————————
// Execute Query

for (const destination of destinations) {
   addRoute.execute({
      from: "DEN",
      to: destination.iataCode,
   })
}
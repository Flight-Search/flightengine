import { DB } from "https://deno.land/x/sqlite/mod.ts"

// —————————————————————————————————————————————————————————————————————————————
// Environment

const db = new DB("fly.db")

const routes = Deno.readTextFileSync("../routes.csv")
   .split("\n")
   .map(line => line.split(","))

const airports = Deno.readTextFileSync("../airports.tsv")
   .split("\n")
   .map(line => line.split("\t"))

// —————————————————————————————————————————————————————————————————————————————
// Prepare Query

const add_airport = db.prepareQuery<[string, string, string, string, string]>(`
   INSERT INTO Airports (iata, name, country, latitude, longitude)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT (iata) DO NOTHING
   ;
`)

const add_route = db.prepareQuery<[string, string]>(`
   INSERT INTO Routes (from_iata, to_iata)
      VALUES (?, ?)
      ON CONFLICT (from_iata, to_iata) DO NOTHING
   ;
`)

function populate_airports() {
   db.query("BEGIN TRANSACTION;")
   for (const airport of airports) {
      try { add_airport.execute(airport) }
      catch(e) {
         console.log(airport[0])
         console.log(e)
      }
   }
   db.query("END TRANSACTION;")
}

function populate_routes() {
   db.query("BEGIN TRANSACTION;")
   for (const route of routes) {
      try { add_route.execute(route) }
      catch(e) {
         console.log(`${route[0]} → ${route[1]}`)
         console.log(e)
      }
   }
   db.query("END TRANSACTION;")
}

// —————————————————————————————————————————————————————————————————————————————
// Execute Query

populate_airports()
populate_routes()
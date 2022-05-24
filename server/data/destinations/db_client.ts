import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("fly.db");
const lines = Deno.readTextFileSync("./destinations.txt");

// —————————————————————————————————————————————————————————————————————————————
// Type

type Destinations = {
   data: {
         type     : string // location
         subtype  : string // city
         name     : string // Bangalore
         iataCode : string // BLR
   }[],
   meta: {
      count : number // integer
      sort  : string // iataCode
      links : {
         self : string // https://test.api.amadeus.com/v1/airport/direct-destination?departureAirportCode=NCE&max=2
      }
   },
}

// —————————————————————————————————————————————————————————————————————————————
// Prepare Query

const addRoute = db.prepareQuery<[string, string]>(`
   INSERT INTO Routes (from_iata, to_iata)
      VALUES (:from, :to)
      ON CONFLICT (from_iata, to_iata) DO NOTHING
   ;
`)

// —————————————————————————————————————————————————————————————————————————————
// Execute Query

db.query("BEGIN TRANSACTION;")

const data = lines
   .split("\n")
   .map((json) => JSON.parse(json))
   .filter(obj => !obj.warnings)
   .filter(obj => !obj.errors)
   .forEach((obj:Destinations) => {
      const from = obj.meta.links.self.slice(-3)
      const targets = obj.data.map(d => d.iataCode)
      for (const to of targets) {
         try { addRoute.execute({ from, to }) }
         catch(e) { console.log(e) }
         console.log(`${from} -> ${to}`)
      }
   })

db.query("END TRANSACTION;")

console.log(data)
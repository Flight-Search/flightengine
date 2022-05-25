import { DB } from "https://deno.land/x/sqlite/mod.ts"

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

const add_airport = db.prepareQuery(`
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

// —————————————————————————————————————————————————————————————————————————————
// Execute Query

db.query("BEGIN TRANSACTION;")
for (const airport of airports) {
   try { add_airport.execute(airport) }
   catch(e) { 
      console.log(airport[0])
      console.log(e) 
   }
}
db.query("END TRANSACTION;")

db.query("BEGIN TRANSACTION;")
for (const route of routes) {
   try { add_route.execute(route) }
   catch(e) { 
      console.log(`${route[0]} → ${route[1]}`)   
      console.log(e) 
   }
}
db.query("END TRANSACTION;")

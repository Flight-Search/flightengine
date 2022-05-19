import africa from "./data/africa.ts"
import asia from "./data/asia.ts"
import australia from "./data/australia.ts"
import canada from "./data/canada.ts"
import carribean from "./data/carribean.ts"
import central_america from "./data/central_america.ts"
import europe from "./data/europe.ts"
import mexico from "./data/mexico.ts"
import middle_east from "./data/middle_east.ts"
import northern_ireland from "./data/northern_ireland.ts"
import scotland from "./data/scotland.ts"
import south_america from "./data/south_america.ts"
import uk from "./data/uk.ts"
import usa from "./data/usa.ts"
import wales from "./data/wales.ts"

import { Airport } from "../types/api.ts"

const airports = africa
   .concat(asia)
   .concat(australia)
   .concat(canada)
   .concat(carribean)
   .concat(central_america)
   .concat(europe)
   .concat(mexico)
   .concat(middle_east)
   .concat(northern_ireland)
   .concat(scotland)
   .concat(south_america)
   .concat(uk)
   .concat(usa)
   .concat(wales)

// for (const airport of airports) {
//    await Deno.writeTextFile(
//       "airports.csv",
//       `${airport}\n`,
//       { append: true },
//    )
// }

function fetchAirport(airport:string) {
   const API = `https://airport-info.p.rapidapi.com/airport?iata=${airport}`
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
         "X-RapidAPI-Key": "719636cce8msh40e8c49f264c1e6p19a508jsn4eb16a971738"
      }
   }

   return fetch(API, options)
      .then(r => r.json() as Promise<Airport>)
      .catch(console.log)
}

function * counter() { for (let i=0; true; i++) yield i }
let count = counter()

for (const airport of airports) {
   const response = await fetchAirport(airport)

   await Deno.writeTextFile(
      "final_airports.csv",
      JSON.stringify(response) + "\n",
      { append: true },
   )
   console.log(`Job: ${count.next().value}, Airport: ${airport}`)
}
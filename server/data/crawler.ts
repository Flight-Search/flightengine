import africa from "./raw/africa.ts"
import asia from "./raw/asia.ts"
import australia from "./raw/australia.ts"
import canada from "./raw/canada.ts"
import carribean from "./raw/carribean.ts"
import central_america from "./raw/central_america.ts"
import europe from "./raw/europe.ts"
import mexico from "./raw/mexico.ts"
import middle_east from "./raw/middle_east.ts"
import northern_ireland from "./raw/northern_ireland.ts"
import scotland from "./raw/scotland.ts"
import south_america from "./raw/south_america.ts"
import uk from "./raw/uk.ts"
import usa from "./raw/usa.ts"
import wales from "./raw/wales.ts"

import { AirportResponse } from "../../types/api.ts"
import { RAPID_KEY } from "../../.env.ts"

// —————————————————————————————————————————————————————————————————————————————
// Environment

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

function * counter() { for (let i=0; true; i++) yield i }
const count = counter()

// —————————————————————————————————————————————————————————————————————————————
// Query Preparation

const headers = {
   "X-RapidAPI-Host" : "airport-info.p.rapidapi.com",
   "X-RapidAPI-Key"  : RAPID_KEY,
}

const api = (airport:string) => `https://airport-info.p.rapidapi.com/airport?iata=${airport}`

const fetchAirport = (airport:string) => fetch(api(airport), { headers })
   .then(r => r.json() as Promise<AirportResponse>)
   .catch(console.log)

// —————————————————————————————————————————————————————————————————————————————
// Query Execution

for (const airport of airports) {
   const response = await fetchAirport(airport)

   Deno.writeTextFileSync(
      "final_airports.csv",
      JSON.stringify(response) + "\n",
      { append: true },
   )

   console.log(`Job: ${count.next().value}, Airport: ${airport}`)
}
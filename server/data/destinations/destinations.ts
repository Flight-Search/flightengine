import Client, { fetchDestinations } from "../../api/amadeus.ts"
import { AMADEUS_KEY, AMADEUS_SECRET } from "../../../.env.ts"
import {
   Destinations,
   DestinationsError,
   DestinationsResponse,
} from "../../../types/api.ts"

import airports from "../airports.json" assert { type: "json" }

// —————————————————————————————————————————————————————————————————————————————
// Type

type Airport = {
   id: number
   iata: string
   name: string
   country: string
   latitude: number
   longitude: number
}

// —————————————————————————————————————————————————————————————————————————————
// Environment

const client = new Client(AMADEUS_KEY, AMADEUS_SECRET)
await client.getToken()

function * naturals(max=5) {
   for (let i=0; i<max; i++) yield i
}

const OUTPUT_FILE = "destinations.txt"

// —————————————————————————————————————————————————————————————————————————————
// Execute

for (const n of naturals(1252)) {
   let routes = await fetchDestinations(airports[n].iata, await client.getToken())
   await wait(100)
   Deno.writeTextFileSync(
      OUTPUT_FILE,
      JSON.stringify(routes) + "\n",
      { append: true }
   )
   console.log(airports[n].iata)
}

function wait(ms=100) {
   return new Promise(resolve => setTimeout(resolve, ms))
}

<<<<<<< HEAD
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

// for (const n of naturals(5)) {
//    let routes = await fetchDestinations(airports[n].iata, await client.getToken())
//    Deno.writeTextFileSync(
//       "destinations.txt",
//       JSON.stringify(routes) + "\n",
//       { append: true }
//    )
// }

fetchDestinations("DEN", await client.getToken())
   .then(destinations => {
      Deno.writeTextFileSync(
         OUTPUT_FILE,
         JSON.stringify(destinations) + "\n",
         { append: true }
      )
   })

// —————————————————————————————————————————————————————————————————————————————
// Example
||||||| 255ccff
=======
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

// for (const n of naturals(5)) {
//    let routes = await fetchDestinations(airports[n].iata, await client.getToken())
//    Deno.writeTextFileSync(
//       "destinations.txt",
//       JSON.stringify(routes) + "\n",
//       { append: true }
//    )
// }

fetchDestinations("DEN", await client.getToken())
   .then(destinations => {
      Deno.writeTextFileSync(
         OUTPUT_FILE,
         JSON.stringify(destinations) + "\n",
         { append: true }
      )
   })

// —————————————————————————————————————————————————————————————————————————————
// Example

const data = {
   "meta":{
      "count":7,
      "links":{
         "self":"https://test.api.amadeus.com/v1/airport/direct-destinations?departureAirportCode=AAE"
      }
   },
   "data":[
      {"type":"location","subtype":"city","name":"ALGIERS","iataCode":"ALG"},
      {"type":"location","subtype":"city","name":"EL OUED","iataCode":"ELU"},
      {"type":"location","subtype":"city","name":"ISTANBUL","iataCode":"IST"},
      {"type":"location","subtype":"city","name":"LYON","iataCode":"LYS"},
      {"type":"location","subtype":"city","name":"MARSEILLE","iataCode":"MRS"},
      {"type":"location","subtype":"city","name":"ORAN","iataCode":"ORN"},
      {"type":"location","subtype":"city","name":"PARIS","iataCode":"PAR"}
   ]
}

const error = {
   "warnings": [
      {
         "code": 0,
         "title": "Data Not Found",
         "detail": "No destination is available",
         "source": {
            "parameter": "departureAirportCode"
         },
         "status": 200
      }
   ],
   "meta": {
      "count": 0,
      "links": {
         "self": "https://test.api.amadeus.com/v1/airport/direct-destinations?departureAirportCode=ABK"
      }
   }
}
>>>>>>> main

// —————————————————————————————————————————————————————————————————————————————
// Environment

import { AMADEUS_KEY, AMADEUS_SECRET } from "../.env.ts"

const API = {
   test: "test.api.amadeus.com",
   base: "test.api.amadeus.com/v1",
   destinations: "/airport/direct-destinations",
}

// —————————————————————————————————————————————————————————————————————————————
// Token Generation
// https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262

const token = "https://test.api.amadeus.com/v1/security/oauth2/token"

// —————————————————————————————————————————————————————————————————————————————
// Direct Destinations
// https://developers.amadeus.com/self-service/category/air/api-doc/airport-routes/api-reference

interface DestinationResponse {
   data: [
      {
         type     : string // location
         subtype  : string // city
         name     : string // Bangalore
         iataCode : string // BLR
      }[]
   ],
   meta: {
      count : number // integer
      sort  : string // iataCode
      links : {
         self : string // https://test.api.amadeus.com/v1/airport/direct-destination?departureAirportCode=NCE&max=2
      }
   },
}

interface DestinationError {
   errors: [
      {
         "status": 400 | 500
         "code": number
         "title": string
         "detail"?: string
      }
   ]
}

const headers = {

}

function fetchDestinations(airport:string) {
   const URL = `https://${API.base}${API.destinations}?departureAirportCode=${airport}`
   return fetch(URL)
      .then(res => res.json())
}
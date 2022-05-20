// —————————————————————————————————————————————————————————————————————————————
// Environment

import { AMADEUS_KEY, AMADEUS_SECRET } from "../.env.ts"

const API = {
   test: "test.api.amadeus.com",
   base: "test.api.amadeus.com/v1",
   destinations: "/airport/direct-destinations",
   token: "https://test.api.amadeus.com/v1/security/oauth2/token",
}

// —————————————————————————————————————————————————————————————————————————————
// Token Generation
// https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262

type TokenResponse = {
   type: "amadeusOAuth2Token"
   username: string
   application_name: string
   client_id: string
   token_type: "Bearer"
   access_token: string
   expires_in: number
   state: "approved" | "expired"
   scope: string
}

type TokenError = {
   error: "invalid_client" | "invalid_grant" | "unauthorized_client"
   error_description: string
   code: number
   title: string
}

/**
 * Obtains an access token which lasts for 29 minutes and 59 seconds.
 * @example
 * getToken()
 *    .then(token => console.log(token))
 */
export function getToken() {
   const options = {
      method: "POST",
      body: new URLSearchParams({
         grant_type: "client_credentials",
         client_id: AMADEUS_KEY,
         client_secret: AMADEUS_SECRET,
      }),
   }

   return fetch(API.token, options)
      .then(r => r.json()) as Promise<TokenResponse | TokenError>
}

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

/**
 * Consumes `airport` code and bearer `token` and returns a list of destinations.
 * @example
 * fetchDestinations("DEN", "GeneratedTokenHere")
 */
function fetchDestinations(airport:string, token:string) {
   const URL = `https://${API.base}${API.destinations}?departureAirportCode=${airport}`
   const headers = {
      Authorization: `Bearer ${token}`,
   }
   return fetch(URL, { headers })
      .then(res => res.json())
}
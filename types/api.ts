// —————————————————————————————————————————————————————————————————————————————
// GET: https://airport-info.p.rapidapi.com/airport

export type Airport = {
   id: number            // 4044
   iata: string          // LAX
   icao: string          // KLAX
   name: string          // Los Angeles International Airport
   location: string      // Los Angeles, California, United States
   street_number: string // 1
   street: string        // World Way
   city: string          // Los Angeles
   county: string        // Los Angeles County
   state: string         // California
   country_iso: string   // US
   country: string       // United States
   postal_code: string   // 90045
   phone: string         // +1 855-463-5252
   latitude: number      // 33.94159
   longitude: number     // -118.40853
   uct: number           // -420
   website: string       // http://www.lawa.org/welcomelax.aspx
}

export type AirportError = { error: { text: "No airport found" } }
export type AirportResponse = Airport | AirportError

// —————————————————————————————————————————————————————————————————————————————
// https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262

export type Token = {
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

export type TokenError = {
   error: "invalid_client" | "invalid_grant" | "unauthorized_client"
   error_description: string
   code: number
   title: string
}

export type TokenResponse = Token | TokenError

// —————————————————————————————————————————————————————————————————————————————
// Direct Destinations
// https://developers.amadeus.com/self-service/category/air/api-doc/airport-routes/api-reference

export interface Destinations {
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

export interface DestinationsError {
   errors: [
      {
         "status": 400 | 500
         "code": number
         "title": string
         "detail"?: string
      }
   ]
}

export type DestinationsResponse = Destinations | DestinationsError
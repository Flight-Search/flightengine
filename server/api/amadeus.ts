// —————————————————————————————————————————————————————————————————————————————
// Environment

import { TokenResponse, DestinationsResponse, Token } from "../../types/api.ts"
import { AMADEUS_KEY, AMADEUS_SECRET } from "../../.env.ts"

const API = {
   test: "test.api.amadeus.com",
   base: "test.api.amadeus.com/v1",
   destinations: "/airport/direct-destinations",
   token: "https://test.api.amadeus.com/v1/security/oauth2/token",
}

// —————————————————————————————————————————————————————————————————————————————
// Token Generation
// https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262

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
      .then(r => r.json()) as Promise<TokenResponse>
}

// —————————————————————————————————————————————————————————————————————————————
// Direct Destinations
// https://developers.amadeus.com/self-service/category/air/api-doc/airport-routes/api-reference

/**
 * Consumes `airport` code and bearer `token` and returns a list of destinations.
 * @example
 * fetchDestinations("DEN", "GeneratedTokenHere")
 */
export function fetchDestinations(airport:string, token:string): Promise<DestinationsResponse> {
   const URL = `https://${API.base}${API.destinations}?departureAirportCode=${airport}`
   const headers = {
      Authorization: `Bearer ${token}`,
   }
   return fetch(URL, { headers })
      .then(res => res.json())
}

// —————————————————————————————————————————————————————————————————————————————
// Amadeus Client

class Client {
   #key: string        // account id
   #secret: string     // account secret
   #token = ""         // app api token
   static backoff = 1  // seconds
   expiration = 0      // milliseconds

   /**
    * Requires Amadeus account `key` and `secret` to fetch an app token.
    * https://developers.amadeus.com/self-service/apis-docs/guides/authorization-262
    */
   constructor(key:string, secret:string) {
      this.#key    = key
      this.#secret = secret
   }

   get isTokenExpired() {
      return this.expiration < (Date.now() + Client.backoff)
   }

   /**
    * Returns promise of token.
    */
   getToken() { return this.#useOrRefreshToken() }

   async #useOrRefreshToken() {
      if (this.isTokenExpired) {
         const response = await this.#newToken()
         if ("error" in response) {
            console.log("Amadeus token error: ", response)
            throw Error(`Failure to obtain Amadeus token`)
         }
         this.#storeToken(response)
      }
      return this.#token
   }

   #newToken() {
      const options = {
         method: "POST",
         body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: AMADEUS_KEY,
            client_secret: AMADEUS_SECRET,
         }),
      }
   
      return fetch(API.token, options)
         .then(r => r.json()) as Promise<TokenResponse>
   }

   #storeToken(response:Token) {
      this.#token = response["access_token"]
      this.expiration = Date.now() + response["expires_in"] * 1000
   }
}

export default Client
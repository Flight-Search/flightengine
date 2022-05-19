// https://airport-info.p.rapidapi.com/airport
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
} | { error: { text: "No airport found" } }
// —————————————————————————————————————————————————————————————————————————————
// Type

interface FAAResponse {
   name: string // SJC
   totalFlightCount: number
   cancelledFlightCount: number
   dateTime: string // "210316"
   month: string // "03"
   day: string // "16"
   year: string // "2022"
   defaultAarRate: number // "26"
   control: string // "No GDP"
   rates: string[] // ["26", "26", "26",]
   fixes: string[] // ["HYP", "SNS", "PIRAT", "PYE", "ZINNN"]
   timeBuckets: timeBucket[]
}

interface timeBucket {
   day: string // "21"
   time: string // "0200" + 15 minute increments
   counts: {
      type: "STATUS"
      name: "Past Dept Time" 
         | "Departing" 
         | "EDCT Issued" 
         | "Irregular" 
         | "Flight Active"
         | "Arrived"
      count: number
   }[] | {
      type: "CENTER"
      name: string // "ZME"
      count: number
   }[] | {
      type: "FIX"
      name: string // "ZINNN"
      count: number
   }
   flights: {
      acid: string // "EJA827"
      type: string // "C700"
      origin: string // "CMA"
      etd: string // "A21/0125"
      destination: string // "SJC"
      eta: string // "A21/0207
      ete: string // "285"
      departureCenter: string // "ZLA"
      majorAirline: string // "EJA"
   }[]
}

// —————————————————————————————————————————————————————————————————————————————
// API
// https://www.fly.faa.gov/aadc/api/airports/

/**
 * Maps `iata` airport code to FAA airport data.
 * @example
 * fetchAirport("LAX")
 *    .then(console.log)
 */
function fetchAirportData(iata:string): Promise<FAAResponse> {
   return fetch(`https://www.fly.faa.gov/aadc/api/airports/${iata}`)
      .then(res => res.json())
}
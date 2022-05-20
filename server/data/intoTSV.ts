import airports from "./airports.ts"
import { Airport } from "../../types/api.ts"

// —————————————————————————————————————————————————————————————————————————————
// Environment

const ids = new Set()
const filtered = airports
   .filter(airport => !airport.error)
   .filter(airport => !ids.has(airport.id) && ids.add(airport.id))

const headers: Array<keyof Airport> = ["id", "iata", "name", "location", "latitude", "longitude"]
const FILE = "airports.tsv"

// —————————————————————————————————————————————————————————————————————————————
// Execute

Deno.writeTextFileSync(
   FILE,
   headers.join("\t") + "\n",
)

for (const airport of filtered) {
   Deno.writeTextFileSync(
      FILE,
      headers.map(header => airport[header]).join("\t") + "\n",
      { append: true },
   )
}
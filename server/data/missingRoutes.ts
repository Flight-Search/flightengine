import { DB } from "https://deno.land/x/sqlite/mod.ts";

// —————————————————————————————————————————————————————————————————————————————
// Environment

const db = new DB("fly.db")
const query =`
   SELECT DISTINCT to_iata FROM (
      SELECT to_iata, name FROM ROUTES
      LEFT JOIN Airports ON Airports.iata = Routes.to_iata
      WHERE name IS NULL
   );
`

// —————————————————————————————————————————————————————————————————————————————
// Query for Unidentified Airport Destinations

const unidentified_iata = db.query(query).flat()

export default unidentified_iata
import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("fly.db");
const lines = Deno.readTextFileSync("./destinations.txt");

// —————————————————————————————————————————————————————————————————————————————
// Prepare Query

const addRoute = db.prepareQuery<[string, string]>(`
   INSERT INTO Routes (from_iata, to_iata)
      VALUES (:from, :to)
      ON CONFLICT (from_iata, to_iata) DO IGNORE
`)

// —————————————————————————————————————————————————————————————————————————————
// Execute Query

function json_to_route(json: string) {
   const response = JSON.parse(json)
   const from = response.meta.links.self.slice(-3)

   addRoute.execute({
      from,
      to: response.data.iata
   })
}

const data = lines
  .split("\n")
  .map((json) => JSON.parse(json))
  .filter((obj) => !obj.warnings)

console.log(data.length)
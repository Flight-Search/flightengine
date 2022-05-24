import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("fly.db");
const lines = Deno.readTextFileSync("./destinations.txt");

// —————————————————————————————————————————————————————————————————————————————
// Prepare Query

// const addRoute = db.prepareQuery<[string, string]>(`
//    INSERT INTO Routes (from_iata, to_iata)
//       VALUES (:from, :to)
//       ON CONFLICT(from_iata, to_iata) DO NOTHING
// `)

// —————————————————————————————————————————————————————————————————————————————
// Execute Query

function json_to_route(json: string) {
   const response = JSON.parse(json)
   const origin = response.meta.links.self.slice(-3)
}

// for (const destination of destinations) {
//    addRoute.execute({
//       from: "DEN",
//       to: destination.iataCode,
//    })
// }

const data = lines
  .split("\n")
  .slice(0, -1)
  .map((json) => JSON.parse(json))
  .filter((obj) => !obj.warnings);

const errorExample = {
   warnings: [
      {
      code: 0,
      title: "Data Not Found",
      detail: "No destination is available",
      source: { parameter: "departureAirportCode" },
      status: 200,
      },
   ],
   meta: {
      count: 0,
      links: {
      self: "https://test.api.amadeus.com/v1/airport/direct-destinations?departureAirportCode=AAM",
      },
   },
};
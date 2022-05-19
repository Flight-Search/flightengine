import africa from "./data/africa.ts"
import asia from "./data/asia.ts"
import australia from "./data/australia.ts"
import canada from "./data/canada.ts"
import carribean from "./data/carribean.ts"
import central_america from "./data/central_america.ts"
import europe from "./data/europe.ts"
import mexico from "./data/mexico.ts"
import middle_east from "./data/middle_east.ts"
import northern_ireland from "./data/northern_ireland.ts"
import scotland from "./data/scotland.ts"
import south_america from "./data/south_america.ts"
import uk from "./data/uk.ts"
import usa from "./data/usa.ts"
import wales from "./data/wales.ts"

const airports = africa
   .concat(asia)
   .concat(australia)
   .concat(canada)
   .concat(carribean)
   .concat(central_america)
   .concat(europe)
   .concat(mexico)
   .concat(middle_east)
   .concat(northern_ireland)
   .concat(scotland)
   .concat(south_america)
   .concat(uk)
   .concat(usa)
   .concat(wales)

for (const airport of airports) {
   await Deno.writeTextFile(
      "airports.csv",
      `${airport}\n`,
      { append: true },
   )
}
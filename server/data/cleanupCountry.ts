// —————————————————————————————————————————————————————————————————————————————
// Environment

type AirportRow = [
   number, // id
   string, // iata
   string, // name
   string, // location
   number, // latitude
   number, // longitude
]

type Airport = {
   id: number
   iata: string
   name: string
   country: string
   latitude: number
   longitude: number
}

const INPUT = "./archive/airports.tsv"
const OUTPUT = "airports.tsv"

const tab = "\t"
const line_end = "\n"
const comma = ","
const quoted_word = /"(.*?)"/
const parens_word = /\(.*?\)/

// —————————————————————————————————————————————————————————————————————————————
// Cleanup Data

// header: [id, iata, name, location, latitude, longitude]
const TSV = await Deno.readTextFile(INPUT)
const [header, ...rows] = TSV.split(line_end)

const airports: Airport[] = rows
   .map(row => row.split(tab))
   .map(row => ({
      id: Number(row[0]),
      iata: row[1],
      name: cleanName(row[2]),
      country: cleanCountry(row[3].split(comma).at(-1)?.trim() as string),
      latitude: Number(row[4]),
      longitude: Number(row[5]),
   }))

function cleanCountry(word:string) {
   switch (word) {
      case "Côte d'Ivoire": 
         return "Ivory Coast"
      case "Macedonia": 
      case "Republic of Macedonia":
         return "The Republic of North Macedonia"
      default:
         return word
   }
}

function cleanName(name:string) {
   return name
      .replace(quoted_word, "")
      .replace(parens_word, "")
}

// —————————————————————————————————————————————————————————————————————————————
// Execute

const new_headers: Array<keyof Airport> = [
   "id",
   "iata",
   "name",
   "country",
   "latitude",
   "longitude",
]

Deno.writeTextFileSync(OUTPUT, new_headers.join(tab) + line_end)

for (const airport of airports) {
   Deno.writeTextFileSync(
      OUTPUT,
      new_headers.map(header => airport[header]).join(tab).concat(line_end),
      { append: true },
   )
}
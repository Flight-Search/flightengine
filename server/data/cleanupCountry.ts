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

const tab = "\t"
const lineEnd = "\n"
const comma = ","

const INPUT = "./archive/airports.tsv"
const OUTPUT = "airports.tsv"

// —————————————————————————————————————————————————————————————————————————————
// Cleanup Data

// header: [id, iata, name, location, latitude, longitude]
const TSV = await Deno.readTextFile(INPUT)
const [header, ...rows] = TSV.split(lineEnd)

const airports: Airport[] = rows
   .map(row => row.split(tab))
   .map(row => ({
      id: Number(row[0]),
      iata: row[1],
      name: row[2],
      country: row[3].split(comma).at(-1)?.trim() as string,
      latitude: Number(row[4]),
      longitude: Number(row[5]),
   }))


const newHeaders: Array<keyof Airport> = [
   "id",
   "iata",
   "name",
   "country",
   "latitude",
   "longitude",
]

// —————————————————————————————————————————————————————————————————————————————
// Execute

Deno.writeTextFileSync(OUTPUT, newHeaders.join(tab) + lineEnd)

for (const airport of airports) {
   Deno.writeTextFileSync(
      OUTPUT,
      newHeaders.map(header => airport[header]).join(tab).concat(lineEnd),
      { append: true },
   )
}
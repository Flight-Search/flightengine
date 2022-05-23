// —————————————————————————————————————————————————————————————————————————————
// Environment

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
const space = " "

const quoted_word = /"(.*?)"/
const parens_word = /\(.*?\)/
const spaces = / +/g

// —————————————————————————————————————————————————————————————————————————————
// Data & Cleanup

function cleanCountry(word:string) {
   return word
      .replace(/^[0-9] /, "")
      .replace("Territoryof", "Territory of")
      .replace("British Overseas Territory of", "British")
      .replace(spaces, space)
      .trim()
}

function cleanName(name:string) {
   return name
      .replace(quoted_word, "")
      .replace(parens_word, "")
      .replace(spaces, space)
      .trim()
}

function mapCountry(word:string) {
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

// header: [id, iata, name, location, latitude, longitude]
const TSV = await Deno.readTextFile(INPUT)
const [header, ...rows] = TSV.split(line_end)

const airports: Airport[] = rows
   .map(row => row.split(tab))
   .map(row => ({
      id: Number(row[0]),
      iata: row[1],
      name: cleanName(row[2]),
      country: mapCountry(cleanCountry(row[3].split(comma).at(-1)?.trim() as string)),
      latitude: Number(row[4]),
      longitude: Number(row[5]),
   }))

// —————————————————————————————————————————————————————————————————————————————
// Execute

function write_tsv_to_file() {
   const new_headers: Array<keyof Airport> = [
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
}

function write_json_to_file() {
   Deno.writeTextFileSync("airports.json", JSON.stringify(airports))
}

write_tsv_to_file()
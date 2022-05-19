import airports from "./airports.ts"

const filtered = airports.filter(airport => !airport.error)

const headers = [
   "id",
   "iata",
   "icao",
   "name",
   "location",
   "street_number",
   "street",
   "city",
   "county",
   "state",
   "country_iso",
   "country",
   "postal_code",
   "phone",
   "latitude",
   "longitude",
   "uct",
   "website",
]

await Deno.writeTextFile(
   "airports.tsv",
   headers.join("\t") + "\n"
)

for (const airport of filtered) {
   await Deno.writeTextFile(
      "airports.tsv",
      headers.map(header => airport[header]).join("\t") + "\n",
      { append: true },
   )
}
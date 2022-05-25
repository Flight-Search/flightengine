const data = Deno.readTextFileSync("./destinations.txt")
   .split("\n")
   .map(json => JSON.parse(json))
   .filter(obj => !obj.warnings)
   .filter(obj => !obj.errors)
   .map(obj => {
      const from    = obj.meta.links.self.slice(-3)
      const targets = obj.data.map(d => d.iataCode)

      return targets.map(to => ({ from, to }))
   })
   .flat()
   .map(route => [route.from, route.to])

const de = Deno.readTextFileSync("./de.csv")
   .split("\n")
   .map((line) => line.split(","))

const fg = Deno.readTextFileSync("./fg.csv")
   .split("\n")
   .map((line) => line.split(","))

// —————————————————————————————————————————————————————————————————————————————
// Old Reference Code

// db.query("BEGIN TRANSACTION;")
// const data = lines
//    .split("\n")
//    .map((json) => JSON.parse(json))
//    .filter(obj => !obj.warnings)
//    .filter(obj => !obj.errors)
//    .forEach((obj:Destinations) => {
//       const from = obj.meta.links.self.slice(-3)
//       const targets = obj.data.map(d => d.iataCode)
//       for (const to of targets) {
//          try { addRoute.execute({ from, to }) }
//          catch(e) { console.log(e) }
//          console.log(`${from} → ${to}`)
//       }
//    })
// ;
// db.query("END TRANSACTION;")

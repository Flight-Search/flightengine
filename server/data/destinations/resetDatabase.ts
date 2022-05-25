import { DB } from "https://deno.land/x/sqlite/mod.ts";

// —————————————————————————————————————————————————————————————————————————————
// Environment

const db = new DB("fly.db");
const schema = Deno.readTextFileSync("./sqlite.sql")

// —————————————————————————————————————————————————————————————————————————————
// Execute

try { db.execute(schema) } 
catch(e) { console.log("SQLite setup error: ", e) }
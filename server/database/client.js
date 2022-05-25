import pg from "pg"
const { Pool } = pg

// —————————————————————————————————————————————————————————————————————————————
// Parameters

const host = process.env.psql_host ?? "localhost"
const port = 5432
const schema = "fly"  // psql uses "schema" to mean namespace

// —————————————————————————————————————————————————————————————————————————————
// Database Configuration

const pool = new Pool({
   host,
   port,
   user: "postgres",
   password: "postgres",
   database: "postgres",
 });

pool.connect((err, pool) => {
   err
      ? console.log("Error acquiring client", err.stack)
      : pool.query("SELECT NOW()")
      .then(res => console.log(res.rows))
      .catch(err => console.log(err.stack))
})

pool.on("connect", client => client
   .query(`SET search_path to ${schema};`)
   .then(__ => console.log("Connected to database: ", host))
   .catch(__ => console.log("Error setting search path."))
)

export default pool
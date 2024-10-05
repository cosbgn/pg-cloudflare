
import postgres from "postgres";

export default defineEventHandler(async (event) => {
	const sql = postgres({
		host                 : "endtype-prod-do-user-17847573-0.i.db.ondigitalocean.com",            // Postgres ip address[es] or domain name[s]
		port                 : 25060,          // Postgres server port[s]
		database             : "defaultdb",            // Name of database to connect to
		username             : "doadmin",            // Username of database user
		password             : process.env.PASSWORD,            // Password of database user
		ssl: { rejectUnauthorized: false }
	})
	const spaces = await sql`select id from spaces`
	return spaces
})
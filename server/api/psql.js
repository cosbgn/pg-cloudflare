
import postgres from "postgres";

export default defineEventHandler(async (event) => {
	const sql = postgres({
		host                 : process.env.HOST,            // Postgres ip address[es] or domain name[s]
		port                 : 25060,          // Postgres server port[s]
		database             : process.env.DATABASE,            // Name of database to connect to
		username             : process.env.USERNAME,            // Username of database user
		password             : process.env.PASSWORD,            // Password of database user
		ssl: { rejectUnauthorized: false }
	})
	const spaces = await sql`select id from spaces`
	return spaces
})
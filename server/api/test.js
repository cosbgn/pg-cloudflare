
import postgres from "postgres";

export default defineEventHandler(async (event) => {
	const sql = postgres(process.env.PG_URI)
	const spaces = await sql`select id from spaces`
	return spaces
})
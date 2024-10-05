import pg from 'pg'

export default defineEventHandler(async (event) => {
	const { Client } = pg
	const client = new Client({ 
		connectionString:process.env.PG_URI,
		ssl: {
			rejectUnauthorized: false
		}
	 })
	await client.connect()
	const res = await client.query("select id from spaces")
	console.log(res.rows[0].message) // Hello world!
	await client.end()
	return res.rows?.[0] || "Nope"
})
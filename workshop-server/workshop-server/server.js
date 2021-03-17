require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", 8080);

const Pool = require("pg").Pool;
const config = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: "workshop"
};

const pool = new Pool(config);

app.get('/hello', (req, res) => {
	// console log the request query json object
	console.log(req.query);
	// console log the person parameter
	console.log(req.query.person);
	// now send a response back to the client
	res.json({response: `Hello, ${req.query.person}`});
});

app.post('/api', async (req, res) => {
	//For checking the database, and add or report the status
	const work = req.body.workshop;
	const attend = req.body.attendee;
	try{
		const template1 = "Select * from pain where workshop = $1 and attendee = $2";
		const check = await pool.query(template1, [work, attend]);
		if(check.rowCount != 0){
			res.json({error: "attendee already enrolled"});
		}

		else{
			const template2 = " Insert into pain (workshop, attendee) VALUES ($1, $2)";
			const response = await pool.query(template2, [work, attend]);
			res.json({"attendee" : attend, "workshop": work});
		}
	} catch (err){
		console.log(err);
	}
})

app.get('/api', async (req, res) => {
	//For reporting the workshop that are in the database only if work is undefined
	let work = req.query.workshop;
	console.log(work);
	if(work == undefined){

		try{
			const query = "select workshop from pain group by workshop;"
			const dbresponse = await pool.query(query);
			const results = dbresponse.rows.map((row) => {return row.workshop});
			res.json({workshops : results});
		}
		catch (err){
			console.log(err);
		}
	}else{ //otherwise check and report the attendees in the workshop
		try{
			const template1 = "Select attendee from pain where workshop = $1;"
			const check = await pool.query(template1, [work]);
			if(check.rowCount == 0){ //if rowcount is 0 then print this
				res.json({error: "workshop not found"});
			}//end of if
			else{ //otherwise report the attendees
				const results = check.rows.map((row) => { return row.attendee});
				res.json({attendees : results});
			}
		}
		catch (err){
			console.log(err);
		}
	}//end of else`
});




app.listen(app.get("port"), () => {
	console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});

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
	database: "workshop_v2"
};

const pool = new Pool(config);

//This is needed to create the user in the psql
//It also checks if the username is taken or not
app.post('/create-user', async (req, res) => {
	const usern = req.body.username;
	const fname = req.body.firstname;
	const lname = req.body.lastname;
	const emails = req.body.email;

	try{
		const template1 = "Select username from users where username = $1";

		const check = await pool.query(template1, [usern]);
		if(check.rowCount != 0){
			res.json({status: "username taken"});
		}
		else{
			const template2 = "Insert into users (username, firstname, lastname, email) Values ($1, $2, $3, $4)";
			const response = await pool.query(template2, [usern, fname, lname, emails]);
			res.json({status: "user added"});
		}//end of else
	}catch (err){
		console.log(err);
	}
});

//This function helps delete the user from the table
//It does that based on the username
//If the username is not found it returns the message "Username does not exist"
app.delete('/delete-user', async (req, res) => {
	const usern = req.body.username;

	try{
		const template1 = "Select * from users where username = $1";
		const check = await pool.query(template1, [usern]);
		if(check.rowCount != 0){
			const template2 = "Delete from users where username = $1";
			const response = await pool.query(template2, [usern]);
			res.json({status: "deleted"});
		}
		else{
			res.json({status: "Username does not exist"});
		}
	} catch(err){
		console.log(err);
	}
});

//This function helps us list the users with all there information.
//It list's both the summary and everything about the user
app.get('/list-users', async (req, res) => {
	const something = req.query.type;
	let fin = {};
	let y = 0;
	let last = [];
	try{
		if(something == "full"){
			const template1 = "Select * from users";
			const check = await pool.query(template1);
			const results = check.rows.map(function (item){
				fin = {username: item.username, firstname: item.firstname, lastname: item.lastname, email: item.email};
				last[y] = fin;
				y++;
			})


			res.json({users: last});
		} else if(something == "summary"){
			const template2 = "Select * from users";
			const check = await pool.query(template2);
			const results = check.rows.map(function (item){
				fin = {firstname: item.firstname, lastname: item.lastname};
				last[y] = fin;
				y++;
			})
			res.json({users: last});
		}//end of else if
	} catch(err){
		console.log(err);
	}
});

//This function adds workshop to the table
//If the workshop already exist it returns the message "workshop already exists"
app.post('/add-workshop', async (req, res) => {
	const titles = req.body.title;
	const dates = req.body.date;
	const locations = req.body.location;
	const maxseat = req.body.maxseats;
	const instructors = req.body.instructor;

	try{
		const template1 = "Select * from workshops where title = $1 AND date = $2 AND location = $3 AND maxseats = $4 AND instructor = $5";
		const check = await pool.query(template1, [titles, dates, locations, maxseat, instructors]);
		if(check.rowCount != 0){
			res.json({status: "workshop already in database"});
		}
		else{
			const template2 = "Insert into workshops (title, date, location, maxseats, instructor) values ($1, $2, $3, $4, $5)";
			const response = await pool.query(template2, [titles, dates, locations, maxseat, instructors]);
			res.json({status: "workshop added"});
		}
	} catch(err){
		console.log(err);
	}
});

//This function helps enroll the user to the workshops
//It checks factors like workshop space limit, username 
app.post('/enroll', async (req, res) => {
	const titles = req.body.title;
	const dates = req.body.date;
	const locations = req.body.location;
	const maxseat = req.body.maxseats;
	const instructors = req.body.instructor;
	const uname = req.body.username;
	let good = false;
	let one = 0;
	let two = 0;
	let three = 0;
	let four = 0;
	try{
		const template1 = "Select * from users where username = $1";
		const check = await pool.query(template1, [uname]);
		const get = "Select USER_ID from users where username = $1";
		const check2 = await pool.query(get, [uname]);
		const result1 = check2.rows.map((row) => {return row.user_id});
		one = result1;
		one = one.toString().replace(/[\[\]']+/g,'');
		one = parseInt(one);
		if(check.rowCount == 0){
			res.json({status: "user not in database"});
		}else{
			const template2 = "Select * from workshops where title = $1 AND date = $2 AND location = $3";
			const check = await pool.query(template2, [titles, dates, locations]);
			const get2 = "SELECT WORKSHOP_ID from workshops where title = $1 AND date = $2 AND location = $3";
			const check2 = await pool.query(get2, [titles, dates, locations]);
			const result2 = check2.rows.map((row) => {return row.workshop_id});
			two = result2;
			two = two.toString().replace(/[\[\]']+/g,'');
			two = parseInt(two);
			if(check.rowCount == 0){
				res.json({status: "workshop does not exist"});
			}//end of if
			else{
				const template4 = "select maxseats from workshops where title = $1 AND location =$2 AND date = $3";
				const check = await pool.query(template4, [titles, locations, dates]);
				const result = check.rows.map((row) => {return row.maxseats});
				three = result;
				three = three.toString().replace(/[\[\]']+/g,'');
				three = parseInt(three);


				const template5 = "select count(*) as occupied from workshops join enrollment on enrollment.workshop_id = workshops.workshop_id where workshops.workshop_id = $1";
				const check2 = await pool.query(template5, [two]);
				const result2 = check2.rows.map((row) => {return row.occupied});
				four = result2;
				four = four.toString().replace(/[\[\]']+/g,'');
				four = parseInt(four);
				
				if(four < three){
					const template3 = "insert into enrollment (user_id, workshop_id) values ($1, $2)";
					const check = await pool.query(template3, [one, two]);
					good = true;
					if(good){
						res.json({status: "user added"});
					}
				}
				else{
					res.json({status: "no seats available"})
				}
				
				
			}

			
		}
	} catch(err){
		if(!good){
			res.json({status: "user already enrolled"});
		}else{
			console.log(err);
		}
	}


});

//This function lists the workshops in the table
app.get('/list-workshops', async (req, res) => {
	let fin = {};
	let y = 0;
	let last = [];
	var dateFormat = require('dateformat');
	try{
		const template1 = "select * from workshops";
		const check = await pool.query(template1);
		const results = check.rows.map(function (item){
			fin = {title: item.title, date: dateFormat(item.date, "yyyy-mm-dd"), location: item.location};
			last[y] = fin;
			y++;
		})
		res.json({workshops: last});
	}
	catch(err){
		console.log(err);
	}
});

//This functions helps list the attendees in the workshop that postman is checking
app.get('/attendees', async (req, res) => {
	const titles = req.query.title;
	const dates = req.query.date;
	const locations = req.query.location;
	let fine = {};
	let y = 0;
	let last = [];

	try{
		const template1 = "Select * from workshops where title = $1 AND date = $2 AND location = $3";
		const check = await pool.query(template1, [titles, dates, locations]);
		if(check.rowCount == 0){
			res.json({error: "workshop does not exist"});
		}
		else{
			const template2 = "select users.firstname, users.lastname from users join enrollment on enrollment.user_id = users.user_id join workshops on enrollment.workshop_id = workshops.workshop_id where workshops.title = $1 AND workshops.date = $2 AND workshops.location = $3";
			const check = await pool.query(template2, [titles, dates, locations]);
			const results = check.rows.map(function (item){
				fin = {firstname: item.firstname, lastname: item.lastname};
				last[y] = fin;
				y++;
			})
			res.json({attendees: last});
		}
	} catch(err){
		console.log(err);
	}


});




app.listen(app.get("port"), () => {
	console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});

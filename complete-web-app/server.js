require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.set("port", 8080);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
var Pool = require("pg").Pool;
const config = {
	  host: process.env.DB_HOST,
	  user: process.env.DB_USER,
	  password: process.env.DB_PASS,
	  database: "food_nutrition",
};

const pool = new Pool(config);

app.get("/listfood", async (req, res) => {
	const name = req.query.name;
	let fin = {};
	let y = 0;
	let last = [];
	try{
		const template = `Select description, kcal, protein_g, (fa_sat_g + fa_mono_g + fa_poly_g) as Fat, carbohydrate_g from entries where description like '%${name}%'`;
		const response = await pool.query(template);
		const results = response.rows.map(function(item){
			fin = {Description: item.description, Kcal: item.kcal, Protein: item.protein_g, Fats: parseFloat(item.fat).toFixed(2), Carbs: item.carbohydrate_g};
			last[y] = fin;
			y++;
		})
		res.json(last);

	} catch (err){
		console.log(err);
	}

});



app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}/`);
});

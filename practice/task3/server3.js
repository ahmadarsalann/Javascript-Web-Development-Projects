const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("port", 8080);
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({extended: true}));



const campgrounds = [{name: "Three Rivers Petroglyph Site", town: "Lincoln, NM", lengthLimit: 25, elevation: 4986, numberOfSites: 7, padType: "gravel"},
	{name: "Baca Campground", town: "Lincoln, NM", lengthLimit: 32, elevation: 6397, numberOfSites: 7, padType: "dirt"},
	{name: "South Fork Campground", town: "Nogal, NM", lengthLimit: 19, elevation: 7513, numberOfSites: 60, padType: "unknown"},
	{name: "Valley of Fires Recreation Area", town: "Carrizozo, NM", lengthLimit: 38, elevation: 5249, numberOfSites: 19, padType: "asphalt"},
	{name: "Oak Grove Campground", town: "Alto, NM", lengthLimit: 25, elevation: 8464, numberOfSites: 30, padType: "unknown"},
	{name: "Three Rivers Campground", lengthLimit: 25, elevation: 6332, numberOfSites: 12, padType: "dirt"},
	{name: "Silver Campground", town: "Cloudcroft, NM", lengthLimit: 30, elevation: 8956, numberOfSites: 30, padType: "gravel"},
	{name: "Springtime Campground", town: "Magdalena, NM",  elevation: 7381, numberOfSites: 6, padType: "dirt"},
	{name: "Bear Trap Campground", town: "Magdalena, NM", lengthLimit: 21, elevation: 8497, numberOfSites: 4, padType: "grass"},
	{name: "Datil Well Campground", town: "Datil, NM", lengthLimit: 35, elevation: 7414, numberOfSites: 22, padType: "dirt"},
	{name: "Apache Creek",  town: "Reserve, NM", lengthLimit: 19, elevation: 6397, numberOfSites: 10, padType: "gravel"},

]

//HELLO WORLD
app.get("/hello", (req, res) => {
	res.json({msg: "Hello, World!"});
});


// Hi with one parameter, name 
//
app.get("/hi", (req, res) => {
	res.json({msg: `Hi, ${req.query.name}`});
});


/*
List All get request. No Parameters,ype:   
    {"campgrounds":["Three Rivers Petroglyph Site",
		    "Baca Campground",
		    "South Fork Campground",
		    "Valley of Fires Recreation Area",
		    "Oak Grove Campground",
		    "Three Rivers Campground",
		    "Silver Campground",
		    "Springtime Campground",
		    "Bear Trap Campground",
		    "Datil Well Campground",
		    "Apache Creek"]}

*/


app.get("/listAll", (req, res) => {
	res.json({campgrounds: campgrounds.map((entry) => {return entry.name})});
});


/*
   Search get request takes one parameter q with the value of a campground name
   It returns the json object containing all the information for a campground
   */
app.get('/search', (req, res) => {
	let searchTerm = req.query.q;//to get the campground name from postman
	console.log(`Search for ${searchTerm}`);//prints the name
	let answer = {};//make a answer object
	for(let x = 0; x < campgrounds.length; x++){//a for loop to loop through the campgrounds array
		if(campgrounds[x].name == searchTerm){//if name equals to name from post man
			answer = campgrounds[x];//put it in the answer object
		}//end of if
	}//end of for
	res.json(answer);//returns the answer
})


/* Fit get request. One parameter called length which is the length of the RV.
   the request returns the campgrounds that can fit that length RV. 
   so, if the length parameter is 22 the method should return

   {
    "campgrounds": [
	{
	    "campground": "Three Rivers Petroglyph Site",
	    "location": "Lincoln, NM",
	    "maxLength": 25
	},
	{
	    "campground": "Baca Campground",
	    "location": "Lincoln, NM",
	    "maxLength": 32
	},
	{
	    "campground": "Valley of Fires Recreation Area",
	    "location": "Carrizozo, NM",
	    "maxLength": 38
	},
	{
	    "campground": "Oak Grove Campground",
	    "location": "Alto, NM",
	    "maxLength": 25
	},
	{
	    "campground": "Three Rivers Campground",
	    "maxLength": 25
	},
	{
	    "campground": "Silver Campground",
	    "location": "Cloudcroft, NM",
	    "maxLength": 30
	},
	{
	    "campground": "Datil Well Campground",
	    "location": "Datil, NM",
	    "maxLength": 35
	}
    ]
   }

   The output needs to match this format. The response json object has a key called 'campgrounds' 
   whose value is an array of json objects each representing a campground. Each of those Json 
   objects in the array have the keys 'campground', 'location', and 'maxLength'.

*/
app.get('/fit', (req, res) => {
	let searchTerm = req.query.length;//to get the length of the RV
	let hopeful = {};//make a object
	let results = [];//make an array
	// TO DO
	let y = 0;//initialize y to 0
	for(let x = 0; x < campgrounds.length; x++){//for loop to loop throught the campground array
		if(campgrounds[x].lengthLimit > searchTerm){//if campground Rv length is greater than the searchterm length
			hopeful = {campground: campgrounds[x].name, location: campgrounds[x].town, maxLength: campgrounds[x].lengthLimit};//put it in hopeful object
			results[y] = hopeful;//put the object in array
			y++;//increment y
		}//end of if
	}//end of for

	res.json({campgrounds: results});//returns the new array
})


/*
    elevation get request. This request takes 2 parameters:

	altitude:  the elevation specified by the user
	direction: can be either the strings 'higher' or 'lower'

    The interpretation of this is as follows. If the request is

	/elevation?altitude=8000&direction=higher

    then the request should return all camggrounds higher than 8000 feet:

    {
    "campgrounds": [
	{
	    "campground": "Oak Grove Campground",
	    "elevation": 8464,
	    "town": "Alto, NM"
	},
	{
	    "campground": "Silver Campground",
	    "elevation": 8956,
	    "town": "Cloudcroft, NM"
	},
	{
	    "campground": "Bear Trap Campground",
	    "elevation": 8497,
	    "town": "Magdalena, NM"
	}
    ]
}
*/

// TO DO
app.get('/elevation', (req, res) => {
	let searchTerm = req.query.altitude;//to get the altitude specified in postman
	let searchTerm2 = req.query.direction;//to see if we have to return higher altitude or lower altitude campgrounds
	let hopeful = {};//initialize an object
	let results = [];//initialize the array
	// TO DO
	let y = 0;//initialize the y to 0
	for(let x = 0; x < campgrounds.length; x++){//loop through the campground array
		if(searchTerm2 == "higher"){//if the search term 2 is higher
			if(campgrounds[x].elevation > searchTerm){//then see if the elevation is higher than the search term
				hopeful = {campground: campgrounds[x].name, elevation: campgrounds[x].elevation, town: campgrounds[x].town};//put the campground in the object
				results[y] = hopeful;//put the object in the array
				y++;//increment y
			}//end of if
		}//end of higher if statement
		if(searchTerm2 == "lower"){//if the searchterm is lower
			if(campgrounds[x].elevation < searchTerm){//check if the altitude is lower than the searchterm
				hopeful = {campground: campgrounds[x].name, elevation: campgrounds[x].elevation, town: campgrounds[x].town};//put it in the object
				results[y] = hopeful;//put the object in the array
				y++;//increment y
			}//end of if
		}//end of if
	}//end of for	




	res.json({campgrounds: results});//return the new array
})



//SERVER START
app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}`);
	// eslint-disable-line no-console
});

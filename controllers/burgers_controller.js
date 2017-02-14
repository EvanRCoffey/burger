var express = require('express');

var router = express.Router();

var burgerJS = require('../models/burger.js');

//////////////////////
//	
//	HTML ROUTING
//
//////////////////////

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
	burgerJS.selectAll(function(data) {
	    var burgerObject = {
	      burgers: data
	    };
	    console.log(burgerObject);
	    res.render("index", burgerObject);
	});
});

//////////////////////
//	
//	API ROUTING
//
//////////////////////

//C - post - create burger
router.post("/", function(req, res) {
  burgerJS.insertOne([
    "burger_name", "devoured", "date"
  ], [
    req.body.name, req.body.sleepy, "2016-02-12 12:00:04"
  ], function() {
    res.redirect("/");
  });
});

//R - get - load the burgers data from "burgers"
router.get("/", function(req, res) {
  	burgerJS.selectAll(function(data) {
	    var burgerObject = {
	      burgers: data
	    };
	    console.log(burgerObject);
	    res.render("index", burgerObject);
	});
});

//U - put - change "devoured" to "false"
router.put('/:id', function (req, res) {
	var newBurger = req.body;
	var idVar = {id: req.params.id} // Not sure if this is right.  'id' should be from /:id
	//Change "devoured" of given id to false
	burgerJS.updateOne("burgers", newBurger, idObj, function(data){
		console.log('this works:', data);
	});
  	res.redirect("/");
})

// Export routes for server.js to use.
module.exports = router;
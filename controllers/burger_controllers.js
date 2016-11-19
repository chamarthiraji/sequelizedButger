/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var models= require('../models');
var sequelizeConnection = models.sequelize;



//here we are setting roots and rendering responses to browers 
router.get('/burgers', function (req, res) {
	 return models.burger.findAll()
	 .then(function(burger) {
		var hbsObject = { burgers: burger };
		//console.log(hbsObject);
	return	res.render('index', hbsObject);
	});
});


router.post('/create', function (req, res) {
	//console.log("req.body.burger_name",req.body.burgerName);
return models.burger.create({burger_name:req.body.burgerName})
.then(function (burger) {
		console.log(burger);
	return res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	//var condition = 'id = ' + req.params.id;
	//console.log('condition', condition);
	return models.burger.update({devoured: req.body.devoured},{ where:{id:req.params.id}})
	.then (function (burger) {
	return	res.redirect('/burgers');
	});

});

// If no matching route is found default to home
router.use('/', function (req, res) {
	res.redirect('/burgers');
});

module.exports = router;

var express = require("express");
var router = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/sampsite"; //default local port

//define home
//needs link to /thelist + dl link + json formatting
router.get("/",function(req,res,next){
	res.render("index", {title: Code Generator and Monitor});
});

router.post("/generatecodes", function(req,res){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.log("Unable to connect: ", err);
		}else{
			console.log("Connection established to: ", url);
			var collection = db.collection('couponcodes');
			var couponcode1 = {code: req.body.code, 
	      			redeemed_by:req.body.redeemer, 
	      			redeemer_email = req.body.redeemer_email,
	      			redeemed_on:req.body.redeemed_on};
	      		collection.insert([couponcode1], function(err,result){
	      			if(err){
	      				console.log("Error: ", err);
	      			}else{
	      				res.redirect("thelist"); //index
	      			}
	      		db.close();
	      		});
		}
	});
});

//change to route to redeemd code
//route to page to add students called newstudent.jade
router.get("/redeemcode", function(req,res){
	res.render('redeemcode', {title:"Redeem Code"});
});

router.post("/redeemcode", function(req,res){
	MongoClient.connect(url,function(err,db){
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
	      		console.log('Connected to Server');   
	      		var collection = db.collection("couponcodes")	;
	      		var couponcode1 = {code: req.body.code, 
	      			redeemed_by:req.body.redeemer, 
	      			redeemer_email = req.body.redeemer_email,
	      			redeemed_on:req.body.redeemed_on};
	      		collection.insert([couponcode1], function(err,result){
	      			if(err){
	      				console.log("Error: ", err);
	      			}else{
	      				res.redirect("thelist"); //index
	      			}
	      		db.close();
	      		});
		}
	});
});
//show  whole list
router.get("/thelist",function(req,res){
	MongoClient.connect(url,function(err,db){
		if(err){
			console.log("Cannot connect to server", err);
		}else{
			console.log("Connection established to: ", url);
			var collection = db.collection('students');
			collection.find({}).toArray(function(err,result){
				if(err){
					res.send(err);
				}else if(result.length){
					res.render('studentlist',{ //still needs to be changed 
						"studentlist":result
					});
				}else{
					res.send("No documents found");
				}
				db.close();
			});
		}
	});
});
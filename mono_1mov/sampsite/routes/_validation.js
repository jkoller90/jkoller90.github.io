//in app.js
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// npm ijnstall --save express-validator
var expressValidator = requrie("express-validator");

var expressSession = require('express-session');

//add entry after bodyparser
express.use(expressValidator());
.cookie parse
.express.static path . join
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));


//in routes/index:
router.get('/', function(req,res,next){ //get usermobile
	res.render('index',{title:"Form validation", success:req.session.success, errors: req.session.errors});
	req.session.errors = null;
});

router.post("/submit",function(req,res,next){
	var matches = false;
	//var i = collection.length
	//while (var i > 0)
	//loop over collection.. insert .matches('loopedItem')
	req.check('email', "Invalid code or email").matches //code needs to match name in html 
	//if valid, i = 0, matches = true,
	var errors = req.validationErrors();
	if(errors){
		req.session.errors = errors; //sends to view 
		req.session.success = false;
	}
	res.redirect("/"); //return to usermobile
	//else  
});
(function())
//https://github.com/chriso/validator.js#validators
//matches(str, pattern [, modifiers]) - check if string matches the pattern. 
//Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').

//in jade: 
form(action="/submit" method="post")
if success 
	section class=success
		h2 successful imnput
else 
	if errors
		section class=errors
			loop over list of errors and list them: this.msg 

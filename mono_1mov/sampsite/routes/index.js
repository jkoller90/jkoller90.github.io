var express = require("express");
var router = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/sampsite"; //default local port

router.get("/",function(req,res,next){
  res.render("index", {title: "Code Generator and Monitor"});
});

router.post("/", function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err){
      console.log("Unable to connect: ", err);
    }else{
      console.log("Connection established to: ", url);
      console.log(req.body);
      var collection = db.collection('couponcodes');
      var couponcode = {
              code: req.body.code, 
              user:req.body.user, 
              redeemedOn:req.body.redeemedOn};
            collection.insert([couponcode], function(err,result){
              if(err){
                console.log("Error with insertion into collection: ", err);
              }else{
                res.redirect("/"); //index
              }
            db.close();
            });
    }
  });
});

router.get("/getdata", function(req,res){
  var resultArray = [];
  mongodb.connect(url, function(err,db){
    if(err){
      console.log ("DB access error: ", err);
    }
    var cursor = db.collection("couponcodes").find();
    cursor.forEach(function(doc,err){
      if(err){
        console.log("Collection access error: ", err);
      }
      resultArray.push(doc);
    }, function(){
      db.close();
      res.render('index',{items:resultArray});
  });
  });   
});


//route to page to add students called newstudent.jade
router.get("/usermobile", function(req,res){
  res.render('usermobile', {title:"Redeem Code"});
});

router.post("/update",function(req,res,next){
  var collection = db.collection("couponcodes");
  var couponcode = {
      code: req.body.code
    };
  if(db.collection.find({code: couponcode})){
      var user = req.body.user; 
      var redeemedOn = req.body.redeemedOn;
      //fine tune with a foreach
      mongodb.connect(url, function(err,db){
        if(err) console.log("Error while connecting to db: ", err);
        //https://blog.serverdensity.com/checking-if-a-document-exists-mongodb-slow-findone-vs-find/
        db.collection("couponcodes").updateOne({"user": req.body.user}, {$set: user}, function(err,result){
          if(err) console.log ("Error: ", err);
        });
        db.collection("couponcodes").updateOne({"redeemedOn": req.body.redeemedOn}, {$set: redeemedOn}, function(err,result){
          if(err) console.log ("Error: ",err);
        });
        db.close();
      });    
    }
});
 
module.exports = router;
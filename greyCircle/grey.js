var x_x;
var context; 

//scoreboard
var hitText = 'Hits: ';
var hits = 0; 
var timeText = "Time: ";
var time = 60; 
var offset;

//$(document).ready(function() {
// 
//});



//var timer = setInterval(function(){ 
//		if(time > -1){
//			$("#time").html(timeText + time--); 			
//		}else if(time == -1){
//			alert("Time's up!");
//			clearInterval(timer);
//		} 
//	}, 1000);


function circleUI() {
	this.mousedown = false;
	this.canvasEl = $('#canvas');
	this.canvas = document.getElementById("canvas");
	context = this.canvas.getContext('2d');
	this.canvasEl.attr("id","drawing");
	this.init();
}

circleUI.prototype.init = function () {
	$("window").bind("mousedown touchstart",
		this.showControl.bind(this)
	);
    
}

var redoptions = {
	canvasWidth: 400
	, strokeWidth: 3.0
	, y: {
		radius: 20
		, strokeColor: '#CC1E1E'
	}
};

var drawSwitch = false;
circleUI.prototype.draw = function () {
	console.log(x_x + " <- x_x");
	console.log($(window).width());
	if (x_x > .8) {
     
		$("#hits").html(hitText + ++hits);
		drawSwitch = true;
		$("div").append("<canvas id='drawing' height='400' width='400'></canvas>");
		
  this.canvas = document.getElementById("drawing");
		this.ctx = this.canvas.getContext('2d');
		this.circ = Math.PI * 2;
		this.quart = Math.PI / 2;
		this.options = redoptions;
		this.ctx.lineWidth = this.options.strokeWidth;
		this.canvas.removeAttribute("id");	
	
 }
	else {
     
		if(drawSwitch){
			drawSwitch=false;
		}
     
		this.canvas = document.getElementById("drawing");
		this.ctx = this.canvas.getContext('2d');
		this.circ = Math.PI * 2;
		this.quart = Math.PI / 2;
		this.options = {
			canvasWidth: 400
			, strokeWidth: 3.0
			, y: {
				radius: 20
				, strokeColor: 'rgba(192, 192, 192, 1)'
			}
		};	
		this.ctx.lineWidth = this.options.strokeWidth;
     
		setTimeout(function(){$("#drawing").attr("class","inactive")}, 250);
		$("#drawing").attr("class","active");		
	}
   
	var x = this.x - offset.left;
	var y = this.y / $(window).height();
	var ctx = this.ctx;	
	var center = this.options.canvasWidth / 2;
	ctx.drawImage(this.canvas, 0, 0);
	ctx.beginPath();
	ctx.arc(center, center, this.options.y.radius, -this.quart, (this.circ * y) - this.quart, false);
	ctx.strokeStyle = this.options.y.strokeColor;
	ctx.stroke();
	// Y filler
	ctx.beginPath();
	ctx.arc(center, center, this.options.y.radius, (this.circ * y) - this.quart, -this.quart, false);
	ctx.strokeStyle = this.options.strokeColor;
	ctx.stroke();
    
	setTimeout(function(){
		$("#drawing").attr("class","");
	}, 300);
}

circleUI.prototype.showControl = function (e) {
	
//		var $click = $(e.target);

    
  this.x = e.pageX;
  x_x = this.x / $("body").width(); //- offset.left;
		
  this.y = e.clientY;
  

		$("#drawing").addClass('active').css({
			top: this.y
			, left: this.x
		});

			this.draw();
}

new circleUI();
//var x_x;
//var context;
////scoreboard
//var hitText = 'Hits: ';
//var hits = 0;
//var timeText = "Time: ";
//var time = 60;
//window.onresize = function () {
//    document.getElementsByName("body").innerHTML = window.innerWidth;
//};
////var timer = setInterval(function(){ 
////		if(time > -1){
////			$("#time").html(timeText + time--); 			
////		}else if(time == -1){
////			alert("Time's up!");
////			clearInterval(timer);
////		} 
////	}, 1000);
////if(time == -1) 
//function circleUI() {
//    this.mousedown = false;
//    this.canvasEl = $('#canvas');
//    this.canvas = document.getElementById("canvas");
//    context = this.canvas.getContext('2d');
//    this.canvasEl.attr("id", "drawing");
//    this.init();
//}
//circleUI.prototype.init = function () {
//    $(window).bind("mousedown touchstart", this.showControl.bind(this));
//}
//var redoptions = {
//    canvasWidth: 400
//    , strokeWidth: 3.0
//    , y: {
//        radius: 20
//        , strokeColor: '#CC1E1E'
//    }
//};
//var drawSwitch = false;
//circleUI.prototype.draw = function () {
//    //  this.x = e.pageX;
//    //		x_x = this.x / $("body").width();
//    console.log(x_x + " <- x_x");
//    //	console.log($(body).width());
//    if (x_x > .8) {
//        $("#hits").html(hitText + ++hits);
//        drawSwitch = true;
//        $("div").append("<canvas id='drawing' height='400' width='400'></canvas>");
//        this.canvas = document.getElementById("drawing");
//        this.ctx = this.canvas.getContext('2d');
//        this.circ = Math.PI * 2;
//        this.quart = Math.PI / 2;
//        this.options = redoptions;
//        this.ctx.lineWidth = this.options.strokeWidth;
//        this.canvas.removeAttribute("id");
//    }
//    else {
//        if (drawSwitch) {
//            drawSwitch = false;
//        }
//        this.canvas = document.getElementById("drawing");
//        this.ctx = this.canvas.getContext('2d');
//        this.circ = Math.PI * 2;
//        this.quart = Math.PI / 2;
//        this.options = {
//            canvasWidth: 400
//            , strokeWidth: 3.0
//            , y: {
//                radius: 20
//                , strokeColor: 'rgba(192, 192, 192, 1)'
//            }
//        };
//        this.ctx.lineWidth = this.options.strokeWidth;
//        setTimeout(function () {
//            $("#drawing").attr("class", "inactive")
//        }, 250);
//        $("#drawing").attr("class", "active");
//    }
//    var x = this.x / $(window).width();
//    var y = this.y / $(window).height();
//    var ctx = this.ctx;
//    var center = this.options.canvasWidth / 2;
//    ctx.drawImage(this.canvas, 0, 0);
//    ctx.beginPath();
//    ctx.arc(center, center, this.options.y.radius, -this.quart, (this.circ * y) - this.quart, false);
//    ctx.strokeStyle = this.options.y.strokeColor;
//    ctx.stroke();
//    // Y filler
//    ctx.beginPath();
//    ctx.arc(center, center, this.options.y.radius, (this.circ * y) - this.quart, -this.quart, false);
//    ctx.strokeStyle = this.options.strokeColor;
//    ctx.stroke();
//    setTimeout(function () {
//        $("#drawing").attr("class", "");
//    }, 300);
//}
//circleUI.prototype.showControl = function (e) {
//    this.x = e.pageX;
//    x_x = this.x / $("body").width();
//    this.y = e.pageY;
//    $("#drawing").addClass('active').css({
//        top: this.y
//        , left: this.x
//    });
//    this.draw();
//}
//new circleUI();
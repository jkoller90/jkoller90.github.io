var x_x;
var context; 

//scoreboard
var hitText = 'Hits: ';
var hits = 0; 
var timeText = "Time: ";
var time = 60; 


//var timer = setInterval(function(){ 
//		if(time > -1){
//			$("#time").html(timeText + time--); 			
//		}else if(time == -1){
//			alert("Time's up!");
//			clearInterval(timer);
//		} 
//	}, 1000);

//if(time == -1) 


$(window).on("load resize", function() {
windowWidth = $(window).height();    
 windowHeight = $(window).width();
//$("body").attr("background-size", ""+windowHeight+"px "+windowWidth+"px;");    
});



function circleUI() {
	this.mousedown = false;
	this.canvasEl = $('#canvas');
	this.canvas = document.getElementById("canvas");
	context = this.canvas.getContext('2d');
	this.canvasEl.attr("id","drawing");
	this.init();
}
circleUI.prototype.init = function () {
	$(window).bind("mousedown touchstart",
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
//	console.log(x_x + " <- x_x");
if(!isNaN(x_x)){
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
    
	var x = this.x / $(window).width();
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
    
}else{
    return;
}    
}

var x_offset;
$("html").on("click",function(e){
//    x_offset = $(this).offset();
    x_offset = e.clientX/windowWidth;
    console.log(x_offset);
})

circleUI.prototype.showControl = function (e) {
//  x_offset = this.offset().left;
		this.x = e.pageX;
//  console.log(e.pageX - x_offset);
    
		x_x = this.x / $("body").width();
		this.y = e.pageY;
  if(!isNaN(x_x)){
		$("#drawing").addClass('active').css({
			top: this.y
			, left: this.x
		});


			this.draw();
      
  }
}



new circleUI();
var x_x;
var context;
//scoreboard
var hitText = 'Hits: ';
var hits = 0;
var timeText = "Time: ";
var time = 60;
$(window).bind('orientationchange resize', function (event) {
	if (event.orientation) {
		if (event.orientation == 'landscape') {
			if (window.rotation == 90) {
				rotate(this, -90);
			}
			else {
				rotate(this, 90);
			}
		}
	}
});

function rotate(el, degs) {
	iedegs = degs / 90;
	if (iedegs < 0) iedegs += 4;
	transform = 'rotate(' + degs + 'deg)';
	iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + iedegs + ')';
	styles = {
		transform: transform
		, '-webkit-transform': transform
		, '-moz-transform': transform
		, '-o-transform': transform
		, filter: iefilter
		, '-ms-filter': iefilter
	};
	$(el).css(styles);
}
//$(window).on("load resize", function () {
//	windowWidth = $(window).height();
//	windowHeight = $(window).width();
//});

function circleUI() {
	this.mousedown = false;
	this.canvasEl = $('#canvas');
	this.canvas = document.getElementById("canvas");
	context = this.canvas.getContext('2d');
	this.canvasEl.attr("id", "drawing");
	this.init();
}
circleUI.prototype.init = function () {
	$(window).bind("mousedown touchstart", this.showControl.bind(this));
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
		if (x_x > .8 && !isNaN(x_x)) {
			$("#hits").html(hitText + ++hits);
			drawSwitch = true;
			$("div").append("<canvas id='drawing' height='400' width='400'></canvas>");
			this.canvas = document.getElementById("drawing");
			this.ctx = this.canvas.getContext('2d');
			this.circ = Math.PI * 2;
			this.quart = Math.PI / 2;
			this.options = {
	canvasWidth: 400
	, strokeWidth: 3.0
	, y: {
		radius: 20
		, strokeColor: '#CC1E1E'
	}
};
			this.ctx.lineWidth = this.options.strokeWidth;
			this.canvas.removeAttribute("id");
			console.log(redoptions);
		}
		else {
			if(!isNaN(x_x)){				
			if (drawSwitch) {
				drawSwitch = false;
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
			setTimeout(function () {
				$("#drawing").attr("class", "inactive")
			}, 250);
			$("#drawing").attr("class", "active");
		}else{return;}
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
		setTimeout(function () {
			$("#drawing").attr("class", "");
		}, 220);
	
}
circleUI.prototype.showControl = function (e) {
    this.x = e.clientX;
    x_x = this.x / $("body").width();
    console.log(x_x);
    this.y = e.pageY;
    $("#drawing").addClass('active').css({
        top: this.y
        , left: this.x
    });
    this.draw();
}
new circleUI();
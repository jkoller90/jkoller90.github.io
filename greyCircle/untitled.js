var debug = false; //adjust for debug info to show on site 
//build debug library to include coordinate tap
var fullGlass = '<img class="scoreboard_glasses" src="Full.png">';
var clickedBool = false;

var ios_inc_flag = false; //without implementation of this flag with a boolean on hit click listener, safari will inexplicably double the amount of bottles on scoreboard and will add two bottles on each hit. 

//orientation change requires refresh for alignment			
$(window).on("orientationchange", function () {
    location.reload();
});
//def later completed in getBackgroundSize
var background = {
    width: 0
    , height: 0
}

function getBackgroundSize(elem) {
    // This:
    //       * Gets elem computed styles:
    //             - CSS background-size
    //             - element's width and height
    //       * Extracts background URL
    var computedStyle = getComputedStyle(elem)
        , image = new Image()
        , src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
        , cssSize = computedStyle.backgroundSize
        , elemW = parseInt(computedStyle.width.replace('px', ''), 10)
        , elemH = parseInt(computedStyle.height.replace('px', ''), 10)
        , elemDim = [elemW, elemH]
        , computedDim = []
        , ratio;
    // Load the image with the extracted URL.
    // Should be in cache already.
    image.src = src;
    // Determine the 'ratio'
    ratio = image.width > image.height ? image.width / image.height : image.height / image.width;
    // Split background-size properties into array
    cssSize = cssSize.split(' ');
    // First property is width. It is always set to something.
    computedDim[0] = cssSize[0];
    // If height not set, set it to auto
    computedDim[1] = cssSize.length > 1 ? cssSize[1] : 'auto';
    if (cssSize[0] === 'cover') {
        // Width is greater than height
        if (elemDim[0] > elemDim[1]) {
            // Elem's ratio greater than or equal to img ratio
            if (elemDim[0] / elemDim[1] >= ratio) {
                computedDim[0] = elemDim[0];
                computedDim[1] = 'auto';
            }
            else {
                computedDim[0] = 'auto';
                computedDim[1] = elemDim[1];
            }
        }
        else {
            computedDim[0] = 'auto';
            computedDim[1] = elemDim[1];
        }
    }
    else if (cssSize[0] === 'contain') {
        // Width is less than height
        if (elemDim[0] < elemDim[1]) {
            computedDim[0] = elemDim[0];
            computedDim[1] = 'auto';
        }
        else {
            // elem's ratio is greater than or equal to img ratio
            if (elemDim[0] / elemDim[1] >= ratio) {
                computedDim[0] = 'auto';
                computedDim[1] = elemDim[1];
            }
            else {
                computedDim[1] = 'auto';
                computedDim[0] = elemDim[0];
            }
        }
    }
    else {
        // If not 'cover' or 'contain', loop through the values
        for (var i = cssSize.length; i--;) {
            // Check if values are in pixels or in percentage
            if (cssSize[i].indexOf('px') > -1) {
                // If in pixels, just remove the 'px' to get the value
                computedDim[i] = cssSize[i].replace('px', '');
            }
            else if (cssSize[i].indexOf('%') > -1) {
                // If percentage, get percentage of elem's dimension
                // and assign it to the computed dimension
                computedDim[i] = elemDim[i] * (cssSize[i].replace('%', '') / 100);
            }
        }
    }
    // If both values are set to auto, return image's 
    // original width and height
    if (computedDim[0] === 'auto' && computedDim[1] === 'auto') {
        computedDim[0] = image.width;
        computedDim[1] = image.height;
    }
    else {
        // Depending on whether width or height is auto,
        // calculate the value in pixels of auto.
        // ratio in here is just getting proportions.
        ratio = computedDim[0] === 'auto' ? image.height / computedDim[1] : image.width / computedDim[0];
        computedDim[0] = computedDim[0] === 'auto' ? image.width / ratio : computedDim[0];
        computedDim[1] = computedDim[1] === 'auto' ? image.height / ratio : computedDim[1];
    }
    // Finally, return an object with the width and height of the
    // background image.
    return {
        width: computedDim[0]
        , height: computedDim[1]
    };
}
// paired with getBackgroundSize 
var background = {
    width: ""
    , height: ""
}

function updateData(background) {
    (function debug_click() {
        // Get a reference to our touch-sensitive element
        var touchzone = document.getElementById("container");
        // Add an event handler for the touchstart event
        if (debug === true) {
            touchzone.addEventListener("click", clickHandler, false);
            touchzone.addEventListener("touchdown", touchHandler, false);
        }
    })();

    function clickHandler(event) {
        // Get a reference to our coordinates div
        var coords = document.getElementById("coords");
        // Write the coordinates of the touch to the div
        coords.innerHTML = 'x: ' + event.pageX + ', y: ' + event.pageY;
    }

    function touchHandler(event) {
        // Get a reference to our coordinates div
        var coords = document.getElementById("coords");
        // Write the coordinates of the touch to the div
        coords.innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
    }
    background = getBackgroundSize(document.body);
    if (debug) $(".debug").css("display", "block");
    else $(".debug").css("display", "none");
    document.getElementById('width').innerHTML = background.width + 'px';
    document.getElementById('height').innerHTML = background.height + 'px';
    document.getElementById('winWidth').innerHTML = getComputedStyle(document.body).width;
    document.getElementById('winHeight').innerHTML = getComputedStyle(document.body).height;
    var bh = background.width;
    var bw = background.height;
    //struct array for coordinate input
    var hotspots = [
        {
            top: bh * .4
            , left: bw * .9
	}, //chair 1
        {
            top: bh * .4
            , left: bw * .64
	}, //chair 2
        {
            top: bh * .4
            , left: bw * .4
	}, //chair 3
        {
            top: bh * .4
            , left: bw * .2
	}, //chair 4	
        {
            top: bh * .28
            , left: bw * .035
	}, //boat	
        {
            top: bh * .22
            , left: bw * .42
	}, //bell	
        {
            top: bh * .11
            , left: bw * .92
	}, //palm tree window	
        {
            top: bh * .275
            , left: bw * 1.56
	}, //gopher shadow 	
];
    //set score total
    $(".score").html("0 of " + hotspots.length + " found");
    (function createHotspots() {
        for (var i = 0; i < hotspots.length; i++) {
            $("#container").prepend('<div class="hit" id="hit' + i + '"/>');
            $("#hit" + i).css("top", hotspots[i].top + "px");
            $("#hit" + i).css("left", hotspots[i].left + "px");
            $("#hit" + i).css("width", circleWidth + "px");
            $("#hit" + i).css("height", circleWidth + "px");
        };
    })();
    //object/struct checked against to block future rendering of red circles on repeated clicks 	
    var clicked = {};
    var hotspots = document.getElementsByClassName("hit");
    for (var i = 0; i < hotspots.length; i++) {
        var id = hotspots[i].getAttribute("id");
    }
 
    $(".hit").on("click", function (event) {
        if (!clicked[this.getAttribute("id")] && clickedBool === false) {
            $("#" + this.getAttribute("id")).css("animation", "border .5s ease 1 forwards");
            clicked[this.getAttribute("id")] = true;
            $(".bottles").append(fullGlass);
            ++score;
            ios_inc_flag = true;
            if (iOS && ios_inc_flag === true) {
                
                var ios_length = hotspots.length / 2;
                $(".score").text(score + " of " + hotspots.length + " found");            
            }else{
            $(".score").text(score + " of " + hotspots.length + " found");
            }
            ios_inc_flag = false;
        }
    });
}
// Execute onload, so that the background image is already loaded.
window.onload = window.onresize = updateData;
//requires redefinition for some reason. 
h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
document.getElementById("container").style.width = w;
document.getElementById("container").style.height = h;
//"init"/"public static void main" block
//boolean variable to check for safari 
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//scoreboard		
var score = 0;
var time = 60;
//def of circle dimensions 
var circleWidth = w / 25;
var circleHeight = w / 25;
//setting body to fit screen 	
$("body").attr("width", w);
$("body").attr("height", h);
(function setupContainer() {
    $("#container").prepend('<canvas id="mycanvas" style="border: 1px solid #ccc"> Canvas element not supported	<br/> </canvas>');
})();
(function alignCanvas() {
    $("#mycanvas").attr("width", w + "px");
    $("#mycanvas").attr("height", h + "px");
})();
(function setupMissedClicks() {
    var touchzone = document.getElementById("mycanvas");
    touchzone.addEventListener("touchstart", drawCircle, false);
    if (!iOS) {
        touchzone.addEventListener("mousedown", mouse_drawCircle, false);
    }
})();

function drawCircle(event) {
    clickedBool = true;
    //	alert(clickedBool);
    setTimeout(function () {
        clickedBool = false;
        //		alert(clickedBool);
    }, 750);
    $(".miss").css("width", circleWidth + "px");
    $(".miss").css("height", circleHeight + "px");
    //left
    $(".miss").css("left", event.touches[0].pageX - circleWidth / 2);
    //top
    $(".miss").css("top", event.touches[0].pageY - circleHeight / 2);
    $(".miss").css("animation", "unborder .5s ease 1 forwards");
    setTimeout(function () {
        $(".miss").css("animation", "");
        //left reset for reclicking 
        $(".miss").css("left", 0);
        //top reset for reclicking 
        $(".miss").css("top", 0);
    }, 350);
}

function mouse_drawCircle(event) {
    clickedBool = true;
    //	alert(clickedBool);
    setTimeout(function () {
        clickedBool = false;
        //		alert(clickedBool);
    }, 900);
    $(".miss").css("width", circleWidth + "px");
    $(".miss").css("height", circleHeight + "px");
    //left
    $(".miss").css("left", event.pageX - circleWidth / 2);
    //top
    $(".miss").css("top", event.pageY - circleHeight / 2);
    //coordinates for debugging
    $(".miss").css("animation", "unborder .5s ease 1 forwards");
    setTimeout(function () {
        $(".miss").css("animation", "");
        //left reset for reclicking 
        $(".miss").css("left", 0);
        //top reset for reclicking 
        $(".miss").css("top", 0);
    }, 350);
}

function time_count(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
            element.innerHTML = "Time's up!";
        }
        else {
            time = new Date(msLeft);
            timelabel = "Time: ";
            mins = time.getUTCMinutes();
            element.innerHTML = (timelabel ? timelabel + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }
    element = document.getElementsByClassName(elementName)[0];
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
}
time_count("time", 1, 0);
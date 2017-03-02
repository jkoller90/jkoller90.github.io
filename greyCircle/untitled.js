 //tuples carrying fractiosn to be multiplied to image width to obtain dynamic widths and heights 
 var tupleArr = [[1 / 8, 1 / 6], [1 / 8, .7]];
 //        [.75, 1 / 6], [.75, .7]];
 var hit_score = 0;
 //coordinates and dimensions of hotspots in next three variables:        
 //collects hotspot pixel ranges of hotspots to be used to limit miss-hit rendering
 var hotSpot = [];
 var areaWidth = $("#wrapper").width() / 16 - 10;
 var areaHeight = $("#wrapper").height() / 9 - 10;
 var time = 60;
 if (time > 0) {
     setInterval(function () {
         --time;
         $("#time").text("Time:" + time)
     }, 1000);
 }


 function createHotspots(tupleArr) {
     for (var i = 0; i < tupleArr.length; i++) {
         var hotSpotTuple = []; //contains measurements to be used to add divs to page
         $("body").prepend('<div class="hit" id="hit' + i + '"/>');
         var hit_x = $("img").width() * tupleArr[i][0];
         hotSpotTuple.push(hit_x);
         var hit_y = $("img").height() * tupleArr[i][1];
         hotSpotTuple.push(hit_y);
         hotSpot.push(hotSpotTuple);
         $("#hit" + i).css("left", hit_x + "px");
         $("#hit" + i).css("top", hit_y + "px");
     };
 }

 function updateHotSpots(tupleArr) {
     for (var i = 0; i < tupleArr.length++; i++) {
         $("#hit" + i).css("left", $("img").width() * tupleArr[i][0] + "px");
         $("#hit" + i).css("top", $("img").height() * tupleArr[i][1] + "px");
     }
 }

 function getHitRanges() {
     var ranges = [];
     for (var i = 0; i < tupleArr.length; i++) {
         var hit_x = $("img").width() * tupleArr[i][0];
         var hit_y = $("img").height() * tupleArr[i][1];
         var rangeObj = {
             horizontalRange: [hit_x, hit_x + areaWidth]
             , verticalRange: [hit_y, hit_y + areaHeight]
         };
         ranges.push(rangeObj);
     }
     return ranges;
 }
 var clickedHitDivs = [];
 $("#wrapper").click(function (e) {
     var target = $(e.target);
     if (!target.is("div")) {
         $(".miss").css("width", areaWidth - 11 + "px");
         $(".miss").css("height", areaHeight - 11 + "px");
         //left
         $(".miss").css("left", e.clientX - ($(".miss").width()) / 2 + "px");
         //top
         $(".miss").css("top", e.clientY - ($(".miss").height()) / 2 + "px");
         //animation
         $(".miss").css("animation", "unborder .5s ease 1 forwards");
         setTimeout(function () {
             $(".miss").css("animation", "");
         }, 350)
     }
     else {
         if (clickedHitDivs.indexOf(target.attr("id")) === -1) {
             console.log(clickedHitDivs.indexOf(target.attr("id")));
             clickedHitDivs.push(target.attr("id"));
             ++hit_score;
             $("#hits").text("Hits:" + hit_score);
         }
     }
 });
 var ranges;
 $(window).on("load", function () {
     //hotspot dimensions
     createHotspots(tupleArr);
     $(".hit").css("width", areaWidth + "px");
     $(".hit").css("height", areaHeight + "px");
     $(".hit").click(function () {
         $(this).css("animation", "border .1s ease 1 forwards");
     });
     ranges = getHitRanges();
     //            console.log(ranges + " ranges for reference");
 });
 $(window).resize(function () {
     $("area").css("width", areaWidth + "px");
     $("area").css("height", areaHeight + "px");
     updateHotSpots(tupleArr);
     $("area").click(function () {
         $(this).css("animation", "border .1s ease 1 forwards");
     });
     ranges = getHitRanges();
 });
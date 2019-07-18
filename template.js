//document.getElementById('some_frame_id').contentWindow.location.reload();
// $('html').animate({scrollTop: $('.aboutMe').offset().top)}, 'slow');
$('#frontEndButton').on('click',function(){
  $('#frontEnd').css('display','block');
  $('html, body').animate({
      scrollTop: $("#frontEnd").offset().top
  }, 350);
});
$('#UnityUnrealButton').click(function(){
  $('#UnityUnreal').css('display','block');
  $('html, body').animate({
      scrollTop: $("#UnityUnreal").offset().top
  }, 350);
});
$('#aboutButton').click(function(){
  $('.aboutMe').css('display','block');
  $('html, body').animate({
      scrollTop: $(".aboutMe").offset().top
  }, 350);
});

$('#WritingSamplesButton').click(function(){
  $('#WritingSamples').css('display','block');
});
$('#VideoPhotographyButton').click(function(){
  $('#VideoPhotography').css('display','block');
});


$(document).ready(
  function()
  {
    $("canvas").css("width","100%");
  }
)
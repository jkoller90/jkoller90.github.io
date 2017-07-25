//document.getElementById('some_frame_id').contentWindow.location.reload();
// $('html').animate({scrollTop: $('.aboutMe').offset().top)}, 'slow');
$('#frontEndButton').on('click',function(){
  $('#frontEnd').css('display','block');
  $('html, body').animate({
      scrollTop: $("#frontEnd").offset().top
  }, 2000);
});
$('#redStripeButton').click(function(){
  $('#redStripe').css('display','block');
  $('html, body').animate({
      scrollTop: $("#redStripe").offset().top
  }, 2000);
});
$('#UnityUnrealButton').click(function(){
  $('#UnityUnreal').css('display','block');
  $('html, body').animate({
      scrollTop: $("#UnityUnreal").offset().top
  }, 2000);
});
$('#aboutButton').click(function(){
  $('.aboutMe').css('display','block');
  $('html, body').animate({
      scrollTop: $(".aboutMe").offset().top
  }, 2000);
});

$('#WritingSamplesButton').click(function(){
  $('#WritingSamples').css('display','block');
});
$('#VideoPhotographyButton').click(function(){
  $('#VideoPhotography').css('display','block');
});

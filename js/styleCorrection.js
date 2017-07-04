var resizeEvent = new Event('resize');

var portfolio = document.getElementById('portfolio');
$('.portfolio').click(function () {
  $('#portfolio').css('visibility', 'visible');
  $('#portfolio').children().css('visibility', 'visible');
  $('#portfolio').children().children().css('visibility', 'visible');
  portfolio.scrollIntoView();
})
var about = document.getElementById('about');
$('.blue').click(function () {
  $('#about').css('visibility', 'visible');
  $('#about').children().css('visibility', 'visible');
  $('#about').children().children().css('visibility', 'visible');
  $('#about').children().css('display', 'block');
  $('#about').css('display', 'block');
  $('#about').css('width', '100%');
  $('#about').css('padding', '30% 70% 3% 3%');
  about.scrollIntoView({block: "start", behavior: "instant"});
})

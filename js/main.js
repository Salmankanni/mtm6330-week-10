console.log('IMIN');
$(document).ready(function($){
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color','red')
  $('#special').css('background-color','#ffcc00')
  $('p.first small').css('background-color', 'lightgrey')

$('.first').html('lets learn <em>jquery</em>')
$('.first').prepend('<h2>Welcome</h2>')
$('.first').after('<small>Make webpages interactive</small>')

$('#yourName').val('Bob Builder')

/* Attribute selectors */
$('a[href="#1"]').css('background-color', 'tomato')
$('a[href^="#"]').css('color', 'grey') // $ end with
$('a[href*="google"]').css('fontWeight','bold')

/* Animation function */
// $('.card:first').hide(400)
// $('.card:first').delay(1000)hide(400)
//$('.card:first').delay(1000).hide(400).show(800)
/*$('.card:first').delay(1000).hide(400).show(800, function(){
  alert('we\'re back')
})*/
$('.card').animate({borderRadius: '20px', }, 400)

/* Attributes method */
$('img:first').attr('src', './img/image-5.jpg')

/* class method */
console.log($('img:first').hasClass('special'))
//$('img').addClass('special')
$('img').toggleClass('special')

/* events */
$('img').click(function () {
  console.log($(this).attr('src'))
  $(this).toggleClass('special')
})

})

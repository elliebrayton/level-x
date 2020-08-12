$('.burger, .overlay').click(function(){
$('.burger').toggleClass('clicked');
$('.overlay').toggleClass('show');
$('.mobile-menu').toggleClass('show');
$('body').toggleClass('overflow');
});


var height = $('header').height();

$(window).scroll(function(){
  if($(this).scrollTop() > height){
  $('navigation').addClass('color');
  } else{
  $('navigation').removeClass('fixed');
}
}
);

$('.burger, .overlay').click(function(){
$('.burger').toggleClass('clicked');
$('.overlay').toggleClass('show');
$('.mobile-menu').toggleClass('show');
$('body').toggleClass('overflow');
});


  $("#header").backstretch([
  "images/blue_angels_fat_albert.jpg",
  "images/Military.jpg",
  "images/military-men-departing-service-uniform-40820-450x300.jpeg"
], {
  duration: 1200,
  fade: 800,
  overlay: {
    init: true,
    background: "rgba(24, 49, 91)",
    opacity: 0.71
  }
});

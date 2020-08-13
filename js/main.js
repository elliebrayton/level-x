$('.burger, .overlay').click(function(){
$('.burger').toggleClass('clicked');
$('.overlay').toggleClass('show');
$('.mobile-menu').toggleClass('show');
$('body').toggleClass('overflow');
});


var height = $('header').height();


  $("#header").backstretch([
  "/images/blue_angels_fat_albert.jpg",
  "/images/military.jpg",
  "/images/military-men-departing-service-uniform-40820-450x300.jpeg"
], {
  duration: 1200,
  fade: 800,
  overlay: {
    init: true,
    background: "rgba(24, 49, 91)",
    opacity: 0.71
  }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

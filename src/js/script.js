$(document).ready(function() {
    $('#menu').on('click', function() {
        $('#navContainer').toggleClass('active');
        // $('.nav-list').toggle();
        $('.nav-list').fadeToggle(300);
    })

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      center: true,
      responsive:{
          0:{
              items:1
          },
          760:{
              items:2
          },
          1200:{
              items:3
          },
          1600: {
            items: 4
          },
      }
    })
});

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Welcome To House Of Culture')
  .pauseFor(300)
  .start();



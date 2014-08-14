'use strict'

$(function prepareTestimonials () {
  var blocks = $('.testimonial-block');
  var interval = 1000*10;

  // show a random testimonial
  var selected = Math.floor(Math.random() * blocks.length);
  $(blocks[selected]).show();

  // cycle through each testimonial
  if(blocks.length > 1) {
    setInterval(next, interval);
  }

  function change (newIndex) {
    $(blocks[selected]).fadeOut('fast', function () {
      $(blocks[newIndex]).fadeIn('fast');
    });
  }

  function next () {
    change((selected + 1) % blocks.length);
  }
});

$(function animateScroll () {
  $('a[href*=#]').click(function() {
    var href = $.attr(this, 'href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });
});

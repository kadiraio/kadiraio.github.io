'use strict'

$(function prepareTestimonials () {
  var blocks = $('#testimonials .testimonial-block');
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
      selected = newIndex;
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

// loginState
$(function() {
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
  }

  var loginState = getCookie('kadira-prod-login-state');
  if(loginState) {
    loginState = JSON.parse(decodeURIComponent(loginState));
    $('#toplink-login').text('Open Kadira UI');
    $('#toplink-login').attr('href', loginState.url);
  } else {
    $('#toplink-login').text('Login');
  }
});

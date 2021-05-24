// mobile button
$(document).ready(function () {
  $("#mobile_btn").click(function () {
    $(".menu_head").toggleClass("menu");
    $("#mobile_btn i").toggleClass("rotate_icon");
  });
});

// preloder
$(window).on('load', () => {
  $(".loader .inner").fadeOut(600, () => {
    $(".loader").fadeOut(750)
  })
})

// type.js
$(document).ready(function () {
  var typed = new Typed('.element', {
    strings: [
      "Web Designer",
      "Web Developer",
    ],
    stringsElement: null,
    typeSpeed: 400,
    startDelay: 100,
    backSpeed: 0,
    smartBackspace: false,
    backDelay: 700,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100,
    loop: true,

  });
});

// baner mousemove
document.addEventListener('mousemove', parallax)

function parallax(e) {
  document.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}

// skill part
$('.skill-per').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width", per + '%');
  $({
    animatedValue: 0
  }).animate({
    animatedValue: per
  }, {
    duration: 1000,
    step: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});

// state counterup.js
$(document).ready(function () {
  $('.counter').counterUp({
    delay: 5,
    time: 500
  });
});

// work part filter
$(document).ready(function () {
  $('.list').click(function () {
    const value = $(this).attr('filter_data')
    if (value == 'all') {
      $('.item').show('1000')
    } else {
      $('.item').not('.' + value).hide('slow')
      $('.item').filter('.' + value).show('slow')
    }
  })
  $('.list').click(function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')
  });
});

// testimonial owlCarousel.js
$(document).ready(function () {
  $('.team_items').owlCarousel({
    loop: true,
    items: 3,
    dots: true,
    responsive : {
      0 : {
        items: 1
      },

      600 : {
        items: 2
      },

      1100 : {
        items: 3
      },


  }
  });
});

// testimonial owlCarousel.js
$(document).ready(function () {
  $('.testimonial_content').owlCarousel({
    loop: true,
    items: 1,
    dots: true
  });
});

//  scroll to top
//Check to see if the window is top if not then display button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.scrollToTop').fadeIn();
  } else {
    $('.scrollToTop').fadeOut();
  }
});
//Click event to scroll to top
$('.scrollToTop').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
  return false;
});
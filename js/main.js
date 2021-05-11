$(document).ready(function () {
  $("#mobile_btn").click(function () {
    $(".menu_head").toggleClass("menu");
    $("#mobile_btn i").toggleClass("rotate_icon");
  });
});


$(document).ready(function () {
  var typed = new Typed('.element', {
    strings: [
      "web designer",
        "Web developer",
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

document.addEventListener('mousemove', parallax)

function parallax(e){
  document.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerHeight - e.pageY*speed)/100
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}

$('.skill-per').each(function(){
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width",per+'%');
  $({animatedValue: 0}).animate({animatedValue: per},{
    duration: 1000,
    step: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});


$(document).ready(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

$(document).ready(function () {
  $('.list').click(function () {
    const value = $(this).attr('filter_data')
    if(value == 'all'){
      $('.item').show('1000')
    }
    else{
      $('.item').not('.'+ value).hide('slow')
      $('.item').filter('.'+ value).show('slow')
    }
  })
  $('.list').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')
  });
});
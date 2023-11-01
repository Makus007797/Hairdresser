/*jshint esversion: 6 */
$(document).ready(function () {
  // Preloader
  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  };


  // Wow
  wow = new WOW({
    mobile: false
  });
  wow.init();


  // Slick
  $(".aboutus-carousel").slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    fade: true,
    adaptiveHeight: true,
    prevArrow: '<img class="aboutus-carousel-left" src="assets/img/icons/arrow-left.svg" height="30" width="30" alt="arrow left"/>',
    nextArrow: '<img class="aboutus-carousel-right" src="assets/img/icons/arrow-right.svg" height="30" width="30" alt="arrow right"/>',
    autoplaySpeed: 4000
  });

  $(".team-carousel").slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  // Tabs
  $('.tabgroup > div').hide();
  $('.tabgroup > div:first-of-type').show();
  $('.tabs a').click(function(e){
    e.preventDefault();
      var $this = $(this),
          tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
          target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabgroup).children('div').hide();
      $(target).fadeIn(500).show();
  });


  // #Gallery 
  var gallery = $('#gallery');

  if(gallery.length){
    $('#gallery').photobox();
  }

  var imgContent = document.querySelectorAll('.img-content-hover');

  function showImgContent(e) {
    for(var i = 0; i < imgContent.length; i++) {
      x = e.pageX;
      y = e.pageY;
      imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  }
  document.addEventListener('mousemove', showImgContent);


  // Scroll top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll-top").fadeIn();
    } else {
      $("#scroll-top").fadeOut();
    }
  });
  $("#scroll-top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });


  // Scroll anchors
  $(".headline").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({
      scrollTop: top
    }, 1000);
  });


  //E-mail Ajax Send
  $(".form").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function () {
      alert("Thank you, we will call you back.");
      setTimeout(function () {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });



});


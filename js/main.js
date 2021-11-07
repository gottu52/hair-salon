// carousel
$(function() {
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    fade:true,
    asNavFor:'.thumbnail',
  });
  $('.thumbnail').slick({
    infinite:true,
    slidesToShow:3,
    slidesToScroll:1,
    asNavFor:'.slider',
    focusOnSelect:true,
    arrows:false,
  })
});

// fadeIn
$(window).on('load scroll', function() {
  var box = $('.fadeIn');
  var animated = 'animated';

  box.each(function() {
    var boxOffset = $(this).offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scrollTop > boxOffset - windowHeight + 200) {
      $(this).addClass(animated);
    }
  }); 
});

// header-link scroll
$(function() {
  var $head = $('.header-container'),
      fixed = 'fixed',
      $win = $(window),
      headPos = $head.offset().top;

  $win.on('load scroll', function() {
    var scrollTop = $(this).scrollTop();
    if( scrollTop > headPos ) {
      $head.addClass(fixed);
    } else {
      $head.removeClass(fixed);
    }
  });
});

// signUp-page
$(function() {
  var $btn = $('.btn'),
      $val = $('.input-text').val();

  $btn.click(function() {
    if($('.input-text').val() === '') {
      alert("必要項目を入力してください");
      return false;
    }
  });
});




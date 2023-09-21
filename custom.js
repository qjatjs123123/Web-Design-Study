/* Trigger */
$(function(){
  $('.trigger').click(function() {
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  })
  $('section, .menu a').click(function(){
    $('.gnb').removeClass('active');
    $('.trigger').removeClass('active');
  })

  /* Smooth Scrolling */
  // $('.menu a').click(function(e){
  //   $.scrollTo(this.hash || 0, 900);
  // })

  /* Change CSS with Scroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active');
    }
    else {
      $('header, .gototop').removeClass('active');
    }
  })

  // slick.js : history
  $('.history-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
  })
  //slick.js : project
})


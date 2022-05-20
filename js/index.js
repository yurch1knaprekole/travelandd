var $headline = $('.headline'),
    $inner = $('.inner'),
    $nav = $('nav'),
    navHeight = 75;

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop(),
      headlineHeight = $headline.outerHeight() - navHeight,
      navOffset = $nav.offset().top;

  $headline.css({
    'opacity': (1 - scrollTop / headlineHeight)
  });
  $inner.children().css({
    'transform': 'translateY('+ scrollTop * 0.4 +'px)'
  });
  if (navOffset > headlineHeight) {
    $nav.addClass('scrolled');
  } else {
    $nav.removeClass('scrolled');
  }
});

$(document).ready(function() {
  $(window).on('scroll', function() {
   if($(window).scrollTop() < 1000) {
     $('.hero').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
     $('.hero h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
     $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
   }
    
    if($(window).scrollTop() >= $('.content-wrapper').offset().top - 300) {
      $('.nav-bg').removeClass('bg-hidden');
      $('.nav-bg').addClass('bg-visible');
    } else {
      $('.nav-bg').removeClass('bg-visible');
      $('.nav-bg').addClass('bg-hidden');
    }
 });
});
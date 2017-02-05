$(function() {
  $('li > ul').hide();
  $('.trivia > li').click(function () {
    if ($(this).children().is(':hidden')) {
      $(this).children().slideDown();
      $(this).addClass('open');
    } else {
      $(this).children().slideUp();
      $(this).removeClass('open');
    }
  });
});
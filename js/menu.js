$(function() {
  $("#toggle").click(function() {
    $(this).toggleClass("active");
    $('#overlay').toggleClass('open');
    $('.blur-front, .logo-text, body, .comment-bg, .reg-wrap, .gallery, .kontakti, #map').toggleClass('active');
    $('.menu-reverse-color').toggleClass('reverse');
  });
});


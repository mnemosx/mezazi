$(function(){
  if (Modernizr.touchevents) {
    $('#map').css("pointer-events", "auto");
  } else {
    $('.map-over').click(function() {
      $('#map').css("pointer-events", "auto");

    });
    $("#map").mouseleave(function() {
      $('#map').css("pointer-events", "none");
    });
  }
});
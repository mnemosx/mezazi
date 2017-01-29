$(function() {
  ;(function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i,el){
        function visPx(){
          var H = $(this).height(),
              r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
          return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
        } visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  }(jQuery, window));

  $(".number-one, .number-three").inViewport(function(px){
    if(px) $(this).addClass("triggeredCSS3");
  });
  // Sekojošā funkcija pastāv tādēļ, ka, ja izmanto vnk $(".number"), 
  // tad 1 un 2 ir uzreiz iekš viewport un uzsākas abi reizē. Taču 
  // vajag, lai 2 parādās pēc 1. Būtu vēlams timeout noņemt 
  // ekrāniem ar mazāku height, kurā 2 sākotnēji nav iekš viewport.
  $(".number-two").inViewport(function(px){
    setTimeout(function(){
      if(px) $(".number-two").addClass("triggeredCSS3");
    }, 200);
  });
});





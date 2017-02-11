// lai footeris nelien priekšā atsauksmju lauka fona attēlam
// debounce?
$(function () {
  $(window).scroll(function () {
    
    var scrollY = $(window).scrollTop();
    var scrollBottom = $(document).height() - $(window).height() - scrollY;
    
    if (scrollY >= 3000) {
      $('footer').css({'z-index': '1003'});
    }
    if (scrollBottom >= 600) {
      $('footer').css({'z-index': '1000'});
    }
    
  });
});
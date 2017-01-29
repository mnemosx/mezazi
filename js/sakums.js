//lai footeris nelien priekšā atsauksmju lauka fona attēlam
$(function() {
  $(window).scroll(function () {

    var scrollY = $(window).scrollTop();
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if(scrollY>=3000){
      $('footer').css({'z-index': '1003'});
    }
    if(scrollBottom>=600){
      $('footer').css({'z-index': '1000'});
    }
  });
});
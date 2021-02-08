$(document).foundation()

var  tb = $('.sticky-topbar');
    tbs = "sticky-topbar-scrolled";

$(window).scroll(function() {
  if($(this).scrollTop()) {
    tb.addClass(tbs);
  } else {
    tb.removeClass(tbs);
  }
});
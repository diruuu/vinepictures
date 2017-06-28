var app = {
  init: function() {
    app.initSlideshow();
    app.onTopDetect();
  },
  onTopDetect: function() {
    jQuery('.wrapper').on('scroll', function() {
      var top = jQuery('.wrapper').scrollTop();
      if (top > 0) {
        jQuery('body').addClass('not-on-top');
      } else {
        jQuery('body').removeClass('not-on-top');
      }
    });
  },
  initSlideshow: function() {
    var $slideshow = jQuery('.main-slideshow');
    $slideshow.cycle({
      slides: '.slide',
      fx: 'scrollHorz',
      next: '> .browse.next',
      prev: '> .browse.previous',
      hideNonActive: false,
      autoHeight: false,
      speed: 500,
      timeout: 0
    });
  }
}

jQuery(document).ready(function() {
  app.init();
})

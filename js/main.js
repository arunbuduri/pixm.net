/*------------------------------------------------------------------
Project:  Mos7 - Responsive Bootstrap 3 App Landing Page Template
Version:  1.3
Last change:  29/12/2014
Design by:  TemplatesPRO.com.br

Script (line):
- WINDOW.LOAD (32)
  1) Preloader (36)

- DOCUMENT.READY (44)
  2) Scrollbar (48)
  3) Slideshow Heigth (69)
  4) Background-size iOS - fix (69)
    - Component Slideshow (82)
    - Component Stats (71) 
    - Component Call to Action (111)
  5) Component Slideshow - Carousel (196) --removed
  6) Navbar Fixed to Top (152)
  7) ScrollTo - Navigation (161) 
  8) Component Gallery - Carousel (225) --removed
  9) Component Testimonials - Carousel (252) --removed
  10) Animations and Component Stats - Circle Stats (259) --removed
  11) Component Contact - Send Ajax (366) --removed
  12) Social Buttons - Tooltips (420) --removed

- WINDOW.SCROLL (427)
  13) Parallax Effect (174)
  14) Go Top - Scroll (184)
-------------------------------------------------------------------*/

$(window).load(function () {
  "use strict";

  /********************************************************************
   1) Preloader
   ************/
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.

});


$(document).ready(function () {
  "use strict";

  /********************************************************************
   2) ScrollBar
   ************/
  $("html").niceScroll({
    cursorcolor: "#777",
    cursoropacitymax: 0.7,
    cursorwidth: "9",
    cursorborder: "none",
    cursorborderradius: "10px",
    background: "#ccc",
    zindex: "9999999",
    touchbehavior: false
  });

  $('#contact-collapse-1').on('hidden.bs.collapse', function () {
    $("html").getNiceScroll().resize();
  });
  $('#contact-collapse-1').on('shown.bs.collapse', function () {
    $("html").getNiceScroll().resize();
  });

    /********************************************************************
   3) Slideshow Heigth
   *******************/
  function maxHeight() {
    var slideshowheight = $(window).height();
    $(".slideshow .item").css('min-height', slideshowheight - 46);
  }

  maxHeight();
  $(window).on('resize', maxHeight);

  /********************************************************************
   4) Background-size iOS - fix
   **********************/
  /* Component Slideshow */
  function bgSlideshow() {
    var imgSlideshow = new Image();
    imgSlideshow.src = $(".slideshow .item").css("background-image").replace(/"/g,"").replace(/url\(|\)$/ig, "");

    var imgWidth = imgSlideshow.width;
    var imgHeight = imgSlideshow.height;
    var widthSlideshow = $(".slideshow .item").width();
    var heightSlideshow = $(".slideshow .item").height();
    /* Step 1 - Get the ratio of the div + the image */
    var imgRatio = imgWidth/imgHeight;
    var divRatio = widthSlideshow/heightSlideshow;

    /* Step 2 - Work out which ratio is greater */
    if (imgRatio >= divRatio) {
      /* The Height is our constant */
      var divHeight = heightSlideshow;
      var scale = (divHeight / imgHeight);
      var divWidth = imgWidth * scale;
    } else {
      /* The Width is our constant */
      var divWidth = widthSlideshow;
      var scale = (divWidth / imgWidth);
      var divHeight = imgHeight * scale;
    }
    var cover = divWidth + 'px ' + divHeight + 'px';
    if (navigator.userAgent.match(/iPhone|iPad/i)) {
      $(".slideshow .item").css('background-size', cover);
    }
  }
  bgSlideshow();
  $(window).on('load', bgSlideshow);

  /* Component Call to Action */
  function bgCalltoaction() {
    var imgCalltoaction = new Image();
    imgCalltoaction.src = $(".calltoaction").css("background-image").replace(/"/g,"").replace(/url\(|\)$/ig, "");

    var imgWidth = imgCalltoaction.width;
    var imgHeight = imgCalltoaction.height;
    var widthCalltoaction = $(".calltoaction").width();
    var heightCalltoaction = $(".calltoaction").height();
    /* Step 1 - Get the ratio of the div + the image */
    var imgRatio = imgWidth/imgHeight;
    var divRatio = widthCalltoaction/heightCalltoaction;

    /* Step 2 - Work out which ratio is greater */
    if (imgRatio >= divRatio) {
      /* The Height is our constant */
      var divHeight = heightCalltoaction;
      var scale = (divHeight / imgHeight);
      var divWidth = imgWidth * scale;
      if (navigator.userAgent.match(/iPhone/i)) {
        var cover = divWidth * 1.3 + 'px ' + divHeight * 1.3 + 'px';
        $(".calltoaction").css('background-size', cover);
      } else if (navigator.userAgent.match(/iPad/i)) {
        var cover = divWidth * 2.4 + 'px ' + divHeight * 2.4 + 'px';
        $(".calltoaction").css('background-size', cover);
      }
    } else {
      /* The Width is our constant */
      var divWidth = widthCalltoaction;
      var scale = (divWidth / imgWidth);
      var divHeight = imgHeight * scale;
      if (navigator.userAgent.match(/iPad/i)) {
        var cover = divWidth * 1.7 + 'px ' + divHeight * 1.7 + 'px';
        $(".calltoaction").css('background-size', cover);
      }
    }
  }
  bgCalltoaction();
  $(window).on('load', bgCalltoaction);

  /********************************************************************
   6) Navbar Fixed to Top
   **********************/
  $('.navbar').affix({
    offset: {
      top: $(window).height() - $('.navbar').height() - 2
    }
  });

  /********************************************************************
   7) ScrollTo - Navigation
   ************************/
  $('a[href^="#anch"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  /********************************************************************
   13) Parallax Effect
   *******************/
  $('.parallax').each(function () {
    var $obj = $(this),
        yPos = -($(window).scrollTop() / $obj.data('speed')),
        bgpos = '50% ' + yPos + 'px';
    $obj.css('background-position', bgpos);
  });

  /********************************************************************
   14) Go Top - Scroll
   *******************/
  if ($(this).scrollTop() > 100) {
    $('.go-top').fadeIn();
  } else {
    $('.go-top').fadeOut();
  }

});

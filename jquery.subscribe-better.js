/* ===========================================================
 * jquery-subscribe-better.js v1
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create a better, highly customizable subscription modal or
 * newsletter signup window with jQuery Subscribe Better
 *
 * https://github.com/peachananr/subscribe-better
 *
 * ========================================================== */

!function($){

  var defaults = {
    trigger: "atendpage", // atendpage | onload | onidle
    animation: "fade", // fade | flyInRight | flyInLeft | flyInUp | flyInDown
    delay: 0,
    showOnce: true,
    autoClose: false,
    scrollableModal: false
	};

  $.fn.subscribeBetter = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        shown = false,
        animating = false;

    el.addClass("sb");

    $.fn.openWindow = function() {
      var el = $(this);
      if(el.is(":hidden") && shown == false && animating == false) {
        animating = true;

        setTimeout(function() {
          if (settings.scrollableModal == true) {
            if($(".sb-overlay").length < 1) {
              $("body").append("<div class='sb-overlay'><div class='sb-close-backdrop'></div><div class='sb sb-withoverlay'>" + $(".sb").html() + "</div></div>");
              $(".sb-close-backdrop, .sb-close-btn").one("click", function() {
                $(".sb.sb-withoverlay").closeWindow();
                return false;
              });
              $(".sb.sb-withoverlay").removeClass("sb-animation-" + settings.animation.replace('In', 'Out')).addClass("sb-animation-" + settings.animation);
              setTimeout(function(){
                $(".sb.sb-withoverlay").show();
                $("body").addClass("sb-open sb-open-with-overlay");
              }, 300);
            }
          } else {
            if ($(".sb-overlay").length < 1) {
              $("body").append("<div class='sb-overlay'><div class='sb-close-backdrop'></div></div>");
              $(".sb").removeClass("sb-animation-" + settings.animation.replace('In', 'Out')).addClass("sb-animation-" + settings.animation);
              $(".sb-close-backdrop, .sb-close-btn").one("click", function() {
                $(".sb").closeWindow();
                return false;
              });
              setTimeout(function(){
                $(".sb").show();
                $("body").addClass("sb-open");
              }, 300);
            }

          }
          if (settings.showOnce == true) shown = true;
          animating = false;
        }, settings.delay);
      }
    }

    $.fn.closeWindow = function() {
      var el = $(this);
      if(el.is(":visible") && animating == false) {
        animating = true;
        if (settings.scrollableModal == true) {

          $(".sb.sb-withoverlay").removeClass("sb-animation-" + settings.animation).addClass("sb-animation-" + settings.animation.replace('In', 'Out'));

          setTimeout(function(){
            $(".sb.sb-withoverlay").hide();
            $("body").removeClass("sb-open sb-open-with-overlay");
            setTimeout(function() {
              $(".sb-overlay").remove();
            }, 300);
          }, 300);

        } else {

          $(".sb").removeClass("sb-animation-" + settings.animation).addClass("sb-animation-" + settings.animation.replace('In', 'Out'));
          setTimeout(function(){
            $(".sb").hide();
            $("body").removeClass("sb-open");
            setTimeout(function() {
              $(".sb-overlay").remove();
            }, 300);
          }, 300);
        }
        animating = false;
      }
    }

    $.fn.scrollDetection = function (trigger, onDone) {
      var t, l = (new Date()).getTime();

      $(window).scroll(function(){
          var now = (new Date()).getTime();

          if(now - l > 400){
              $(this).trigger('scrollStart');
              l = now;
          }

          clearTimeout(t);
          t = setTimeout(function(){
              $(window).trigger('scrollEnd');
          }, 300);
      });
      if (trigger == "scrollStart") {
        $(window).bind('scrollStart', function(){
          $(window).unbind('scrollEnd');
          onDone();
        });
      }

      if (trigger == "scrollEnd") {
        $(window).bind('scrollEnd', function(){
          $(window).unbind('scrollStart');
          onDone();
        });
      }
    }

    switch(settings.trigger) {
      case "atendpage":
        $(window).scroll(function(){
          var yPos = $(window).scrollTop();
          if (yPos >= ($(document).height() - $(window).height()) ) {
            el.openWindow();
          } else {
            if (yPos + 300 < ($(document).height() - $(window).height()) ) {
              if(settings.autoClose == true) {
                el.closeWindow();
              }
            }
          }

        });
        break;
      case "onload":

        $(window).load(function(){
          el.openWindow();
          if(settings.autoClose == true) {
            el.scrollDetection("scrollStart", function() {
              el.closeWindow();
            });

          }
        });

        break;
      case "onidle":

        $(window).load(function(){
          el.scrollDetection("scrollEnd", function() {
            el.openWindow();
          });

          if(settings.autoClose == true) {
              el.scrollDetection("scrollStart", function() {
                el.closeWindow();
              });
          }
        });

        break;
    }


  }

}(window.jQuery);

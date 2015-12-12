(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
          settings.imagel = '<div id="imagel"><img class="imagedeco" src="~/images/upc_trim.png"/></div>';
        cssmenu.prepend(settings.imagel + '<div id="menu-button">' /*+ settings.title*/ + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });

  };
})(jQuery);

(function($){
$(document).ready(function(){

    $("#datepicker1").datepicker({ dateFormat: "yy-mm-dd" });
    $("#datepicker2").datepicker({ dateFormat: "yy-mm-dd" });

    //alert('listote');

    $("#cssmenu").menumaker({
       title: "Menu",
       format: "multitoggle"
    });

    $('.spinner .btn:first-of-type').on('click', function() {
      $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
    });
    $('.spinner .btn:last-of-type').on('click', function() {
      $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
    });

    });
})(jQuery);

function nuevaCapacitacion(){
  window.location.href = "capacitacion.html";
}
function actualizarCapacitacion(){
  window.location.href = "capacitacion_upd.html";
}
function irActTalleres(){
  window.location.href = "capas.html";
}
function irGenerarDisenio(){
  window.location.href = "index.html";
}
function irCrearCapa(){
  window.location.href = "/Home/CrearCapa";
}
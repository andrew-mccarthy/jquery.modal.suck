(function($) {

  $.fn.modal = function(options){

    Self = this;
    Settings = $.extend({
      backgroundColor : "#000",
      opacity         : 0.8,
      zIndex          : 2,
      width           : 640,
      height          : 480,
      beforeClose     : function(){},
      afterClose      : function(){},
      beforeOpen      : function(){},
      afterOpen       : function(){},
      doClose         : false
    }, options);


    function applyBackground() {
      $('body').prepend('<div id="modals-suck-background-opaque" />');
      $('#modals-suck-background-opaque').css({
        'background' : Settings.backgroundColor,
        'opacity'    : Settings.opacity,
        'z-index'    : (Settings.zIndex-1),
        'position'   : 'fixed',
        'height'     : '100%',
        'width'      : '100%'
      });
      $('#modals-suck-background-opaque').bind('click', closeModal);
    }

    function openModal() {
      Settings.beforeOpen(Self);
      Self.css({
        'display' : 'block',
        'width'   : Settings.width,
        'height'  : Settings.height,
        'z-index' : Settings.zIndex,
        'position': 'fixed',
        'left'    : '50%',
        'top'     : '50%',
        'margin'  : '-' + Math.ceil(Settings.height/2) + 'px 0 0 -' + Math.ceil(Settings.width/2) + 'px'
      });
      Settings.afterOpen(Self);
    }


    function closeModal() {
      Settings.beforeClose(Self);
      Self.css({'display' : 'none'});
      $('#modals-suck-background-opaque').empty().remove();
      Settings.afterClose(Self);
    }

    if (Settings.doClose == true) {
      closeModal();
    } else {
      applyBackground();
      openModal();
    }

  };

}(jQuery));

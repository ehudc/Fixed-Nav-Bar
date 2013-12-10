/**
* Fixed Navigation Bar jQuery Plugin
* v0.1
* 
* Author: ehudc (http://github.com/ehudc)
* Created Nov-December 2013
* 
* Fixes a div to the the top of the window when scrolling past.
* Designed for sites that have a header div with a child navigation bar div.
*
**/

(function($){
    $.fn.fix = function (options) {

        var settings = $.extend({
            parentDiv: '',
            center: false
        }, options);

        var marginSpacer = ($(this).outerHeight(true) - $(this).outerHeight())/2;
        var marginParentSpacer = ($(settings.parentDiv).outerHeight(true) - $(settings.parentDiv).outerHeight())/2;

        // if parent height and margin-bottom is not set, ensure it is
        // takes care of the 'padding' needed when the navbar is fixed
        $(settings.parentDiv).css({
            height : $(settings.parentDiv).height(),
            'margin-bottom': marginSpacer > marginParentSpacer ? marginSpacer : marginParentSpacer
        });

        // if the navbar is not at 100% width, it may float once fixed
        // the center option resolves this
        if (settings.center) {
            $(settings.parentDiv).css({
                'margin-left' : 'auto',
                'margin-right': 'auto',
                width: $(this).outerWidth()
            });
            $(this).css({width: $(settings.parentDiv).width()});
        }

        var self = $(this);
        var nav = $(this).offset().top;

        $(window).on('scroll resize', function () {
            if (nav < $(window).scrollTop()) {
                $(self).css({
                    position: 'fixed',
                    top: marginSpacer > 0 ? 0 - marginSpacer : 0,
                    'z-index': '999'
                });
            } else {
                $(self).css({
                    position: '',
                    top: '',
                    'z-index': ''
                });
            }
        });
    };
})(jQuery);
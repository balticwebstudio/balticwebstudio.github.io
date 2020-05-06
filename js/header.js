; (function ($) {
    'use strict';

    var win = window,
        doc = document;

    jQuery(doc).ready(function () {

        // Main navigation:
        jQuery('.main-nav__list').superfish({
            hoverClass: 'main-nav__list-visible',
            delay: 300,
            animation: { opacity: 'show' },
            animationOut: { opacity: 'hide' }
        });

        jQuery('.main-nav__btn').on('click', function () {
            jQuery(this).toggleClass('open');
            if (jQuery('.main-nav__list').hasClass('open')) {
                jQuery('.main-nav__list').removeClass('open');
            } else {
                jQuery('.main-nav__list').addClass('open');
            }
        });

        // Header sticky:
        if (jQuery('.header-content').size() > 0) {
            jQuery('.header-content').sticky({
                topSpacing: 0,
                zIndex: 300
            });
        }

        // setTimeout("gt3_menu_line();", 50);

        jQuery('body').addClass('page-loaded');

    });


    jQuery(win).load(function () { });
    let topLogo = $('.top_header').find('> .logo_container')
    let midLogo = $('.logo-onscroll')

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            // topLogo.hide()
            midLogo.attr('style', 'display: block !important')
        }
        else {
            // topLogo.css('display', 'block')
            midLogo.attr('style', 'display: none !important')
        }
    });


}(jQuery));

// // Menu line:
// function gt3_menu_line() {
//     var menu = jQuery('.main-nav__list');
//     if (menu.length) {
//         menu.each(function () {
//             var menu = jQuery(this);
//             var current = '';
//             // menu.append('<span class="menu_item_line"></span>');
//             var menu_item = menu.find('> .menu-item');
//             var currentItem = menu.find('> .current-menu-item');
//             var currentItemParent = menu.find('> .current-menu-ancestor');
//         //     var line = menu.find('.menu_item_line');
//         //     if (currentItem.length || currentItemParent.length) {
//         //         current = currentItem.length ? currentItem : (currentItemParent.length ? currentItemParent : '');
//         //         line.css({ width: current.find('>a').outerWidth() });
//         //         line.css({ left: current.find('>a').offset().left - menu.offset().left });
//         //     }
//         //     menu_item.mouseenter(function () {
//         //         line.css({ width: jQuery(this).find('> a').outerWidth() });
//         //         line.css({ left: jQuery(this).find('> a').offset().left - jQuery(this).parent().offset().left });
//         //     });
//         //     menu.mouseleave(function () {
//         //         if (current.length) {
//         //             line.css({ width: current.find('> a').outerWidth() });
//         //             line.css({ left: current.find('> a').offset().left - menu.offset().left });
//         //         } else {
//         //             line.css({ width: '0' });
//         //             line.css({ left: '100%' });
//         //         }
//         //     });
//         })
//     }
// }

/*global $, console, alert*/

$(function () {

    'use strict';

    // make background for header in window height in resize the window

    $(window).resize(function () {


        $('header').height($(window).height());

        $('.header-info').css({

            marginTop: ($('header').height() - $('.header-info').height()) / 2

        });

    });

    // make background for header in window heigh

    $('header').height($(window).height());

    $('.header-info').css({

        marginTop: ($('header').height() - $('.header-info').height()) / 2

    });

    // toggel backgroundcolor in button

    $('button.btn').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    // trigger btn to trnsition to next part of site

    $('.arrow').click(function () {

        $('html, body').animate({

            scrollTop: $('.ser').offset().top

        }, 1000);


    });

    // make form in middel height

    $('.subscribe form').css({

        marginTop: ($('.subscribe').height() - $('.subscribe form').height()) / 2

    });

    // toggel placeholder in inputs

    var placeholder = $('.subscribe form input[type="text"]').attr('placeholder'),

        leftArrow = $('.test .fa-angle-left'),

        rightArrow = $('.test .fa-angle-right');

    $('.subscribe form input[type="text"]').on('focus', function () {

        $('.subscribe form input[type="text"]').attr('placeholder', '');

    });

    $('.subscribe form input[type="text"]').on('blur', function () {

        $('.subscribe form input[type="text"]').attr('placeholder', placeholder);

    });

    // make slider in testimonials


    function checkAroww() {

        if ($('.clint:first').hasClass('active')) {

            leftArrow.fadeOut();

        } else {

            leftArrow.fadeIn();
        }

        if ($('.clint:last').hasClass('active')) {

            rightArrow.fadeOut();

        } else {

            rightArrow.fadeIn();

        }
    }
    checkAroww();

    $('.test i').click(function () {

        if ($(this).hasClass('fa-angle-right')) {

            $('.test .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.clint').addClass('active').fadeIn();

                checkAroww();

            });

        } else {

            $('.test .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.clint').addClass('active').fadeIn();

                checkAroww();

            });
        }
    });

    // make slider for factores

    $('.bullet li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        $('#' + $(this).data('value')).addClass('active').siblings('.box').removeClass('active');

    });

    $('.work .box').click(function () {

        $(this).addClass('active').siblings('.box').removeClass('active');

        $('#' + $(this).data('box')).addClass('active').siblings().removeClass('active');

    });
    
    // trigger nice scroll plugin

    $('html').niceScroll({

        cursorcolor: '#f7600e',

        cursorwidth: '10px',

        cursorborder: '1px solid #f7600e',

        cursorborderradius: 0,

        zindex: [5],

        scrollspeed: '80'
    });

});

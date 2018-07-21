topEffect = function () {

    $(window).scroll(function () {

        if (window.innerWidth > 1800) {
            if ($(document).scrollTop() == 0) {
                $('.header').css('left', 0);
            } else if ($(document).scrollTop() >= 690) {
                $('.header').css('left', "-40%");
            } else {
                $('.header').css('left', -$(document).scrollTop()*1.2);
            }
        } else if (window.innerWidth > 1500 || window.innerWidth < 1800) {
            if ($(document).scrollTop() == 0) {
                $('.header').css('left', 0);
            } else if ($(document).scrollTop() >= 600) {
                $('.header').css('left', "-42%");
            } else {
                $('.header').css('left', -$(document).scrollTop()*1.2);
            }
        } else if (window.innerWidth > 1200 || window.innerWidth < 1500) {
            if ($(document).scrollTop() == 0) {
                $('.header').css('left', 0);
            } else if ($(document).scrollTop() >= 500) {
                $('.header').css('left', "-50%");
            } else {
                $('.header').css('left', -$(document).scrollTop()*1.2);
            }
        } else if (window.innerWidth > 1000 || window.innerWidth < 1040) {
            // for Ipad Pro
            if ($(document).scrollTop() == 0) {
                $('.header').css('left', 0);
            } else if ($(document).scrollTop() >= 400) {
                $('.header').css('left', "-20%");
            } else {
                $('.header').css('left', -$(document).scrollTop()*1.2);
            }
        } else {
            if ($(document).scrollTop() == 0) {
                $('.header').css('left', 0);
            } else if ($(document).scrollTop() >= 400) {
                $('.header').css('left', "-50%");
            } else {
                $('.header').css('left', -$(document).scrollTop()*1.2);
            }
        }

        
        if ($(document).scrollTop() < 50) {
            $('.scroll_hint, .scrollbar_hint, .scrolldot_hint, .beginning_title').css('opacity', 1);
        } else {
            $('.scroll_hint, .scrollbar_hint, .scrolldot_hint, .beginning_title').css('opacity', 0);
        }

        if (window.innerWidth > 500) {
            if ($(document).scrollTop() > 200) {
                $('.left_side_form').css('opacity', 1);
            } else {
                $('.left_side_form').css('opacity', 0);
            }
        }

        if (window.innerWidth < 500) {
            if ($(document).scrollTop() > 50) {
                $('.mobile-info').css('opacity', 1);
            } else {
                $('.mobile-info').css('opacity', 0);
            }
        }

    });

}
topEffect();
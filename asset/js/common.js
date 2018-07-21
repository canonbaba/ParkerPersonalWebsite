
$(() => {
    if (window.innerWidth > 200) {
        $.scrollify({
        section: ".scrollSection",
        });
    }
})

const topEffect = () => {
    $(window).scroll(function () {
        if (window.innerWidth > 1800) {
            resize(690, "-40%");
        } else if (window.innerWidth > 1500) {
            resize(600, "-42%");
        } else if (window.innerWidth > 1200) {
            resize(550, "-50%");
        }  else {
            resize(500, "-50%");
        }
        
        $('.scroll_hint, .scrollbar_hint, .scrolldot_hint, .beginning_title')
        .css('opacity', ($(document).scrollTop() < 50) ? 1 : 0);
      

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
};

const resize = (scrollTop, leftPercentage) => {
    if ($(document).scrollTop() == 0) {
        $('.header').css('left', 0);
    } else if ($(document).scrollTop() >= scrollTop) {
        $('.header').css('left', leftPercentage);
    } else {
        $('.header').css('left', -$(document).scrollTop()*1.2);
    }
};

topEffect();
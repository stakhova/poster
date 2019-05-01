$(document).ready(function() {
    $('ul.poster-tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.poster-tabs li').removeClass('current');
        //$('ul.sidebar-role__list li').removeClass('current');
        $('.poster-content__tab').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    $('ul.sidebar-role__list li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.sidebar-role__list li').removeClass('current');
        //$('ul.poster-tabs li').removeClass('current');
        $('.poster-content__tab').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    $('.poster-slider').slick({
        prevArrow: '<div class="poster-slider__prev"></div>',
        nextArrow: '<div class="poster-slider__next"></div>',
        dots: true,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.poster-adv__slider').slick({
        prevArrow: '<div class="poster-adv__sliderPrev"></div>',
        nextArrow: '<div class="poster-adv__sliderNext"></div>',
        dots: false,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });



    $('.poster-table__item').on('click', function () {
        $(this).next().slideToggle(200);
        $(this).toggleClass('active');
    });


    $('.poster-select__head').on('click', function () {
        $(this).next().slideToggle(100);
        $(this).toggleClass('active');
    });

    $('.poster-select__wrap').on('click', 'li', function () {
        $('.poster-select__head').removeClass('active');
        var val = $(this).text();
        var parent = $(this).closest('.poster-select');
        $(parent).find('.poster-select__current span').text(val).removeClass('active');
        $('.poster-select__head input').val(val);
        $(parent).find('.poster-select__wrap').slideUp(100);
    });

    $('.sidebar-role span').click(function () {
        // $(this).hide('header-mob__submenu');
        $(this).next().slideToggle(300);
        $(this).toggleClass('active');
    });

});
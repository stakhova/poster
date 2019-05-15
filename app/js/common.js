$(document).ready(function() {

    $('.poster-slider').slick({
        prevArrow: '<div class="poster-slider__prev"></div>',
        nextArrow: '<div class="poster-slider__next"></div>',
        dots: true,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });



    $('.poster-table__item' ).on('click', function () {
        $(this).next().slideToggle(200);
        $(this).toggleClass('active');
    });

    // $('.poster-table__item td:first-child').click(function () {
    //     $(this).parents(".poster-table").find('.poster-table__desc').slideToggle(100);
    //     $(this).parents(".poster-table").find('.poster-table__item').toggleClass('active');
    //     $(this).toggleClass('active');
    // });

    // remove elements from favorite
    $('.poster-table__delete').click(function () {
        $(this).parents('.poster-table__item').remove();
        $(this).closest('.poster-table__desc').remove();
        //$(this).next().remove('.poster-table__desc');
    });



    $('.filter-up').on('click', function () {
        $(this).addClass('filter-up-active');
        $(this).next().removeClass('filter-down-active');
    });
    $('.filter-down').on('click', function () {
        $(this).addClass('filter-down-active');
        $(this).prev().removeClass('filter-up-active');
    });




    $('.poster-select__head').on('click', function () {
        $(this).next().slideToggle(100);
        $(this).toggleClass('active');
    });

    $('.poster-header__name').on('click', function () {
        $(this).next().slideToggle(100);
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
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


    $('ul.poster-tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.poster-tabs li').removeClass('current');
        //$('ul.sidebar-role__list li').removeClass('current');
        $('.poster-content__tab').removeClass('current');
        $(this).addClass('current');
        $('.poster-adv').removeClass('poster-adv__show');
        $('.poster-recommended').removeClass('poster-recommended__show');
        $('.poster-flex').css('display','none');

        $("#" + tab_id).addClass('current');

        $('.poster-slider').slick('unslick');
        window.dispatchEvent (new Event ('resize'));
        $('.poster-slider').slick({
            prevArrow: '<div class="poster-slider__prev"></div>',
            nextArrow: '<div class="poster-slider__next"></div>',
            dots: true,
            fade: false,
            slidesToShow: 3,
            slidesToScroll: 1,
        });
    });


    $('ul.sidebar-role__list li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.sidebar-role__list li').removeClass('current');
        //$('ul.poster-tabs li').removeClass('current');
        $('.poster-content__tab').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        $('.poster-adv').addClass('poster-adv__show');
        $('.poster-recommended').addClass('poster-recommended__show');
        $('.poster-flex').css('display','flex');

        window.dispatchEvent (new Event ('resize'));
        $('.poster-adv__slider').slick({
            prevArrow: '<div class="poster-adv__sliderPrev"></div>',
            nextArrow: '<div class="poster-adv__sliderNext"></div>',
            dots: false,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    });



    $('.poster-slider').slick({
        prevArrow: '<div class="poster-slider__prev"></div>',
        nextArrow: '<div class="poster-slider__next"></div>',
        dots: true,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });



});

$(document).ready(function(){
    $('.form-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.form-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('.open-history').click(function () {
        console.log("ffff")
        $('#balance').modal('hide')
    });
});

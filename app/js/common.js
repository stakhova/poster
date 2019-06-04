
$(document).ready(function() {

    $(".create-list").ready(function () {
        $(".create-list__item").each(function() {
            $(this).find('.create-list__content').each(function(){
                $('.create-button button').click(function() {
                    $(this).parents('.create-list__content').hide();
                    $(this).parents('.create-list__item').next('.create-list__item').find('.create-list__content').addClass("open");
                    $(this).parents('.create-list__item').next('.create-list__item').find('.create-list__title').addClass("active");
                    $(this).parents('.create-list__item').find('.create-list__content').removeClass("open");
                    $(this).parents('.create-list__item').find('.create-list__title').addClass("done");
                });
                $('.create-button span').click(function() {
                    $(this).parents('.create-list__content').hide();
                    $(this).parents('.create-list__item').prev('.create-list__item').find('.create-list__content').addClass("open");
                    $(this).parents('.create-list__item').find('.create-list__title').removeClass("active");
                    $(this).parents('.create-list__item').prev('.create-list__item').find('.create-list__title').removeClass("done");
                    $(this).parents('.create-list__item').find('.create-list__content').removeClass("open");
                });
            });
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

    $('.poster-adv__slider').slick({
        prevArrow: '<div class="poster-adv__sliderPrev"></div>',
        nextArrow: '<div class="poster-adv__sliderNext"></div>',
        dots: false,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.poster-table__item' ).on('click', function () {
        $(this).next().fadeToggle(300);
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


    // poster select
    $('.poster-select__head').on('click', function (e) {
        e.stopPropagation();
        $(this).next().slideToggle(100);
        $(this).toggleClass('active');
    });

    $('.poster-header__name').on('click', function (e) {
        e.stopPropagation();
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

    // create event select
    $('.create-select__head').on('click', function (e) {
        e.stopPropagation();
        $(this).next().slideToggle(100);
        $(this).toggleClass('active');
    });

    $('.create-header__name').on('click', function () {
        $(this).next().slideToggle(100);
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });

    $('.create-select__wrap').on('click', 'li', function () {
        $('.create-select__head').removeClass('active');
        var val = $(this).text();
        var parent = $(this).closest('.create-select');
        $(parent).find('.create-select__current span').text(val).removeClass('active');
        $('.create-select__head input').val(val);
        $(parent).find('.create-select__wrap').slideUp(100);
    });


    $('.sidebar-role span').click(function () {
        // $(this).hide('header-mob__submenu');
        $(this).next().slideToggle(300);
        // $(this).toggleClass('active');
    });


    $('ul.modal-tab li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.modal-tab li').removeClass('current');
        $('.modal-tab__content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });





    $('ul.poster-tabs li').click(function () {
        // var tab_id = $(this).attr('data-tab');

        // $('ul.poster-tabs li').removeClass('current');
        //$('ul.sidebar-role__list li').removeClass('current');
        // $('.poster-content__tab').removeClass('current');
        // $(this).addClass('current');
        // $('.poster-adv').removeClass('poster-adv__show');
        // $('.poster-recommended').removeClass('poster-recommended__show');
        // $('.poster-flex').css('display','none');

        // $("#" + tab_id).addClass('current');

        $('.poster-slider').slick('unslick');
        window.dispatchEvent (new Event ('resize'));
        // $('.poster-slider').slick({
        //     prevArrow: '<div class="poster-slider__prev"></div>',
        //     nextArrow: '<div class="poster-slider__next"></div>',
        //     dots: true,
        //     fade: false,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        // });
    });



    // $('ul.poster-tabs li').click(function () {
    //     var tab_id = $(this).attr('data-tab');
    //
    //     $('ul.poster-tabs li').removeClass('current');
    //     //$('ul.sidebar-role__list li').removeClass('current');
    //     $('.poster-content__tab').removeClass('current');
    //     $(this).addClass('current');
    //     // $('.poster-adv').removeClass('poster-adv__show');
    //     $('.poster-recommended').removeClass('poster-recommended__show');
    //     // $('.poster-flex').css('display','none');
    //
    //     $("#" + tab_id).addClass('current');
    //
    //     $('.poster-slider').slick('unslick');
    //     window.dispatchEvent (new Event ('resize'));
    //     $('.poster-slider').slick({
    //         prevArrow: '<div class="poster-slider__prev"></div>',
    //         nextArrow: '<div class="poster-slider__next"></div>',
    //         dots: true,
    //         fade: false,
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //     });
    // });


    // $('ul.sidebar-role__list li').click(function () {
    //     var tab_id = $(this).attr('data-tab');
    //     $('ul.sidebar-role__list li').removeClass('current');
    //     //$('ul.poster-tabs li').removeClass('current');
    //     $('.poster-content__tab').removeClass('current');
    //     $(this).addClass('current');
    //     $("#" + tab_id).addClass('current');
    //     // $('.poster-adv').addClass('poster-adv__show');
    //     $('.poster-recommended').addClass('poster-recommended__show');
    //     // $('.poster-flex').css('display','flex');
    //
    //     window.dispatchEvent (new Event ('resize'));
    // });

    $('.poster-slider').slick({
        prevArrow: '<div class="poster-slider__prev"></div>',
        nextArrow: '<div class="poster-slider__next"></div>',
        dots: true,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
    $('.create-img span').click(function () {
        $(this).parents('.create-img').remove();
    });

    // $(".create-append").each(function() {
    //     $(this).find('.create-input__item').each(function(){
    //         $('.create-plus').click(function () {
    //                 let content= $('<div class="create-input__item"><div class="create-input create-input__ticket"><input class="create-input__text" type="text" placeholder="Укр">\</div>\<div class="create-input create-input__ticket">\<input class="create-input__text" type="text" placeholder="Название билета:">\<p class="create-input__desc">(Напр. VIP, Пресса и т.д.)</p>\</div>\<div class="create-input create-input__ticket">\<input class="create-input__text" type="text" placeholder="Цена:">\</div>\<div class="create-input create-input__ticket">\<span class="create-input__title">Количество:</span>\<input class="create-input__text" type="text">\<p class="create-input__desc">(Не ограничено)</p>\</div>\<div class="create-minus"></div><div class="create-plus"></div></div>')
    //                 $(this).closest('.create-append').append(content);
    //             });
    //     });
    //     $(this).find('.create-input__item').each(function(){
    //         $('.create-minus').click(function () {
    //                 $(this).parents('.create-input__item').remove();
    //             });
    //     });
    // });

    $('.create-plus').click(function () {
        var content= $('<div class="create-input__item"><div class="create-input create-input__ticket"><input class="create-input__text" type="text" placeholder="Укр">\</div>\<div class="create-input create-input__ticket">\<input class="create-input__text" type="text" placeholder="Название билета:">\<p class="create-input__desc">(Напр. VIP, Пресса и т.д.)</p>\</div>\<div class="create-input create-input__ticket">\<input class="create-input__text" type="text" placeholder="Цена:">\</div>\<div class="create-input create-input__ticket">\<span class="create-input__title">Количество:</span>\<input class="create-input__text" type="text">\<p class="create-input__desc">(Не ограничено)</p>\</div>\<div class="create-minus"></div><div class="create-plus"></div></div>')
        // $('.create-append').append(content);
        $(this).closest('.create-append').append(content);
    });
    $('.create-minus').click(function () {
        $(this).parents('.create-input__item').remove();
    });


    //radio-button show content


    //anketa toggle
    $('.anketa-title' ).on('click', function () {
        $(this).next().fadeToggle(300);
        $(this).toggleClass('active');
    });

});

function hideAllDropdown() {
    $('#question-drop').fadeOut(300);
    $('#notifications-drop').fadeOut(300);
    $('#balance-drop').fadeOut(300);
}

$('#notifications-drop').click(function (event) {
    let el = document.getElementById('notifications-drop');
    if (event.target === el) {
        hideAllDropdown()
    }
});

$('#question-drop').click(function (event) {
    let el = document.getElementById('question-drop');
    if (event.target === el) {
        hideAllDropdown()
    }
});

$('#balance-drop').click(function (event) {
    let el = document.getElementById('balance-drop');
    if (event.target === el) {
        hideAllDropdown()
    }
});

/* Close dropdown on outside click */
$(document).click(function() {
    // close dropdown if clicked outside
    $('div.poster-select__head.active').next().fadeToggle(300);
    $('div.poster-select__head.active').toggleClass('active');

    // hideAllDropdown();

    $('.poster-header__name').removeClass('active');
    $('.poster-header__person').removeClass('active');
    $('.poster-header__list').fadeOut(300);


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

    //modal change

    var countdownNumberEl = document.getElementById('countdown-number');
    var countdown = 32;

    countdownNumberEl.textContent = countdown;
    setInterval(function() {
        countdown = --countdown <= 0 ? 30 : countdown;

        countdownNumberEl.textContent = countdown;
    }, 1000);

});

$(document).ready(function(){
    $(function(){
        $(".datepicker").datepicker();
    });
});

$(document).ready(function(){
    $('.open-history').click(function () {
        $('#balance').modal('hide')
    });

    $('.modal-remember').click(function () {
        $('#forgot_password').modal('hide')
    })

    $('.modal-forgot').click(function () {
        $('#enter').modal('hide')
    });
    $('.sent-code').click(function () {
        $('#enter').modal('hide')
        $('#forgot_password').modal('hide')
    })

});


function setPosition() {
    // Set position of the questions drop
    const element = document.getElementById('show-question');
    const elementContent = document.getElementsByClassName('question-drop__content')[0];
    var rect = element.getBoundingClientRect();
    elementContent.style.right = `${window.innerWidth - rect.right}px`;

    // Set position of the notifications drop
    const notificationsShowElement = document.getElementById('show-notifications');
    const notificationsContent = document.getElementsByClassName('notifications-drop__content')[0];
    var notificationsRect = notificationsShowElement.getBoundingClientRect();
    notificationsContent.style.right = `${window.innerWidth - notificationsRect.right - 4}px`;

    // Set position of the balance drop
    const balanceShowElement = document.getElementById('show-balance');
    const balanceContent = document.getElementsByClassName('balance-drop__content')[0];
    var balanceRect = balanceShowElement.getBoundingClientRect();
    balanceContent.style.right = `${window.innerWidth - balanceRect.right}px`;
}

setPosition();


$("#show-question").click(function(e) {
    e.stopPropagation();
    hideAllDropdown();
    $('#question-drop').slideToggle();
});

$("#show-notifications").click(function(e) {
    e.stopPropagation();
    hideAllDropdown();
    $('#notifications-drop').slideToggle();
});

$("#show-balance").click(function(e) {
    e.stopPropagation();
    hideAllDropdown();
    $('#balance-drop').slideToggle();
});

window.onresize = function() {
    setPosition()
};

function show1(){
    document.getElementById('show1').style.display ='block';
    document.getElementById('show2').style.display = 'none';
    document.getElementById('list1').style.display ='block';
    document.getElementById('list2').style.display = 'none';
}
function show2(){
    document.getElementById('show1').style.display ='none';
    document.getElementById('show2').style.display = 'flex';
    document.getElementById('list1').style.display ='none';
    document.getElementById('list2').style.display = 'block';
}
function showDelivery(){
    document.getElementById('form-delivery').style.display ='block';
    document.getElementById('list3').style.display ='none';
}
function hideDelivery(){
    document.getElementById('form-delivery').style.display ='none';
    document.getElementById('list3').style.display ='block';
}



function chooseDiscount (){
    if ( $('input[name="switcher-discount"]').is(':checked') ) {
        document.getElementById('calendar-show').style.display ='none';
        document.getElementById('titletemp').style.display ='none';
        document.getElementById('titleopt').style.display ='flex';
    }
    else {
        document.getElementById('calendar-show').style.display ='flex';
        document.getElementById('titleopt').style.display ='none';
        document.getElementById('titletemp').style.display ='block';
    }
}



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
    $('.poster-recommended__slider').slick({
        prevArrow: false,
        nextArrow: false,
        dots: true,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
    $('.create-img span').click(function () {
        $(this).parents('.create-img').remove();
    });

    $('.datetimepicker1').datetimepicker({
        language: 'pt-BR'
    });
    // $('#datetimepicker').data("DateTimePicker").FUNCTION()
    // $(function () {
    //     $('#datetimepicker1').datetimepicker();
    // });

    // $(".create-append").each(function() {
    //     $(this).find('.create-input__item').each(function(){
    //         $(this).find('.create-plus').click(function () {
    //             $(this).parents('.create-append').clone(true,true).appendTo('.create-append__wrap');
    //         });
    //     });
    //     $(this).find('.create-input__item').each(function(){
    //         $(this).find('.create-minus').click(function () {
    //             $(this).parents('.create-append').remove();
    //         });
    //     });
    // });


    // $('.create-plus').click(function () {
    //     $(this).parents('.create-append').clone(true,true).appendTo('.create-append__wrap');
    // });
    // $('.create-minus').click(function () {
    //     $(this).parents('.create-append').remove();
    // });

    // $('.create-plus').click(function () {
    //     var content= $('<div class="create-input__item"><div class="create-input create-input__ticket"><input class="create-input__text" type="text" placeholder="Укр">\</div>\<div class="create-input create-input__ticket">\<input class="create-input__text" type="text" placeholder="Название билета:">\<p class="create-input__desc">(Напр. VIP, Пресса и т.д.)</p>\</div>\<div class="create-input create-input__ticket">\<input class="create-input__text" type="text" placeholder="Цена:">\</div>\<div class="create-input create-input__ticket">\<span class="create-input__title">Количество:</span>\<input class="create-input__text" type="text">\<p class="create-input__desc">(Не ограничено)</p>\</div>\<div class="create-minus"></div><div class="create-plus"></div></div>')
    //     // $('.create-append').append(content);
    //     $(this).closest('.create-append').append(content);
    // });
    // $('.create-minus').click(function () {
    //     $(this).parents('.create-input__item').remove();
    // });


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
    $('.create-select__wrap').fadeOut(300);
    $('.create-select__head').removeClass('active');

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
    /* Init datapicker */
    $(".datepicker").datepicker();
});

// $(document).ready(function(){
//     $('.datepicker').datetimepicker();
// });


/* Main Settings form show block */
function showMainSettingsBlock(number) {
    $('.create-list').find(`.item-content:eq(${number})`).fadeIn(300);
    $('.create-list').find(`.item-title:eq(${number})`).addClass('active');
}

/* Main Settings form hide block */
function hideMainSettingsBlock(number) {
    $('.create-list').find(`.item-content:lt(${number})`).fadeOut(300);
    $('.create-list').find(`.item-title:eq(${number})`).removeClass('active')
}

/* Hooks to close dropdowns */
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

    if (myChart) {
        myChart.canvas.parentNode.style.height = '305px';
    }

    /* crete new lines in ticket from buy_subscription_anketa.html */
    $('div.create-plus.ticket').on('click', function () {
        $('.create-ticket.last').clone(true, true).appendTo('.anketa-content');
        $(this).prop("onclick", null).off("click");
        $(this).parent().parent().removeClass('last');
        $(this).hide();
        $(this).parent().find('.create-minus.ticket').css('display', 'block');
    });

    /* crete new lines in ticket from */
    $('div.create-minus.ticket').on('click', function () {
        $(this).parent().parent().remove();
    });

    /* crete new lines in ticket from settings_tickets_add.html */
    $('div.create-plus.ticket-settings-simple').on('click', function () {
        $('.create-input__item.ticket-settings-simple:last').clone(true, true).appendTo('.create-append.ticket-settings-simple');
        $(this).prop("onclick", null).off("click");
        $(this).parent().parent().removeClass('last');
        $(this).hide();
        $(this).parent().find('.create-minus.ticket-settings-simple').css('display', 'block');
    });

    /* crete new lines in ticket from settings_tickets_add.html */
    $('div.create-minus.ticket-settings-simple').on('click', function () {
        $(this).parent().remove();
    });






    /* main settings form */
    $('.create-list').find('.item-content').hide();

    /* show first block. Numeration starts from 0 */
    showMainSettingsBlock(0)

});

/* Hooks to close dropdowns */

/* Set drop down positions */
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

window.onresize = function() {
    setPosition()
};

/* End sets of dropdown positions */

/* Show dropdown */
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
/* Show dropdown */


function show1(){
    document.getElementById('show1').style.display ='block';
    document.getElementById('show2').style.display = 'none';
    document.getElementById('list1').style.display ='block';
    document.getElementById('list2').style.display = 'none';
}
function show2(){
    document.getElementById('show1').style.display ='none';
    document.getElementById('show2').style.display = 'block';
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
function chooseCount(){
    if ( $('input[name="switcher-discount"]').is(':unchecked') ) {
        document.getElementById('titleMuch').style.display ='none';
        document.getElementById('titleCount').style.display ='flex';
    }
    else {
        document.getElementById('titleCount').style.display ='none';
        document.getElementById('titleMuch').style.display ='block';
    }
}

function showProm1(){
    document.getElementById('showProm2').style.display = 'none';
}
function showProm2(){
    document.getElementById('showProm2').style.display = 'block';
}

function showCheck(){
    document.getElementById('showCheck').style.display ='block';
}
function hideCheck(){
    document.getElementById('showCheck').style.display ='none';
}


/* Chart.JS block */
var ctx = document.getElementById('myChart');
if (ctx) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Пн 22/03/2019', 'Вт 23/03/2019', 'Ср 24/03/2019', 'Чт 25/03/2019', 'Пт 26/03/2019', 'Сб 27/03/2019'],
            datasets: [{
                backgroundColor: "#3a4185",
                data: [65, 59, 80, 81, 56, 55, 40]
            }, {
                backgroundColor: "#affadb",
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false,
            },
            maintainAspectRatio: false,
        }
    });
};

/* End Chart.JS block */

function showType1(){
    document.getElementById('showType1').style.display ='block';
    document.getElementById('showType2').style.display = 'none';
    document.getElementById('showType3').style.display = 'none';
}
function showType2(){
    document.getElementById('showType2').style.display ='block';
    document.getElementById('showType1').style.display = 'none';
    document.getElementById('showType3').style.display = 'none';
}
function showType3(){
    document.getElementById('showType3').style.display ='block';
    document.getElementById('showType2').style.display = 'none';
    document.getElementById('showType1').style.display = 'none';
}


function checkCalendar(){
    if ( $('input[name="check_calendar"]').is(':checked') ) {
        document.getElementById('check_calen').style.display ='block';
    }
    else {
        document.getElementById('check_calen').style.display ='none';
    }
}

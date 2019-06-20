$(document).ready(function () {


    // Вывод формы авторизации пользователя
    $("#key").click(function(){
        $(".key_form").slideToggle(500);
    });

    $("#search").click(function(){
        $(".search_form").slideToggle(500);
    });

    $("#mobile_icon").click(function(){
        $(".mobile_items").slideToggle(500);
    });

    //Каруселька
    //Документация: https://owlcarousel2.github.io/OwlCarousel2/
    var owl = $('.owl-carousel').owlCarousel({
        // nav:true, // Показ элементов навигации
        dots:true, // Показывать элементы навигации в виде точек
        margin:50, // Отступ между item`ами
        stagePadding: 40,
        autoHeight:true, //авто высота элемента
        loop: true, // Бесконечная прокрутка
        autoplay: true, // Автоматическое проигрывание
        autoplayTimeout: 2000, //Время задержки автоматической прокрутки
        autoplayHoverPause: true, //Остановка автоматической прокрутки при наведении
        responsive: { // Отображение элементов при разрешении от и выше
            0: {
                items: 1
            },
            480:{
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    });

    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    // Переход с следующему элементу слайдера
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    });
    // Переход к предыдущему элементу слайдера
    $('.owl-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    //При убирании мыши со слайдера запуск воспроизведения слайдов
    owl.mouseout(function () {
        owl.trigger('play.owl.autoplay');
    });
    //При наведении мыши на слайдер приостановка воспроизведения слайдов
    owl.mouseover(function () {
        owl.trigger('stop.owl.autoplay');
    });

    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    //Прокрутка вверх при клике на кнопку
    $('.flowing-scroll').on( 'click', function(){
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({
                    scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
                }, 500 // скорость прокрутки
            );
        }
        return false;
    });

// Скрытие-Отображение кнопки прокрутки Вверх
    $(window).scroll(function (event) {
        var top = $(window).scrollTop();
        if(top >= 50){
            //show btn
            $("#top_up").css("display", "block");
        } else {
            //hide btn
            $("#top_up").css("display", "none");
        }
    });

    //Анимационные эффекты
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default 0
            mobile:       false,       // default true
            live:         true        // default
        }
    )
    wow.init();

});



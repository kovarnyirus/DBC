$('.brand-slider__list').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('.brand-slider__btn-prev'),
    nextArrow: $('.brand-slider__btn-next'),
    responsive: [{

        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }


    }]
});
$('.sale-slider__list').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 4,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('.sale-slider__btn-prev'),
    nextArrow: $('.sale-slider__btn-next'),
    responsive: [{

        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            arrows: false
        }


    }]
});
$('.advertising__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    variableWidth: true,
    dots: false,
    prevArrow: $('.advertising__btn-prev'),
    nextArrow: $('.advertising__btn-next'),
    responsive: [{

        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }]
});

$('.catalog-nav__brand').slick({
    slidesToShow: 5,
    variableWidth: true,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 99999,
            settings: 'unslick'
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$(".product-head__sliders").each(function () {
    var th = $(this);


    //  слайдер в  карточке товара
    th.find('.product-head__slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 450,
        asNavFor: th.find('.product-head__slider-small'),
        infinite: false,
        loop: false,
        arrows: false,

    });
    th.find('.product-head__slider-small').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        speed: 450,
        infinite: false,
        loop: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: th.find('.product-head__slider-big'),
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    vertical: false,
                    verticalSwiping: false,
                }
            },

        ]
    });
});


$('.tabs__caption').slick({
    dots: false,
    arrows: false,
    infinite: false,
    loop: false,
    speed: 450,
    slidesToShow: 1,
    variableWidth: true,
    rows: 0,
    responsive: [
        {
            breakpoint: 99999,
            settings: 'unslick'
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

function tabscostume(tab) {
    $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.' + tab).find('.' + tab + '__item').hide().removeClass('active')
            .eq($(this).index()).fadeIn().addClass('active');
    });
};
tabscostume('tabs');




$('.instagram-block__slider').slick({
    slidesToShow: 5,
    variableWidth: true,
    dots: false,
    arrows: false,
});

$( ".order-history__toggle" ).click(function() {
    $(this).closest(".order-history__item").toggleClass('order-history__item--open');
});


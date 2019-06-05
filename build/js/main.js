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

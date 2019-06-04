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

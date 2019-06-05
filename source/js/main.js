var slidetArrowNext = '<button class="btn-next brand-slider__btn-next slick-arrow" style=""><svg class="icon icon-arrow-right"><use xlink:href="img/svg/sprite.svg#icon-arrow-right"></use></svg></button>';
var slidetArrowPrev = '<button class="btn-prev brand-slider__btn-prev slick-arrow" style=""><svg class="icon icon-arrow-left "><use xlink:href="img/svg/sprite.svg#icon-arrow-left"></use></svg></button>';


$('.brand-slider__list').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    prevArrow: slidetArrowPrev,
    nextArrow: slidetArrowNext,
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
    slidesToShow: 5,
    centerMode: true,
    variableWidth: true,
    prevArrow: slidetArrowPrev,
    nextArrow: slidetArrowNext,
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
    prevArrow: slidetArrowPrev,
    nextArrow: slidetArrowNext,
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

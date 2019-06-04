$('.brand-slider__list').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('.brand-slider__btn-prev'),
    nextArrow: $('.brand-slider__btn-next')
});
$('.advertising__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    variableWidth: true,
    dots: false,
    prevArrow: $('.advertising__btn-prev'),
    nextArrow: $('.advertising__btn-next')
});

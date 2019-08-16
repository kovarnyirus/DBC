jQuery(document).ready(function ($) {
    let brandSliderBtnPrev = '<button class="btn-prev brand-slider__btn-prev">\n' +
        '          <svg class="icon icon-arrow-left ">\n' +
        '            <use xlink:href="img/svg/sprite.svg#icon-arrow-left"></use>\n' +
        '          </svg>\n' +
        '        </button>';
    let brandSliderBtnNext = '<button class="btn-next brand-slider__btn-next">\n' +
        '          <svg class="icon icon-arrow-right ">\n' +
        '            <use xlink:href="img/svg/sprite.svg#icon-arrow-right"></use>\n' +
        '          </svg>\n' +
        '        </button>';

    let advertisingSliderNext = '<button class="btn-next advertising__btn-next slick-arrow" style="">\n' +
        '              <svg class="icon icon-arrow-right ">\n' +
        '                <use xlink:href="img/svg/sprite.svg#icon-arrow-right"></use>\n' +
        '              </svg>\n' +
        '            </button>';
    let advertisingSliderPrev = '<button class="btn-prev advertising__btn-prev slick-arrow" style="">\n' +
        '              <svg class="icon icon-arrow-left ">\n' +
        '                <use xlink:href="img/svg/sprite.svg#icon-arrow-left"></use>\n' +
        '              </svg>\n' +
        '            </button>';

    let bidSliderArrowLeft = '<svg width="11" height="21" class="arrow-prev" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M10.5 1L1 10.5L10.5 20" stroke="black"/>\n' +
        '</svg>';

    let bidSliderArrowRight = '<svg width="12" height="21" class="arrow-next" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1 20L10.5 10.5L1 0.999999" stroke="black"/>\n' +
        '</svg>\n';

    $('.big-slider').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: bidSliderArrowLeft,
        nextArrow: bidSliderArrowRight,
        dots: true,
        responsive: [
            {
                breakpoint: 99999,
                settings: {
                    // arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.brand-slider__list--no-arrows').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 2,
        centerMode: true,
        variableWidth: true,
        dots: false,
        prevArrow: brandSliderBtnPrev,
        nextArrow: brandSliderBtnNext,
        arrows: true,
        responsive: [{

            breakpoint: 99999,
            settings: {
                slidesToShow: 4,
                arrows: false,
            }
        },
            {

                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                }
        }]
    });

    $('.brand-slider__list--arrows').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 2,
        centerMode: true,
        variableWidth: true,
        dots: false,
        prevArrow: brandSliderBtnPrev,
        nextArrow: brandSliderBtnNext,
        arrows: true,
        responsive: [
            {

                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                }
            },

        ]
    });

    $('.sale-slider__list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        centerMode: true,
        // variableWidth: true,
        prevArrow: brandSliderBtnPrev,
        nextArrow: brandSliderBtnNext,
        responsive: [
            {
                breakpoint: 99999,
                settings: {
                    slidesToShow: 7,
                    arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            },
        ]
    });

    $('.advertising__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 450,
        loop: true,
        mobileFirst: true,
        rows:0,
        prevArrow: advertisingSliderPrev,
        nextArrow: advertisingSliderNext,
        responsive: [
            {
                breakpoint: 320,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {

                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    });



    $('.catalog-nav__brand').slick({
        infinite: true,
        speed: 300,
        variableWidth: true,
        dots: false,
        arrows: false,
        rows: 0,
        responsive: [
            {
                breakpoint: 99999,
                settings: 'unslick'
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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


    $('.product-head__slide--big a').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });


    $('.product-head__video-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    $('.tabs__caption').slick({
        dots: false,
        arrows: false,
        infinite: false,
        loop: false,
        speed: 450,
        slidesToShow: 1,
        // variableWidth: true,
        rows: 0,
        responsive: [
            {
                breakpoint: 99999,
                settings: 'unslick'
            },
            {
                breakpoint: 1200,
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

    $(".order-history__toggle").click(function () {
        $(this).closest(".order-history__item").toggleClass('order-history__item--open');
    });

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: true,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


    $('input[type="tel"]').mask("+7(999) 999-9999", {});

    $(".custom-scroll-js").mCustomScrollbar({
        autoHideScrollbar: true,
    });

    $(".custom-scroll-js3").mCustomScrollbar({
        autoHideScrollbar: true,
    });
    $(".custom-scroll-js2").mCustomScrollbar({
        autoHideScrollbar: true,
    });

    $('[data-toggle="tooltip-catalog"]').tooltip({
        html: true,
        placement: 'top',
        template: '<div class="tooltip tooltip-catalog__wrapper" role="tooltip">' +
            '<div class="tooltip-arrow"></div>' +
            '<div class="tooltip-inner tooltip-catalog__wrapper-inner"></div></div>'
    });

    $('[data-toggle="tooltip]').tooltip({
        html: true,
        placement: 'left'
    });

    // range в каталоге
    $(".js-range-slider").ionRangeSlider();


    $('.select2--js').select2({
        minimumResultsForSearch: -1
    });


    $('.brands__name-list').slick({
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


    jQuery('.aside-filter__toggle').on('click', function (e) {
        e.preventDefault();
        jQuery(this).closest('.aside-filter__group').toggleClass('aside-filter__group--active');
    });

    $('.custom-checkbox__name--dropdown').on('click', function (e) {
        jQuery(this).toggleClass('custom-checkbox__name--dropdown-open');
        jQuery(this).closest('.aside-filter__dropdown-item').toggleClass('aside-filter__dropdown-item--open');
    });

    // mobile menu toggle

    $(".toggle-menu").click(function () {
        $(".mobile-menu").toggleClass('mobile-menu--open');
        $('html').toggleClass('overflowHidden');
    });


    $(".top-nav__catalog-btn").click(function () {
        $(".mobile-catalog").toggleClass('mobile-catalog--open');
        $('html').toggleClass('overflowHidden');
    });

    $(".mobile-catalog__btn-close").click(function () {
        $(".mobile-catalog").toggleClass('mobile-catalog--open');
        $('html').toggleClass('overflowHidden');
    });

    $(".mobile-filer-toggle").click(function () {
        $(".mobile-filter").toggleClass('mobile-filter--open');
    });

    function throttle(func, ms) {

        var isThrottled = false,
            savedArgs,
            savedThis;

        function wrapper() {

            if (isThrottled) {
                savedArgs = arguments;
                savedThis = this;
                return;
            }

            func.apply(this, arguments);

            isThrottled = true;

            setTimeout(function() {
                isThrottled = false;
                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = savedThis = null;
                }
            }, ms);
        }

        return wrapper;
    }

    function resizeSlick(){
        $('.catalog-nav__brand').slick('unslick').slick('reinit');
    }

    $(window).resize(function(){
        resizeSlick()
    });



    $('.mobile-catalog__level-toggle').on('click', function (e) {
        $(this).closest('.mobile-catalog__item').toggleClass('mobile-catalog__item--open');

    });

    $('.cut-price__btn').on('click', function (e) {
        $(this).closest('.cut-price').toggleClass('cut-price--open');

    });
});



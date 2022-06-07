$(function(){
    $(window).on('scroll', function(){
        var menuHeight = $('#main_menu').height();
        var scrollSize = $(window).scrollTop();
        if(scrollSize > menuHeight){
            $('#main_menu').addClass('animate');
        }else{
            $('#main_menu').removeClass('animate');
        }
    })
    $('.banner_slider').slick({
        slidesToShow : 1,
        arrows : false,
        autoplay: true,
        autoplaySpeed: 2000
    })
    $('.product_slider').slick({
        slidesToShow: 4,
        prevArrow : $('.prvarrow'),
        nextArrow: $('.nxtarrow'),
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    })
    $('.p_product_slider').slick({
        slidesToShow: 5,
        prevArrow : $('.p_prvarrow'),
        nextArrow: $('.p_nxtarrow'),
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    })
    $('.week_slider').slick({
        slidesToShow: 4,
        prevArrow : $('.w_prvarrow'),
        nextArrow: $('.w_nxtarrow'),
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    })
    $('.spcialC_slider').slick({
        slidesToShow: 4,
        prevArrow : $('.s_prvarrow'),
        nextArrow: $('.s_nxtarrow'),
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    })
})
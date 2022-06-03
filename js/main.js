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
    $('.product_slider').slick({
        slidesToShow: 4,
        prevArrow : $('.prvarrow'),
        nextArrow: $('.nxtarrow')
    })
    $('.p_product_slider').slick({
        slidesToShow: 5,
        prevArrow : $('.p_prvarrow'),
        nextArrow: $('.p_nxtarrow')
    })
    $('.week_slider').slick({
        slidesToShow: 4,
        prevArrow : $('.w_prvarrow'),
        nextArrow: $('.w_nxtarrow')
    })
    $('.spcialC_slider').slick({
        slidesToShow: 4,
        prevArrow : $('.s_prvarrow'),
        nextArrow: $('.s_nxtarrow')
    })
})
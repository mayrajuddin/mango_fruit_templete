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
})
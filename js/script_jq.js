$(document).ready(function(){
    $(' a').click(function()  {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop:$(target).offset().top
        },500);
        $('.menu').removeClass('active');
        return false;
    });
 
   $(window).scroll(function(){
       if($(this).scrollTop()>1600){
           $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
   });
 





});
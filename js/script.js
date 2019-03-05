$(document).ready(function(){

   
    $('.rotating-slideshow').rotatingSlideshow({
        sliderHolder: '#slider-main',
        btnsHolder: '#slider-btns',
        audioHolder: '#slider-sound',
        auto:true,
        autoSpeed:'3000'
    });

    $("#navbarDropdownMenuLink").click(function(){
        $(".dropdown-menu").slideToggle(500);
    });


    // Scroll top
    var scrollButton = $(".scroll_top");
    $(window).scroll(function(){
        $(this).scrollTop() > 500 ? scrollButton.show() : scrollButton.hide();
    });

    scrollButton.click(function(){
        $("html,body").animate({scrollTop : 0},2000);
    });
    

    /* sections button change background */              
    $('.buttons button').click(function(){
        $(this).addClass('active-btn').siblings().removeClass('active-btn');

        var CssFilter = $(this).attr('id');
        if(CssFilter === 'all'){
            $('.images > div').fadeIn();
        }
        else{
            $('.images > div').fadeOut();
            $('.images').contents().filter('.' + CssFilter).fadeIn();
        }
    });
    

   /* Scroll Style  */
   $("body").niceScroll({
    cursorcolor:"#ff00aa",
    cursorwidth:"7px",
    cursorborder:"none"
    });


           
});



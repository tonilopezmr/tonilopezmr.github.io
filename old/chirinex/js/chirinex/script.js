$(document).ready(function(){
    
    //nojs
    $("body").removeClass("no-js");
    
    //------------------------------------------------------------------------//
    
    //fakelink
    $('a[href="#"]').on('click',function(e){e.preventDefault();});
    
    //------------------------------------------------------------------------//
    
    //placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();
    
    //------------------------------------------------------------------------//
    
    //tab
    $('.tabs').delegate('li:not(.active)','click',function(){$(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(250);});
    

    var tab = 1;
    setInterval(function(){
        $('#tab'+tab).click();
        tab = tab +1;
        tab = tab % 3;
    },7000);
    
    
});//document ready
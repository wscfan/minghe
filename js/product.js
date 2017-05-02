$(function(){
    // main-fl bgline
    $('.bgline').css({height:(parseInt($('.bgline').parent().css('height'))+35)+'px'});
    $('.bgline .dot').css({top:(parseInt($('.bgline').css('height'))-parseInt($('.bgline .dot').css('height')))/2+'px'});

    //  main item
    $('.item').on('click',function(){
        $(window).scrollTop('300')
        $('.item').removeClass('selectIt');
        $(this).addClass('selectIt');
        $('.main-rInner').removeClass('blockIn');
        $('.main-rInner').eq($(this).index()-2).addClass('blockIn');
    })
    //  footerline icon
    $('.footerline .wxA').hover(
        function(){
            $(this).css({background:'url("../../images/weicopngIn_01.png")  no-repeat '})
        },
        function(){
            $(this).css({background:'url("../../images/weicopngOut_01.png")  no-repeat '})
        }
    )
    $('.footerline .snA').hover(

        function(){
            $(this).css({background:'url("../../images/sinapngIn_01.png")  no-repeat '})
        },
        function(){
            $(this).css({background:'url("../../images/sinapngOut_01.png")  no-repeat '})
        }
    )

    // window scroll
    $(window).on('scroll',function(){
        if($(this).scrollTop()>280 && $(this).scrollTop()<parseInt($('.main-l').parent('.proWidth').css('height'))){
            $('.main-l').css({'position':'fixed',top:'160px'})
        }else if($(this).scrollTop()>parseInt($('.main-l').parent('.proWidth').css('height'))-500){
            $('.main-l').css({'position':'absolute',top:parseInt($('.main-l').parent('.proWidth').css('height'))+100+'px'})
        }else{
            $('.main-l').css({'position':'relative',top:0})
        }
    })


    // toTop
    $('.toTop').hover(
        function(){
            $(this).css({background:'url("../../images/top-hover_01.png")  no-repeat '})
        },
        function() {
            $(this).css({background: 'url("../../images/top_01.png")  no-repeat '})
        }
    );
    $('.toTop').on('click',function(){
        $('html,body').animate({scrollTop:0},500)
    });

})

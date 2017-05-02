$(function(){
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

    // i
    $('.solu').hover(
        function(){
            $(this).find('i').stop(true).animate({left:'7px'},'fast')
        },
        function(){
            $(this).find('i').stop(true).animate({left:'0px'},'fast')
        }
    )
    $('.solu-item').hover(
        function(){
            $(this).find('i').stop(true).animate({left:'7px'},'fast')
        },
        function(){
            $(this).find('i').stop(true).animate({left:'0px'},'fast')
        }
    )
})

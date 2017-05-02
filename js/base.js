$(function(){
    // header导航
    $('.h-nav li').hover(
        function(){
            $(this).find('ul').show();
            $(this).addClass('hoverLi')
    },
        function(){
            $(this).find('ul').hide()
            $(this).removeClass('hoverLi')
        }
    );
    $('.h-nav2nd li').hover(
        function(){
            $(this).find('a').addClass('hoverLi')
        },
        function(){
            $(this).removeClass('hoverLi')
            $(this).find('a').removeClass('hoverLi')
        }
    )

    //  footerline icon
    $('.footerline .snA').hover(
        function(){
            $(this).css({background:'url("images/sinapngIn_01.png")  no-repeat '})
        },
        function(){
            $(this).css({background:'url("images/sinapngOut_01.png")  no-repeat '})
        }
    )
    $('.footerline .wxA').hover(
        function(){
            $(this).css({background:'url("images/weicopngIn_01.png")  no-repeat '})
        },
        function(){
            $(this).css({background:'url("images/weicopngOut_01.png")  no-repeat '})
        }
    )

    // toTop
    $('.toTop').hover(
        function(){
            $(this).css({background:'url("images/top-hover_01.png")  no-repeat '})
        },
        function() {
            $(this).css({background: 'url("images/top_01.png")  no-repeat '})
        }
    );
    $('.toTop').on('click',function(){
        $('html,body').animate({scrollTop:0},500)
    });

    //  window scroll
    $(window).on('scroll',function(){
        if($(window).scrollTop()>150){
            $('.header').removeClass('colorOut')
            $('.header').addClass('colorIn')
        }else{
            $('.header').removeClass('colorIn')
            $('.header').addClass('colorOut')
        }
        if($(window).scrollTop()<260){
            $('.toTop').css({'display':'none'})
        }else{
            $('.toTop').css({'display':'block'})
        }
    })
});
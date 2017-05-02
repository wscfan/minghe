$(function(){
    //banner轮播
    var bannerIndex=0;
    var timer;
    function banner(){
        $('.banner .pic li').eq(0).removeClass('showIn');
        $('.banner .pic li').fadeOut();
        $('.banner .pic li').eq(bannerIndex).fadeIn();
        $('.banner ol li').removeClass('selectLi');
        $('.banner ol li').eq(bannerIndex).addClass('selectLi');
        $('.banner .board li').eq(0).removeClass('showIn');
        $('.banner .board li').fadeOut().css({filter:'Alpha(opacity=70)'});
        $('.banner .board li').eq(bannerIndex).fadeIn();
    }
    function autoBan(){
        timer=setInterval(function(){
            bannerIndex++;
            if(bannerIndex>=$('.banner .pic li').length){
                bannerIndex=0;
            }
            banner();
        },3000)
    }
    autoBan();
    $('.banner ol li').on('click',function(){
        clearInterval(timer);
        bannerIndex=$(this).index();
        banner();
        setTimeout(function(){
            clearInterval(timer);
            autoBan();
        },3000)
    });

    //  main-news
    $('.innerLeft ul li').on('click',function(){
        var k=$(this).index();
        $('.innerRight .RightLi').removeClass('showIn');
        $('.innerRight .RightLi').eq($(this).index()).addClass('showIn');
        $('.innerLeft ul li').removeClass('selectLi');
        $('.li-bg').stop(true).animate({top:$(this).index()*parseInt($(this).css('width'))},'ease',function(){
            $('.innerLeft ul li').eq(k).addClass('selectLi')
        })
    })

    // main-news-icon-position
    for(var j=0; j<$('.main-inner .linkTo').length; j++){
        for(var k=0; k<$('.main-inner .linkTo').eq(j).find('a').length; k++){
            $('.main-inner .linkTo').eq(j).find('a').eq(k).css({'backgroundPosition':-23*k+'px'})
        }
    }

    // weico code
    $('.weico').on('click',function(){
        $('.weicocode').css({top:$(window).scrollTop()+($(window).height()-$('.weicocode').height())/2+'px'});
        $('.weicocode').css({'display':'block'})
    });

    $('.weicocode span').on('click',function(){
        $('.weicocode').css({'display':'none'})
    });

    $(window).on('scroll',function(){
        if($(window).scrollTop()<260){
            $('.weicocode').css({'display':'none'})
        }
    })

});
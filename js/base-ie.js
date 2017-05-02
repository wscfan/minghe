$(function(){
    for(var i=0; i<$('.h-nav2nd').length; i++){
        $('.h-nav2nd').eq(i).css({width:$('.h-navLi')[i].offsetWidth+'px'});
    }
})
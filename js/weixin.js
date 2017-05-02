$(function(){
    //  footerline icon
    $('.footerline .wxA').hover(
        function(){
            $(this).css({background:'url("../images/weicopngIn_01.png")  no-repeat '})
        },
        function(){
            $(this).css({background:'url("../images/weicopngOut_01.png")  no-repeat '})
        }
    )
    $('.footerline .snA').hover(

        function(){
            $(this).css({background:'url("../images/sinapngIn_01.png")  no-repeat '})
        },
        function(){
            $(this).css({background:'url("../images/sinapngOut_01.png")  no-repeat '})
        }
    )

})
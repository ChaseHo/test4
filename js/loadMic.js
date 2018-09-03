/**
 * Created by admin on 2018/7/5.
 */
$(function () {
    var timer;
    var num = 0;

    function goto() {
        clearInterval(timer);
        timer=setInterval(function () {
            num++;
            if(num>2){
                num=0;
            }
            $('.load-scroll .load-l-pho ul').css('left',-num*545+'px');
            $('.load-scroll .load-wrap .load-dots a').eq(num).addClass('change-dots');
            $('.load-scroll .load-wrap .load-dots a').eq(num).siblings().removeClass('change-dots');
        },2000)
    }
    goto();
    $('.load-scroll .load-wrap .load-dots a').click(function () {
        num = $(this).index();
        $('.load-scroll .load-l-pho ul').css('left',-num*545+'px');
        $(this).addClass('change-dots');
        $(this).siblings().removeClass('change-dots');
    })
})
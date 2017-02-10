var cursor = 1;
var timer = null;

function showImg(num) {
    $('.banner-list li').hide().stop(true, true).eq(num-1).fadeIn('show');
    $('.img-num span').removeClass('onselect').eq(num-1).addClass('onselect');
    cursor = num + 1 > 5 ? 1 : num + 1;
    timer = setTimeout('showImg(' + cursor + ')', 2000);
}

$(function(){
    //轮播图
    showImg(cursor);
    $('.img-num span').hover(function() {
        clearTimeout(timer);
        cursor = parseInt($(this).text());
        $('.banner-list li').hide().stop(true, true).eq(cursor-1).fadeIn('show');
        $('.img-num span').removeClass('onselect').eq(cursor-1).addClass('onselect');
    }, function() {
        cursor = cursor + 1 > 5 ? 1 : cursor + 1;
        showImg(cursor);
    });

    //整页滑动
    $('#dowebok').fullpage({
        navigation: true,
        navigationPosition: 'right',
        loopTop: false,
        loopBottom: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        onLeave: function(index, nextIndex, direction){
            if (index === 2) {
                $('.s0-icon1').animate({bottom: '-63%', opacity: '0'}, 50); 
                $('.s0-icon2').animate({bottom: '-70%', opacity: '0'}, 100);
                $('.s0 .des').animate({top: '0', opacity: '0'}, 150);
            }
        },
        afterLoad: function(anchorLink, index){
            if (index === 2) {
                $('.s0-icon1').animate({bottom: '0', opacity: '1'}, 50);
                $('.s0-icon2').animate({bottom: '0', opacity: '1'}, 100);
                $('.s0 .des').animate({top: '20%', opacity: '1'}, 150);
            }
        }
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
})
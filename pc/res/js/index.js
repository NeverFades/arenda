$(document).ready(function () {
    jQuery(".slideBox").slide({
        mainCell: ".bd ul",
        autoPlay: true,
        effect: 'fade',
        trigger: 'mouseover',
        easing: 'swing',
        delayTime: 500,
        mouseOverStop: true,
        pnLoop: true
    });
    jQuery(".picScroll-left").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: 'left',
        autoPlay: true,
        scroll: 1,
        vis: 5,
        easing: 'swing',
        delayTime: 500,
        pnLoop: true,
        trigger: 'mouseover',
        mouseOverStop: true
    });
    $('.nav-hd').find('li').click(function () {
        $(this).addClass('on').siblings('li').removeClass('on');
    });
    $('.base-warp_bd').find('li').click(function () {
        $(this).addClass('on').siblings('li').removeClass('on');
        $('.base-warp').find('.base-desc').removeClass('js-show');
        $('#' + $(this).attr('data-target')).addClass('js-show');
    })
});
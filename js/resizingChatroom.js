// 윈도우 창 크기 변경시에도 스크롤 맨 아래로
window.addEventListener('resize', function () {
    // 높이 변경
    var body_height = $('.phone-wrapper').height() - 46;
    $('.phone-body').css('height', body_height + 'px').css('min-height', body_height + 'px');

    // 스크롤 맨 아래로
    $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight);
});


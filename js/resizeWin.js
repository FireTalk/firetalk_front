// 윈도우 창 크기 변경 막기
window.addEventListener('resize', function () {
    console.log('Resized');
    window.resizeTo(375, 647);
});

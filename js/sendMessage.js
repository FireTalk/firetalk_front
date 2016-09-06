$(document).ready( function () {
    $('#button_submit').on("click", function(){
        var message = $('#m').val();
        var nowTime = getNowTime();

        if(message !== '') {
            $('.collection').addMsgList('', '', message, 20, nowTime);
        }

        // 메시지 입력창 초기화
        $('#m').val('');

        //스크롤 맨 아래로
        $('body').scrollTop($(document).height());
    });
});
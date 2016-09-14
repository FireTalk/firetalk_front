$(document).ready(function () {
    // 스크롤 하단으로 이동시키기
    window.onload = function () {
        $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight);
    }

    //채팅방 이름
    $('#chatroom_name').text('질투의 화신3화');

    // 메시지 리스트 배열 (MAX>>몇개까지 정해야겠지..)
    var message_list = [
        { profile: 'profile1.png', nickname: '공블리', msg: '완전 웃긴닼ㅋㅋㅋㅋ 상황정황 얼척없음 ㅋㅋㅋㅋㅋ'},
        { profile: 'profile1.png', nickname: '공블리', msg: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ'},
        { profile: '', nickname: '', msg: '솔찍히 공블리 때문에 보는 것도 있었는데 연기 역시 잘해~'},
        { profile: 'profile1.png', nickname: '공블리', msg: '제가 봤을 때 이거 작가가 약하고 쓴 것이 틀림없음'}
    ];

    // 배열>>메시지 리스트 보여주기
    $.each(message_list, function (index, item) {
        $(function () {
            $('.collection').addMsgList(item.profile, item.nickname, item.msg);
        });
    })

    // 메시지 리스트 아이템 add해주는 함수
    $.fn.addMsgList = function (profile, nickname, msg) {
        if (profile === '' && nickname === '') { //내가 보낸 메시지
            this.append(
                $('<div>').attr('class', 'row').append(
                    $('<li>').attr('class', 'collection-item avatar my-msg').append(
                        $('<p>').attr('class', 'msg2').text(msg)
                    )
                )
            );
        } else { // 남이 보낸 메시지
            this.append(
                $('<div>').attr('class', 'row').append(
                    $('<li>').attr('class', 'collection-item avatar').append(
                        $('<img>').attr('src', 'images/' + profile).attr('class', 'circle'),
                        $('<span>').attr('class', 'nickname').text(nickname),
                        $('<p>').attr('class', 'msg1').text(msg)
                    )
                )
            );
        }
    }

    // 같은 사람이 여러개 보낸 경우 메시지 리스트 아이템 add해주는 함수
    $.fn.addMultiMsgList = function (profile, nickname, msg) {

    }

})
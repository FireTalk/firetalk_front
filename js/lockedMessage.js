$(document).ready(function () {

    // 스크롤 하단으로 이동시키기
    window.onload = function () {
        $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight);
    }

    //채팅방 이름
    $('#chatroom_name').text('질투의 화신3화');

    // 메시지 리스트 배열 (MAX>>몇개까지 정해야겠지..)
    var message_list = [
        { profile: 'profile1.png', nickname: '공블리', msg: '완전 웃긴닼ㅋㅋㅋㅋ 상황정황 얼척없음 ㅋㅋㅋㅋㅋ', msg_like: './images/like.png', likeNum: 252},
        { profile: 'profile1.png', nickname: '공블리', msg: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ', msg_like: './images/dislike.png', likeNum: 25},
        { profile: '', nickname: '', msg: '솔찍히 공블리 때문에 보는 것도 있었는데 연기 역시 잘해~', msg_like: './images/dislike.png', likeNum: 25 },
        { profile: 'profile1.png', nickname: '공블리', msg: '제가 봤을 때 이거 작가가 약하고 쓴 것이 틀림없음', msg_like: './images/dislike.png', likeNum: 25 }
    ];

    // 배열>>메시지 리스트 보여주기
    $.each(message_list, function (index, item) {
        $(function () {
            $('.collection').addLockedMsgList(item.profile, item.nickname, item.msg, item.msg_like, item.likeNum);
        });
    })

    // 메시지 리스트 아이템 add해주는 함수
    $.fn.addLockedMsgList = function (profile, nickname, msg, msg_like, likeNum) {
        if (profile === '' && nickname === '') { //내가 보낸 메시지
            this.append(
                $('<div>').attr('class', 'row').append(
                    $('<li>').attr('class', 'collection-item avatar my-msg').append(
                        $('<span>').attr('class', 'my-people').text('12'),
                        $('<img>').attr('class', 'my_like_function').attr('src', msg_like).attr('alt', 'msg_like').attr('width', '14px').attr('onclike', ''),
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
                        $('<p>').attr('class', 'msg1').text(msg),
                        $('<img>').attr('class', 'secondary-content badge time').attr('src', msg_like).attr('alt', 'msg_like').attr('width', '14px').attr('onclike', ''),
                        $('<span>').attr('class', 'secondary-content badge people').text(likeNum)
                    )
                )
            );
        }
    }
});
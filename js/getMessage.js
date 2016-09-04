$(document).ready(function () {
    /*
        // 현재 시간을 얻어주는 함수
        function getNowTime() {
            var now = new Date();
            var nowTime;
    
            if(now.getHours() > 12) {
                nowTime = "오후 " + (now.getHours()-12) + ":" + now.getMinutes();
            } else if(now.getHours() === 12) {
                nowTime = "오후 " + now.getHours() + ":" + now.getMinutes();
            } else{
                nowTime = "오전 " + now.getHours() + ":" + now.getMinutes();
            }
    
            alert(nowTime);
        }
    */
    /*
    window.onload = function () {
        getNowTime();
    }
    */

    // 스크롤 하단으로 이동시키기
    window.onload = function () {
        $('body').scrollTop($(document).height());
    }

    //채팅방 이름
    $('#chatroom_name').text('질투의 화신3화');

    // 메시지 리스트 배열 (MAX>>몇개까지 정해야겠지..)
    var message_list = [
        { profile: 'profile1.png', nickname: '공블리', msg: '완전 웃긴닼ㅋㅋㅋㅋ 상황정황 얼척없음 ㅋㅋㅋㅋㅋ', people: '24', time: '오후 6:16' },
        { profile: 'profile1.png', nickname: '공블리', msg: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ', people: '24', time: '오후 6:16' },
        { profile: '', nickname: '', msg: '솔찍히 공블리 때문에 보는 것도 있었는데 연기 역시 잘해~', people: '1', time: '오후 6:16' },
        { profile: 'profile1.png', nickname: '공블리', msg: '제가 봤을 때 이거 작가가 약하고 쓴 것이 틀림없음', people: '24', time: '오후 6:16' }
    ];


    // 배열>>메시지 리스트 보여주기
    $.each(message_list, function (index, item) {
        $(function () {
            $('.collection').addMsgList(item.profile, item.nickname, item.msg, item.people, item.time);
        });
    })

    // 메시지 리스트 아이템 add해주는 함수
    $.fn.addMsgList = function (profile, nickname, msg, people, time) {
        if (profile === '' && nickname === '') { //내가 보낸 메시지
            this.append(
                $('<div>').attr('class', 'row').append(
                    $('<li>').attr('class', 'collection-item avatar my-msg').append(
                        $('<span>').attr('class', 'my-people').text(people),
                        $('<span>').attr('class', 'my-time').text(time),
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
                        $('<span>').attr('class', 'secondary-content badge people').text(people),
                        $('<span>').attr('class', 'secondary-content badge time').text(time)
                    )
                )
            );
        }
    }

    // 같은 사람이 여러개 보낸 경우 메시지 리스트 아이템 add해주는 함수
    $.fn.addMultiMsgList = function (profile, nickname, msg, people, time) {

    }

})
$(document).ready(function () {

    // 스크롤 하단으로 이동시키기
    window.onload = function () {
        $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight);
    }

    //채팅방 이름
    $('#chatroom_name').text('질투의 화신3화');

    // 메시지 리스트 배열 (MAX>>몇개까지 정해야겠지..)
    var message_list = [
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '완전 웃긴닼ㅋㅋㅋㅋ 상황정황 얼척없음 ㅋㅋㅋㅋㅋ', msg_like: './images/like2.png', likeNum: 252 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ', msg_like: './images/dislike.png', likeNum: 25 },
        { profile: '', nickname: '', emoticon: '', msg: '솔찍히 공블리 때문에 보는 것도 있었는데 연기 역시 잘해~', msg_like: './images/dislike.png', likeNum: 225 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '제가 봤을 때 이거 작가가 약하고 쓴 것이 틀림없음', msg_like: './images/dislike.png', likeNum: 25 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: 'images/emoticon/emoticon_test.png', msg: '', msg_like: './images/dislike.png', likeNum: 25 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: 'images/emoticon/emoticon_test.png', msg: '제가 봤을 때 이거 작가가 약하고 쓴 것이 틀림없음', msg_like: './images/dislike.png', likeNum: 25 },
        { profile: '', nickname: '', emoticon: 'images/emoticon/emoticon_test.png', msg: '', msg_like: './images/dislike.png', likeNum: 25 },
        { profile: '', nickname: '', emoticon: 'images/emoticon/emoticon_test.png', msg: '제가 봤을 때 이거 작가가 약하고 쓴 것이 틀림없음', msg_like: './images/dislike.png', likeNum: 55 },

        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '1단계', msg_like: './images/like2.png', likeNum: 2 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '2단계', msg_like: './images/like2.png', likeNum: 12 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '3단계', msg_like: './images/like2.png', likeNum: 22 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '4단계', msg_like: './images/like2.png', likeNum: 33 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '5단계', msg_like: './images/like2.png', likeNum: 43 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '6단계', msg_like: './images/like2.png', likeNum: 53 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '7단계', msg_like: './images/like2.png', likeNum: 67 },
        { profile: 'profile1.png', nickname: '공블리', emoticon: '', msg: '8단계', msg_like: './images/like2.png', likeNum: 78 }
    ];

    // 배열>>메시지 리스트 보여주기
    $.each(message_list, function (index, item) {
        $(function () {
            $('.collection').addLockedMsgList(item.profile, item.nickname, item.emoticon, item.msg, item.msg_like, item.likeNum);
        });
    })

    // 메시지 리스트 아이템 add해주는 함수
    $.fn.addLockedMsgList = function (profile, nickname, emoticon, msg, msg_like, likeNum) {
        if (emoticon === '') { //--------------------------------------------이모티콘 없을 경우
            if (profile === '' && nickname === '') { //내가 보낸 메시지
                this.append(
                    $('<div>').attr('class', 'row').append(
                        $('<li>').attr('class', 'collection-item avatar my-msg').append(
                            $('<p>').attr('class', 'msg2').text(msg),
                            $('<div>').attr('class', 'secondary-content badge likefunction_my').append(
                                $('<img>').attr('class', 'like').attr('src', msg_like).attr('alt', 'msg_like').on("click", function () {
                                    changeImage2(this);
                                }),
                                $('<span>').attr('class', 'likeNum').text(likeNum)
                            )
                        )
                    )
                );
                changeMyMsgColor(this, likeNum); // 메시지 색상 변경

            } else { // 남이 보낸 메시지
                this.append(
                    $('<div>').attr('class', 'row').append(
                        $('<li>').attr('class', 'collection-item avatar').append(
                            $('<img>').attr('src', 'images/' + profile).attr('class', 'circle'),
                            $('<span>').attr('class', 'nickname').text(nickname),
                            $('<p>').attr('class', 'msg1').attr('data-attr', '#ff0453').text(msg),
                            $('<div>').attr('class', 'secondary-content badge likefunction_other').append(
                                $('<img>').attr('class', 'like').attr('src', msg_like).attr('alt', 'msg_like').on("click", function () {
                                    changeImage2(this);
                                }),
                                $('<span>').attr('class', 'likeNum').text(likeNum)
                            )
                        )
                    )
                );
                changeOtherMsgColor(this, likeNum); // 메시지 색상 변경
            }
        } else { //---------------------------------------------------------이모티콘 있을 경우
            if (msg === '') { // 이모티콘만 있을 경우
                if (profile === '' && nickname === '') { //내가 보낸 메시지
                    this.append(
                        $('<div>').attr('class', 'row').append(
                            $('<li>').attr('class', 'collection-item avatar my-msg2').append(
                                $('<img>').attr('class', 'send_emoticon').attr('src', emoticon).attr('alt', 'emoticon')
                            )
                        )
                    );
                } else { // 남이 보낸 메시지
                    this.append(
                        $('<div>').attr('class', 'row emoticon_chat').append(
                            $('<li>').attr('class', 'collection-item avatar other-msg-emoticon').append(
                                $('<img>').attr('src', 'images/' + profile).attr('class', 'circle'),
                                $('<span>').attr('class', 'nickname').text(nickname),
                                $('<img>').attr('class', 'other_send_emoticon').attr('src', emoticon).attr('alt', 'emoticon')
                            )
                        )
                    );
                }

            } else { // 이모티콘 + 메시지가 있을 경우
                if (profile === '' && nickname === '') { //내가 보낸 메시지
                    this.append(
                        $('<div>').attr('class', 'row').append(
                            $('<li>').attr('class', 'collection-item avatar my-msg2').append(
                                $('<img>').attr('class', 'send_emoticon2').attr('src', emoticon).attr('alt', 'emoticon')
                            ),
                            $('<li>').attr('class', 'collection-item avatar my-msg').append(
                                $('<p>').attr('class', 'msg2').text(msg),
                                $('<div>').attr('class', 'secondary-content badge likefunction_my').append(
                                    $('<img>').attr('class', 'like').attr('src', msg_like).attr('alt', 'msg_like').on("click", function () {
                                        changeImage2(this);
                                    }),
                                    $('<span>').attr('class', 'likeNum').text(likeNum)
                                )
                            )
                        )
                    );
                    changeMyMsgColor(this, likeNum); // 메시지 색상 변경

                } else { // 남이 보낸 메시지
                    this.append(
                        $('<div>').attr('class', 'row').append(
                            $('<li>').attr('class', 'collection-item avatar other-msg-emoticon').append(
                                $('<img>').attr('src', 'images/' + profile).attr('class', 'circle'),
                                $('<span>').attr('class', 'nickname').text(nickname),
                                $('<img>').attr('class', 'other_send_emoticon2').attr('src', emoticon).attr('alt', 'emoticon')
                            ),
                            $('<li>').attr('class', 'collection-item avatar').append(
                                $('<p>').attr('class', 'msg1').text(msg),
                                $('<div>').attr('class', 'secondary-content badge likefunction_other').append(
                                    $('<img>').attr('class', 'like').attr('src', msg_like).attr('alt', 'msg_like').on("click", function () {
                                        changeImage2(this);
                                    }),
                                    $('<span>').attr('class', 'likeNum').text(likeNum)
                                )
                            )
                        )
                    );
                    changeOtherMsgColor(this, likeNum); // 메시지 색상 변경
                    
                }
            }

        }

    }

    // 좋아요 갯수에 따른 색상 변경
    function changeMyMsgColor (parent, likeNum) {
        
        if (0 <= likeNum && likeNum < 10) {
            $(parent).children().last().find("p").attr('class','msg2-1');
        } else if (10 <= likeNum && likeNum < 20) {
            $(parent).children().last().find("p").attr('class','msg2-2');
        } else if (20 <= likeNum && likeNum < 30) {
            $(parent).children().last().find("p").attr('class','msg2-3');
        } else if (30 <= likeNum && likeNum < 40) {
            $(parent).children().last().find("p").attr('class','msg2-4');
        } else if (40 <= likeNum && likeNum < 50) {
            $(parent).children().last().find("p").attr('class','msg2-5');
        } else if (50 <= likeNum && likeNum < 60) {
            $(parent).children().last().find("p").attr('class','msg2-6');
        } else if (60 <= likeNum && likeNum < 70) {
            $(parent).children().last().find("p").attr('class','msg2-7');
        } else {
            $(parent).children().last().find("p").attr('class','msg2-8');
        }
    }
    function changeOtherMsgColor (parent, likeNum) {
        
        if (0 <= likeNum && likeNum < 10) {
            $(parent).children().last().find("p").attr('class','msg1-1');
        } else if (10 <= likeNum && likeNum < 20) {
            $(parent).children().last().find("p").attr('class','msg1-2');
        } else if (20 <= likeNum && likeNum < 30) {
            $(parent).children().last().find("p").attr('class','msg1-3');
        } else if (30 <= likeNum && likeNum < 40) {
            $(parent).children().last().find("p").attr('class','msg1-4');
        } else if (40 <= likeNum && likeNum < 50) {
            $(parent).children().last().find("p").attr('class','msg1-5');
        } else if (50 <= likeNum && likeNum < 60) {
            $(parent).children().last().find("p").attr('class','msg1-6');
        } else if (60 <= likeNum && likeNum < 70) {
            $(parent).children().last().find("p").attr('class','msg1-7');
        } else {
            $(parent).children().last().find("p").attr('class','msg1-8');
        }
    }
});
$(document).ready(function () {
    var login_check = 1; // 로그인 체크, 로그인: 1 아닐 경우: 0
    var input = $('#form_input');

    var text_input = 0; // 입력창에 텍스트 입력 여부 체크, 입력 시: 1 없을 시:0

    var emoticon_mode = 0; // 이모티콘 모드 여부 체크, 이모티콘 모드: 1 아닐 경우: 0
    var select_emoticon = 0; // 이모티콘 선택 여부 체크, 선택: 1 아닐 경우: 0
    var emoticon_src;

    var body_height = $('.phone-wrapper').height() - 46;

    // 로그인 여부 체크



    if (login_check === 1) { // -------------------------------------------------------- 로그인일 경우
        // phone-body 높이 맞춰주기
        body_height = $('.phone-wrapper').height() - 46;
        $('.phone-body').css('height', body_height + 'px').css('min-height', body_height + 'px');

        // 이모티콘 아이콘, 텍스트 입력, 전송 버튼
        input.append(
            $('<div>').attr('id', 'button_plus').attr('class', 'btn waves-effect waves-light').append(
                $('<img>').attr('src', './images/on.png').attr('alt', 'emoticon_icon')
            ),
            $('<div>').attr('id', 'wrap').append(
                $('<input>').attr('id', 'm').attr('autocomplete', 'off')
            ),
            $('<button>').attr('id', 'button_submit').attr('class', 'btn waves-effect waves-light').attr('type', 'button').text('전송')
        )

        // 최근 온 메시지 위치 이동
        scrollBottom('어이가 아리마생 이 상황 뭥미? ㅋㅋ 진짜 어마무시한 전개다 예측불허 ㅋㅋㅋㅋ 너무 웃곀ㅋ');

        // 텍스트 입력시 전송 버튼 글씨 opacity 100%로 변경
        $("#m").keyup(function () {
            var input = $(this).val();

            if (input === '') { //opacity 40%
                $('#button_submit').css('opacity', '0.4');
                text_input = 0;
            } else { //opacity 100%
                $('#button_submit').css('opacity', '1.0');
                text_input = 1;
            }

        });

        // 이모티콘 아이콘 눌렀을 경우
        $('#button_plus').on("click", function () {

            if (emoticon_mode === 0) {
                emoticon_mode = 1; // 이모티콘 모드

                // phone-body 높이 변경
                //$('.phone-body').css('height', '60%').css('min-height', '60%');
                body_height = $('.phone-wrapper').height() - 255; // 이모티콘 영역의 크기 258px로 고정
                $('.phone-body').css('height', body_height + 'px').css('min-height', body_height + 'px');
                $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight); // 스크롤 맨 아래

                // emoticon_area 나타내주기
                showEmoticionArea();

                // 이모티콘 더블 클릭하면 보내지기
                $('.emoticon').dblclick(function () {
                    emoticon_src = $(this).attr('src');
                    select_emoticon = 1;
                    sendMsgEvent();
                });

                // 이모티콘 누르면 선택한 이모티콘 입력창 위쪽에 나타내기
                $('.emoticon').on("click", function () {
                    emoticon_src = $(this).attr('src');

                    if (select_emoticon === 0) { // 처음 선택한 경우
                        $('.carousel.carousel-slider').before(
                            $('<div>').attr('id', 'select_emoticon_area').append(
                                $('<img>').attr('id', 'select_emoticon').attr('class', 'emoticon').attr('src', emoticon_src),
                                $('<img>').attr('id', 'cancel').attr('src', './images/x.png').attr('alt', 'cancel')
                            )
                        )

                        select_emoticon = 1;
                    } else if (select_emoticon === 1) { // 연속해서 다시 선택한 경우
                        $('#select_emoticon').attr('src', emoticon_src);
                        select_emoticon = 1;
                    }

                    // select_emoticon_area 위치 조정
                    var select_area = $('#select_emoticon_area').height() + 40;
                    $('#select_emoticon_area').css('top', '-' + select_area + 'px');

                    // 이모티콘 입력창 위쪽 x누르면 없어지게 하기
                    $('#cancel').on("click", function () {
                        $('#select_emoticon_area').remove();
                        select_emoticon = 0;
                    });

                });

                // 초기화
                $('.carousel.carousel-slider').carousel({ full_width: true });

            }
        });

        // 엔터 버튼에 대한 이벤트 등록
        $('#m').keydown(function (key) {
            if (key.keyCode == 13) {
                sendMsgEvent();
                return false;
            }
        });

        // 전송 버튼에 대한 이벤트 등록
        $('#button_submit').on("click", function () {
            sendMsgEvent();
        });

    } else if (login_check === 0) { // --------------------------------------------------------로그인이 아닐 경우
        // phone-body 높이 맞춰주기
        body_height = $('.phone-wrapper').height() - 46;
        $('.phone-body').css('height', body_height + 'px').css('min-height', body_height + 'px');

        // 로그인 연결 아이콘으로 만들기, 텍스트 입력 불가 및 placeholder
        input.append(
            $('<div>').attr('id', 'button_plus').attr('class', 'btn waves-effect waves-light').append(
                $('<img>').attr('src', './images/login_icon.png').attr('alt', 'login_icon')
            ),
            $('<div>').attr('id', 'wrap').append(
                $('<input>').attr('id', 'm').attr('autocomplete', 'off').attr("disabled", true).attr('placeholder', '로그인이 필요합니다. 사람아이콘을 눌러주세요.')
            )
        )

        // 로그인 아이콘 눌렀을 경우
        $('#button_plus').on("click", function () {
            // 로그인 페이지로 이동
            window.location.href = "login.html";
        });

    }


    // ---------------------------------------------함수들-------------------------------------------//
    // 최근 온 메시지 맨 아래로 내려가게 하는 함수 
    function scrollBottom(msg) {
        // 최근온 메시지 바로 내려가기 기능
        $('#button_plus').before(
            $('<div>').attr('id', 'bottom_message').append(
                $('<img>').attr('id', 'message_profile').attr('class', 'circle').attr('src', 'images/profile1.png'),
                $('<div>').attr('id', 'bottom_text').text(msg),
                $('<img>').attr('id', 'scroll_bottom').attr('src', 'images/bottom_scroll.png').attr('alt', 'scroll_bottom')
            )
        )
        // 최근 온 메시지 위치로 맨 아래로 스크롤 내리기
        $('#scroll_bottom').on("click", function () {
            $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight); // 스크롤 맨 아래
        });
    }

    // 전송에 대한 기능 함수 
    function sendMsgEvent() {
        var message = $('#m').val();
        //var nowTime = getNowTime();

        if (emoticon_mode === 0) { // 이모티콘 모드가 아닐 경우

            if (text_input === 1) { // 텍스트만 보낼 경우
                // 채팅창에 메시지 붙이기
                $('.collection').addMsgList('', '', message);

                // 메시지 입력창 초기화
                $('#m').val('');
                text_input = 0;
                // 스크롤 맨 아래로
                $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight);
            }
        } else if (emoticon_mode === 1) { // 이모티콘 모드일 경우
            if (text_input === 0 && select_emoticon === 0) { // 아무것도 보내지 않음
                console.log("입력을 안함");

            } else if (text_input === 1 && select_emoticon === 0) { // 텍스트만 보내기

                // 이모티콘 영역 삭제
                $('#input_area').children().last().remove();
                emoticon_mode = 0; // 이모티콘 모드 변수 초기화

                body_height = $('.phone-wrapper').height() - 46;
                $('.phone-body').css('height', body_height + 'px').css('min-height', body_height + 'px'); // phone-body 높이 맞춰주기

                // 채팅창에 메시지 붙이기
                $('.collection').addMsgList('', '', message);


                $('#m').val(''); // 메시지 입력창 초기화
                text_input = 0; // 텍스트 입력 여부 초기화

                $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight); //스크롤 맨 아래로


            } else if (text_input === 0 && select_emoticon === 1) { // 이모티콘만 보내기

                // 채팅방에 이모티콘 붙이기
                $('.collection').append(
                    $('<div>').attr('class', 'row').append(
                        $('<li>').attr('class', 'collection-item avatar my-msg').append(
                            $('<img>').attr('class', 'send_emoticon').attr('src', emoticon_src)
                        )
                    )
                );

                // 이모티콘 영역 삭제
                $('#input_area').children().last().remove();
                emoticon_mode = 0; // 이모티콘 모드 변수 초기화

                body_height = $('.phone-wrapper').height() - 46;
                $('.phone-body').css('height', body_height + 'px').css('min-height', body_height + 'px'); // phone-body 높이 맞춰주기
                $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight); //스크롤 맨 아래로

                select_emoticon = 0; //이모티콘 선택 여부 초기화

            } else if (text_input === 1 && select_emoticon === 1) { // 텍스트랑 이모티콘 함께 보내기
                // 채팅방에 텍스트  이모티콘 붙이기
                $('.collection').append(
                    $('<div>').attr('class', 'row').append(
                        $('<li>').attr('class', 'collection-item avatar my-msg2').append(
                            $('<img>').attr('class', 'send_emoticon2').attr('src', emoticon_src)
                        ),
                        $('<li>').attr('class', 'collection-item avatar my-msg2').append(
                            $('<p>').attr('class', 'msg2').text(message)
                        )
                    )
                );

                // 이모티콘 영역 삭제
                $('#input_area').children().last().remove();
                emoticon_mode = 0; // 이모티콘 모드 변수 초기화

                // 메시지 입력창 초기화
                $('#m').val('');
                text_input = 0;

                body_height = $('.phone-wrapper').height() - 46;
                $('.phone-body').css('height', body_height + 'px').css('min-height', body_height + 'px'); // phone-body 높이 맞춰주기
                $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight); //스크롤 맨 아래로

                select_emoticon = 0; //이모티콘 선택 여부 초기화

            }
        }
    }

    function showEmoticionArea() {
        $('#input_area').append(
            $('<div>').attr('id', 'emoticon_area').append(
                $('<div>').attr('class', 'carousel carousel-slider center').attr('data-indicators', 'true').append(
                    $('<div>').attr('class', 'carousel-item').attr('href', '#one!').append(
                        $('<div>').attr('id', 'emoticon_collection').append(
                            $('<div>').attr('class', 'row emoticon_row').append(
                                $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test.png'),
                                $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test1.png'),
                                $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test2.png'),
                                $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test.png')
                            ),
                            $('<div>').attr('class', 'row emoticon_row').append(
                                $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test.png'),
                                $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test.png'),
                                $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test.png'),
                                $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test.png')
                            )
                        )
                    ),
                    $('<div>').attr('class', 'carousel-item').attr('href', '#two!').append(
                        $('<h2>').text('Second Panel')

                    ),
                    $('<div>').attr('class', 'carousel-item').attr('href', '#three!').append(
                        $('<h2>').text('Third Panel')
                    )
                )
            )
        )
    }
});

//스크롤올라갔을경우에만 bottom_message띄우기
$(".phone-body").scroll( function() {
  var elem = $(".phone-body");
  var obj=document.getElementById("bottom_message");
  if ( elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight()) {
      obj.style.display="none";
    } else{
        obj.style.display="block";
    }
});
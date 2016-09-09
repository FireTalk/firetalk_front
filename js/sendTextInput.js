$(document).ready(function () {
    var login_check = 1; // 로그인 체크, 로그인: 1 아닐 경우: 0
    var input = $('#form_input');

    var emoticon_mode = 0; // 이모티콘 모드 여부 체크, 이모티콘 모드: 1 아닐 경우: 0

    var body_height = $('.phone-wrapper').height() - 46;

    // 로그인 여부 체크



    if (login_check === 1) { // -------------------------------------------------------- 로그인일 경우
        // phone-body 높이 맞춰주기
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

        // 텍스트 입력시 전송 버튼 글씨 opacity 100%로 변경
        $("#m").keyup(function () {
            var input = $(this).val();

            if (input === '') { //opacity 40%
                $('#button_submit').css('opacity', '0.4');
            } else { //opacity 100%
                $('#button_submit').css('opacity', '1.0');
            }

        });

        // 이모티콘 아이콘 눌렀을 경우
        $('#button_plus').on("click", function () {
            emoticon_mode = 1; // 이모티콘 모드

            // phone-body 높이 변경
            $('.phone-body').css('height', '60%').css('min-height', '60%');
            $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight); // 스크롤 맨 아래

            // emoticon_area 나타내주기
            $('#input_area').append(
                $('<div>').attr('id', 'emoticon_area').append(
                    $('<div>').attr('class', 'carousel carousel-slider center').attr('data-indicators', 'true').append(
                        $('<div>').attr('class', 'carousel-item').attr('href', '#one!').append(
                            $('<div>').attr('id', 'emoticon_collection').append(
                                $('<div>').attr('class', 'row emoticon_row').append(
                                    $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test.png'),
                                    $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test.png'),
                                    $('<img>').attr('class', 'col s3 emoticon').attr('src', 'images/emoticon/emoticon_test.png'),
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

            // 초기화
            $('.carousel.carousel-slider').carousel({ full_width: true });


        });

        // 전송 버튼에 이벤트 등록
        $('#button_submit').on("click", function () {
            var message = $('#m').val();
            var nowTime = getNowTime();

            if (message !== '') {
                $('.collection').addMsgList('', '', message, 20, nowTime);
            }

            // 메시지 입력창 초기화
            $('#m').val('');

            if (emoticon_mode === 1 && message !== '') {  // 이모티콘 모드일 경우
                // 이모티콘 영역 삭제
                $('#input_area').children().last().remove(); 
                emoticon_mode = 0; // 이모티콘 모드 변수 초기화

                // phone-body 높이 맞춰주기
                $('.phone-body').css('height', body_height + 'px').css('min-height', body_height + 'px');
            }

            //스크롤 맨 아래로
            $('.phone-body').scrollTop($('.phone-body')[0].scrollHeight);
        });

    } else if (login_check === 0) { // --------------------------------------------------------로그인이 아닐 경우
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
            window.location.href = "login_inner.html";
        });

    }


});
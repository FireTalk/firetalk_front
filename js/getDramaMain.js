$(document).ready(function () {
    // 메인 드라마 리스트 배열
    var first_drama = [
        { drama_title1: '질투의 화신 : ', start_time: '20분 후', broadcaster1: 'SBS', air_time1: '오후 12:00 ~ 오후 1:00', drama_bigimg: './images/drama_big.png', first_drama_like: './images/dislike.png' }
    ];

    var drama_list = [
        {drama_postimg: './images/dal_post.PNG', drama_title: '달의 연인-보보경심려', drama_like: './images/like.png', broadcaster: 'SBS', air_time: '월·화 오후 2:00~'},
        {drama_postimg: './images/monster_post.PNG', drama_title: '몬스터', drama_like: './images/dislike.png', broadcaster: 'MBC', air_time: '월·화 오후 11:00~'},
        {drama_postimg: './images/dal_post.PNG', drama_title: '달의 연인-보보경심려', drama_like: './images/like.png', broadcaster: 'SBS', air_time: '월·화 오후 2:00~'},
        {drama_postimg: './images/monster_post.PNG', drama_title: '몬스터', drama_like: './images/dislike.png', broadcaster: 'MBC', air_time: '월·화 오후 11:00~'}
    ];

    // 배열 >> 드라마 리스트로 보여주기
    // 첫번재 드라마
    $.each(first_drama, function (index, item) {
        $(function () {
            $('.collection').addFirstDrama(item.drama_title1, item.start_time, item.broadcaster1, item.air_time1, item.drama_bigimg, item.first_drama_like);
        });
    });
    
    // 나머지 드라마
    var drama_postimg_1, drama_title_1, drama_like_1, broadcaster_1, air_time_1;

    $.each(drama_list, function (index, item) {
        $(function () {
            if (index % 2 === 0){ // 첫번째
                drama_postimg_1 = item.drama_postimg;
                drama_title_1 = item.drama_title;
                drama_like_1 = item.drama_like;
                broadcaster_1 = item.broadcaster;
                air_time_1 = item.air_time;

                if ((drama_list.length-1) === index) { // 홀수개로 드라마 리스트 목록이 끝날 경우
                    $('.collection').addTheOthersDrama2(drama_postimg_1, drama_title_1, drama_like_1, broadcaster_1, air_time_1);
                }
            } else if (index % 2 === 1) { // 두번째
                $('.collection').addTheOthersDrama(drama_postimg_1, drama_title_1, drama_like_1, broadcaster_1, air_time_1, item.drama_postimg, item.drama_title, item.drama_like, item.broadcaster, item.air_time);
            }

        });
    });

    // 함수들
    // 첫번째 드라마 보여주기
    $.fn.addFirstDrama = function (drama_title1, start_time, broadcaster1, air_time1, drama_bigimg, first_drama_like) {
        this.append(
            $('<div>').attr('class', 'row').append(
                $('<div>').attr('class', 'col s12').append(
                    $('<a>').attr('href', 'drama_info.html').attr('class', 'collection-item').attr('id', 'first_drama').append(
                        $('<div>').attr('id', 'drama_title1').text(drama_title1).append(
                            $('<span>').attr('id', 'start_time').text(start_time)
                        ),
                        $('<div>').append(
                            $('<span>').attr('id', 'broadcaster1').text(broadcaster1),
                            $('<span>').attr('id', 'air_time1').text(air_time1)
                        ),
                        $('<img>').attr('class', 'drama_bigimg').attr('src', drama_bigimg).attr('alt', 'drama_post')
                    ),
                    $('<img>').attr('class', 'like_function').attr('id', 'first_drama_like').attr('src', first_drama_like).attr('alt', 'drama_like').attr('width', '14px').attr('onclike', '')
                )
            )
        )
    } //addFirstDrama_end

    // 나머지 드라마 리스트 보여주기
    // 짝수개로 드라마 리스트 목록이 끝날 경우 사용할 함수
    $.fn.addTheOthersDrama = function (drama_postimg1, drama_title1, drama_like1, broadcaster1, air_time1, drama_postimg2, drama_title2, drama_like2, broadcaster2, air_time2) {
            this.append(
                $('<div>').attr('class', 'row').append(
                    $('<div>').attr('class', 'col s6').append(
                        $('<a>').attr('href', '#!').attr('class', 'collection-item theothers_drama_first').append(
                            $('<div>').attr('class', 'theothers_first').append(
                                $('<img>').attr('class', 'drama_postimg').attr('src', drama_postimg1).attr('alt', 'drama_post'),
                                $('<div>').attr('class', 'drama_title').text(drama_title1).append(
                                    $('<span>').append(
                                        $('<img>').attr('class', 'like_function').attr('src', drama_like1).attr('alt', 'drama_like').attr('width', '14px').attr('onclike', '')
                                    )
                                ),
                                $('<div>').append(
                                    $('<span>').attr('class', 'broadcaster').text(broadcaster1),
                                    $('<span>').attr('class', 'air_time').text(air_time1)
                                )
                            )
                        )
                    ),
                    $('<div>').attr('class', 'col s6').append(
                        $('<a>').attr('href', '#!').attr('class', 'collection-item theothers_drama_second').append(
                            $('<div>').attr('class', 'theothers_second').append(
                                $('<img>').attr('class', 'drama_postimg').attr('src', drama_postimg2).attr('alt', 'drama_post'),
                                $('<div>').attr('class', 'drama_title').text(drama_title2).append(
                                    $('<span>').append(
                                        $('<img>').attr('class', 'like_function').attr('src', drama_like2).attr('alt', 'drama_like').attr('width', '14px').attr('onclike', '')
                                    )
                                ),
                                $('<div>').append(
                                    $('<span>').attr('class', 'broadcaster').text(broadcaster2),
                                    $('<span>').attr('class', 'air_time').text(air_time2)
                                )
                            )
                        )
                    )
                )
            )

    } //addTheOthersDrama_end

    // 홀수개로 드라마 리스트 목록이 끝날 경우 사용할 함수
    $.fn.addTheOthersDrama2 = function (drama_postimg1, drama_title1, drama_like1, broadcaster1, air_time1) {
            this.append(
                $('<div>').attr('class', 'row').append(
                    $('<div>').attr('class', 'col s6').append(
                        $('<a>').attr('href', '#!').attr('class', 'collection-item theothers_drama_first').append(
                            $('<div>').attr('class', 'theothers_first').append(
                                $('<img>').attr('class', 'drama_postimg').attr('src', drama_postimg1).attr('alt', 'drama_post'),
                                $('<div>').attr('class', 'drama_title').text(drama_title1).append(
                                    $('<span>').append(
                                        $('<img>').attr('class', 'like_function').attr('src', drama_like1).attr('alt', 'drama_like').attr('width', '14px').attr('onclike', '')
                                    )
                                ),
                                $('<div>').append(
                                    $('<span>').attr('class', 'broadcaster').text(broadcaster1),
                                    $('<span>').attr('class', 'air_time').text(air_time1)
                                )
                            )
                        )
                    ), 
                    $('<div>').attr('class', 'col s6')
                )
            )

    } //addTheOthersDrama2_end



})
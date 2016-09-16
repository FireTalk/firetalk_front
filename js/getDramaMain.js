$(document).ready(function () {
    // 메인 드라마 리스트 배열
    var drama_list = [
        { drama_postimg: './images/dal_post.PNG', drama_title: '달의 연인-보보경심려', drama_like: './images/like.png', broadcaster: 'SBS', air_time: '월·화 오후 2:00~' },
        { drama_postimg: './images/monster_post.PNG', drama_title: '몬스터', drama_like: './images/dislike.png', broadcaster: 'MBC', air_time: '월·화 오후 11:00~' },
        { drama_postimg: './images/w_post.PNG', drama_title: 'W (더블유)', drama_like: './images/like.png', broadcaster: 'SBS', air_time: '수·목 오후 2:00~' },
        { drama_postimg: './images/ha_post.PNG', drama_title: '함부로 애틋하게', drama_like: './images/dislike.png', broadcaster: 'KBS2', air_time: '수·목 오후 10:00~' },
        { drama_postimg: './images/jh_post.PNG', drama_title: '질투의 화신', drama_like: './images/like.png', broadcaster: 'SBS', air_time: '월·화 오후 2:00~' },
        { drama_postimg: './images/gd_post.PNG', drama_title: '구르미 그린 달빛', drama_like: './images/like.png', broadcaster: 'SBS', air_time: '월·화 오후 11:00~' }
    ];

    // 배열 >> 드라마 리스트로 보여주기

    // 나머지 드라마
    var drama_postimg_1, drama_title_1, drama_like_1, broadcaster_1, air_time_1;

    $.each(drama_list, function (index, item) {
        $(function () {
            if (index % 2 === 0) { // 첫번째
                drama_postimg_1 = item.drama_postimg;
                drama_title_1 = item.drama_title;
                drama_like_1 = item.drama_like;
                broadcaster_1 = item.broadcaster;
                air_time_1 = item.air_time;

                if ((drama_list.length - 1) === index) { // 홀수개로 드라마 리스트 목록이 끝날 경우
                    $('.collection').addTheOthersDrama2(drama_postimg_1, drama_title_1, drama_like_1, broadcaster_1, air_time_1);
                }
            } else if (index % 2 === 1) { // 두번째
                $('.collection').addTheOthersDrama(drama_postimg_1, drama_title_1, drama_like_1, broadcaster_1, air_time_1, item.drama_postimg, item.drama_title, item.drama_like, item.broadcaster, item.air_time);
            }



        });
    });

    // 함수들

    // 나머지 드라마 리스트 보여주기
    // 짝수개로 드라마 리스트 목록이 끝날 경우 사용할 함수
    $.fn.addTheOthersDrama = function (drama_postimg1, drama_title1, drama_like1, broadcaster1, air_time1, drama_postimg2, drama_title2, drama_like2, broadcaster2, air_time2) {
        this.append(
            $('<div>').attr('class', 'row').append(
                $('<div>').attr('class', 'col s6').append(
                    $('<a>').attr('href', 'drama_info.html').attr('class', 'collection-item theothers_drama_first').append(
                        $('<div>').attr('class', 'theothers_first').append(
                            $('<img>').attr('class', 'drama_postimg').attr('src', drama_postimg1).attr('alt', 'drama_post'),
                            $('<div>').attr('class', 'drama_title').text(drama_title1),
                            $('<div>').append(
                                $('<span>').attr('class', 'broadcaster').text(broadcaster1),
                                $('<span>').attr('class', 'air_time').text(air_time1)
                            )
                        )
                    ),
                    $('<span>').attr('class', 'like_positon').append(
                        $('<img>').attr('class', 'like_function').attr('src', drama_like1).attr('alt', 'drama_like').attr('width', '14px').on("click", function () {
                            changeImage(this);
                        })
                    )
                ),
                $('<div>').attr('class', 'col s6').append(
                    $('<a>').attr('href', '#!').attr('class', 'collection-item theothers_drama_second').append(
                        $('<div>').attr('class', 'theothers_second').append(
                            $('<img>').attr('class', 'drama_postimg').attr('src', drama_postimg2).attr('alt', 'drama_post'),
                            $('<div>').attr('class', 'drama_title').text(drama_title2),
                            $('<div>').append(
                                $('<span>').attr('class', 'broadcaster').text(broadcaster2),
                                $('<span>').attr('class', 'air_time').text(air_time2)
                            )
                        )
                    ),
                    $('<span>').attr('class', 'like_positon2').append(
                        $('<img>').attr('class', 'like_function').attr('src', drama_like2).attr('alt', 'drama_like').attr('width', '14px').on("click", function () {
                            changeImage(this);
                        })
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
                            $('<div>').attr('class', 'drama_title').text(drama_title1),
                            $('<div>').append(
                                $('<span>').attr('class', 'broadcaster').text(broadcaster1),
                                $('<span>').attr('class', 'air_time').text(air_time1)
                            )
                        )
                    ),
                    $('<span>').attr('class', 'like_positon').append(
                        $('<img>').attr('class', 'like_function').attr('src', drama_like1).attr('alt', 'drama_like').attr('width', '14px').on("click", function () {
                            changeImage(this);
                        })
                    )
                ),
                $('<div>').attr('class', 'col s6')
            )
        )

    } //addTheOthersDrama2_end



})
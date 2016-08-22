$(document).ready(function() {
    
    // 드라마 리스트 배열
    var drama_list= [
        {broadcaster: 'mbc', d_title: '그녀는 예뻤다:최종화', air_time: '오후 12:00 ~ 오후 1:00', par_num: '9'},
        {broadcaster: 'jtbc', d_title: '치즈인더트랩', air_time: '오후 12:00 ~ 오후 1:00', par_num: '4'}
    ];

    // 배열>>드라마 리스트 보여주기
    $.each(drama_list, function(index, item){
        $(function(){
            $('.collection').addDramaList(item.broadcaster, item.d_title, item.air_time, item.par_num);
        });
    });

    // 드라마 리스트 아이템 add해주는 함수
    $.fn.addDramaList = function(broadcaster, d_title, air_time, par_num) {
        this.append(
            $('<a>').attr('href','chatroom.html').attr('class','collection-item').append(
                $('<div>').attr('class','row drama').append(
                    $('<div>').attr('class','col s3').append(
                        $('<img>').attr('src','images/'+broadcaster+'.png').attr('class','circle')
                    ),
                    $('<div>').attr('class','col s7').append(
                        $('<div>').attr('class','row drama_title').text(d_title),
                        $('<div>').attr('class','drama_time').text(air_time)
                    ),
                    $('<div>').attr('class','col s2').append(
                        $('<span>').attr('class','badge').append(
                            $('<img>').attr('src','images/1.png').attr('width','40px')
                        ),
                        $('<span>').attr('class','badge parNum').text(par_num)
                    )
                )
            )
        );
    }
})
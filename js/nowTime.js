// 현재 시간을 얻어주는 함수
function getNowTime() {
    var now = new Date();
    var nowTime;

    if (now.getHours() > 12) {
        nowTime = "오후 " + (now.getHours() - 12) + ":" + now.getMinutes();
    } else if (now.getHours() === 12) {
        nowTime = "오후 " + now.getHours() + ":" + now.getMinutes();
    } else {
        nowTime = "오전 " + now.getHours() + ":" + now.getMinutes();
    }

    //alert(nowTime);
    return nowTime;
}
// 첫번째 드라마 즐겨찾기 이미지
var img_like1 = new Image();
img_like1.src = "./images/like.png";
var img_dislike1 = new Image();
img_dislike1.src = "./images/dislike.png";

/*
// 나머지 드라마 즐겨찾기 이미지
var img_like2 = new Image();
img_like2.src = "./images/like2@3x.png";
var img_dislike2 = new Image();
img_dislike2.src = "./images/dislike2@3x.png";
*/

//즐겨찾기 이미지 변경
function changeImage(image) {
    //alert(document.images[2].src.replace(/^.*\//, ''));

    if (image.src.replace(/^.*\//, '') === 'like.png') {
        image.src = img_dislike1.src;
    } else if (image.src.replace(/^.*\//, '') === 'dislike.png') {
        image.src = img_like1.src;
    }
}

function changeTextOnOff(image) {
    var on_off = document.getElementById("onoff");

    if (on_off.innerText === "ON") {
        on_off.innerText = "OFF";
    } else if (on_off.innerText === "OFF") {
        on_off.innerText = "ON";
    }
}

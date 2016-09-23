// 첫번째 드라마 즐겨찾기 이미지
var img_like1 = new Image();
img_like1.src = "./images/like.png";
var img_like2 = new Image();
img_like2.src = "./images/like2.png";
var img_dislike1 = new Image();
img_dislike1.src = "./images/dislike.png";
var img_like3 = new Image();
img_like3.src = "./images/like3.png";
var img_dislike3 = new Image();
img_dislike3.src = "./images/dislike3.png";

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

function changeImage2(image) { // 잠긴 채팅방 좋아요 이미지 변경 
    if (image.src.replace(/^.*\//, '') === 'like2.png') {
        image.src = img_dislike1.src;
    } else if (image.src.replace(/^.*\//, '') === 'dislike.png') {
        image.src = img_like2.src;
    }
}

function changeImage3(image) { // dramainfo 좋아요 이미지 변경 
    if (image.src.replace(/^.*\//, '') === 'like3.png') {
        image.src = img_dislike3.src;
    } else if (image.src.replace(/^.*\//, '') === 'dislike3.png') {
        image.src = img_like3.src;
    }
}

function changeTextOnOff(image) {
    var on_off = document.getElementById("onoff");

    if (on_off.innerText === "ON") {
        on_off.innerText = "OFF";
        $('.send_emoticon').hide();
        $('.emoticon_chat').hide();
        $('.other_send_emoticon2').hide();
        $('li.collection-item.avatar.other-msg-emoticon').css('height','0px').css('min-height','0px');
        $('.collection .collection-item.avatar').css('padding-top', '0px').css('margin-top', '10px');

    } else if (on_off.innerText === "OFF") {
        on_off.innerText = "ON";
        $('.send_emoticon').show();
        $('.emoticon_chat').show();
        $('.other_send_emoticon2').show();
        $('li.collection-item.avatar.other-msg-emoticon').css('height','120px');
        $('.collection .collection-item.avatar').css('padding-top', '10px').css('margin-top', '0px');
    }
}

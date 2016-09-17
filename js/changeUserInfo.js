$(document).ready(function () {

    $('#select_img').on('change', function (e) {
        var select_img = this.value;

        var select_img_chk = select_img.slice(select_img.indexOf(".") + 1).toLowerCase(); //파일 확장자를 잘라내고, 비교를 위해 소문자로 만듭니다.

        if (select_img_chk != "jpg" && select_img_chk != "png" && select_img_chk != "gif" && select_img_chk != "bmp") { //확장자를 확인합니다.
            alert('프로필은 이미지 파일(jpg, png, gif, bmp)만 등록 가능합니다.');
            return;
        } else { // 이미지 파일일 경우
            // 프로필 이미지 변경
            readURL(this);
        }
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader(); //파일을 읽기 위한 FileReader객체 생성 
            reader.onload = function (e) {
                //파일 읽어들이기를 성공했을때 호출되는 이벤트 핸들러 
                
                //이미지 잘라서 넣기
                var img = new Image();
                img.src = e.target.result;

                //alert(img.width);
                //alert(img.height);
                var width = img.width;
                var height = img.height;
                var center_w = width / 2;
                var center_h = height / 2;

                var min_legth;

                if (width <= height) {
                    min_legth = img.width;
                } else {
                    min_legth = img.height;
                }

                var crop_canvas,
                    crop_left = center_w - min_legth / 2,
                    crop_top = center_h - min_legth / 2,
                    crop_width = min_legth,
                    crop_heigth = min_legth;

                crop_canvas = document.createElement('canvas');
                crop_canvas.width = crop_width;
                crop_canvas.height = crop_heigth;

                $('#profile_img').attr('src', e.target.result);

                var image_target = $('#profile_img').get(0);

                crop_canvas.getContext('2d').drawImage(image_target, crop_left, crop_top, crop_width, crop_heigth, 0, 0, crop_width, crop_heigth);

                $('#profile_img').attr('src', crop_canvas.toDataURL("image/png")); // 자른 이미지로 설정하기

            }
            reader.readAsDataURL(input.files[0]);
            
        }
    }//--readURL()

    $('#change_nickname').on("click", function(e) {
        var nickname_readOnly = document.getElementById('nickname').readOnly
        
        if (nickname_readOnly === true){
            document.getElementById('nickname').readOnly = false;
        } else if (nickname_readOnly === false) {
            document.getElementById('nickname').readOnly  = true;
        }
        
    });

});
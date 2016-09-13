function idPwdCheck() {
    var email = document.getElementById("input_email").value;
    var password = document.getElementById("input_password").value;
    var nick = document.getElementById("input_nick").value;
    var pwCheck = document.getElementById("input_pwCheck").value;

    if (!email) { // 이메일 입력 여부 파악
        alert("이메일을 입력해주세요.");
        return false;
    } 
     // 이메일 유효성 검사
        //이메일
       else if (! /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(email)) {
            alert("이메일을 형식에 맞게 입력해주세요.");
            return false;
        }
    
    
    
    else if (!nick) { // 닉네임 입력 여부 파악
        alert("닉네임을 입력해주세요.");
        return false;
    } else if (!password) { // 비밀번호 입력 여부 파악
        alert("비밀번호를 입력해주세요.");
        return false;
    } else if (!password) { // 비밀번호 입력 여부 파악
        alert("비밀번호를 입력해주세요.");
        return false;
    } 
     // 비밀번호 유효성 검사
        // 길이
        else if (!/^[a-zA-Z0-9]{4,6}$/.test(password)) {
            alert("비밀번호는 영문, 숫자 조합으로 4~6자리를 사용해야 합니다.");
            return false;
        }

        // 영문, 숫자 혼용
        var check = 0;
        if (password.search(/[0-9]/g) != -1) check++;
        if (password.search(/[a-z]/ig) != -1) check++;
        if (password.search(/[!@#$%^&*()?_~]/g) != -1) check--;
        if (check < 2) {
            alert("비밀번호는 특수문자를 제외한 영문, 숫자를 혼용하여야 합니다.");
            return false;
        }


        else if (!pwCheck) { // 비밀번호확인 입력 여부 파악
            alert("비밀번호를 다시 한 번 입력해주세요.");
            return false;
    } 
    
    alert("성공");
}


function checkEndInput() {
    var email = document.getElementById("input_email").value;
    var nick = document.getElementById("input_nick").value;
    var password = document.getElementById("input_password").value;
    var pwCheck = document.getElementById("input_pwCheck").value;
    var btn_login = document.getElementById("button_join");

    if (!email && ! password && ! nick && ! pwCheck) {
        // email과 password 모두 입력 되지 않음
    }
    else {
        // 입력되었을 경우 이메일 입력되어 있고 비밀번호 수가 단순히 4자 이상인 것을 기준으로 변화
        if (password.length >= 4 && pwCheck.length >= 4 && email != "" && nick != "") {
            btn_login.style.backgroundColor = "black";
            btn_login.style.color = "white";
        } else {
            btn_login.style.backgroundColor = "white";
            btn_login.style.color = "#252525";
        }
    }
}
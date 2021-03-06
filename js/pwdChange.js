function idPwdCheck() {
    var id = document.getElementById("input_id").value;
    var pwCheck = document.getElementById("input_pwCheck").value;

    if (!id) { // 이메일 입력 여부 파악
        alert("이메일을 입력해주세요.");
        return false;
    } 
     // 이메일 유효성 검사
        //이메일
       else if (! /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(id)) {
            alert("이메일을 형식에 맞게 입력해주세요.");
            return false;
        }
    
    
     else if (!password) { // 비밀번호 입력 여부 파악
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
    var id = document.getElementById("input_id").value;
    var password = document.getElementById("input_password").value;
    var pwCheck = document.getElementById("input_pwCheck").value;
    var btn_change = document.getElementById("button_change");

    if (!id && ! password && ! pwCheck) {
        // id와 password 모두 입력 되지 않음
    }
    else {
        // 입력되었을 경우 이메일 입력되어 있고 비밀번호 수가 단순히 4자 이상인 것을 기준으로 변화
        if (password.length >= 4 && pwCheck.length >= 4 && id != "") {
            btn_change.style.backgroundColor = "black";
            btn_change.style.color = "white";
        } else {
            btn_change.style.backgroundColor = "white";
            btn_change.style.color = "#252525";
        }
    }
}
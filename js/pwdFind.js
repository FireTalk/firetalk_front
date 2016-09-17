function idPwdCheck() {
    var id = document.getElementById("input_id").value;
    var btn_change = document.getElementById("button_change");

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
    
    alert("성공");
}


function checkEndInput() {
    var id = document.getElementById("input_id").value;
    var btn_change = document.getElementById("button_change");

    if (! /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(id)) {
        btn_change.style.backgroundColor = "white";
            btn_change.style.color = "#252525";
    }
    else {
            btn_change.style.backgroundColor = "black";
            btn_change.style.color = "white";
    }
}
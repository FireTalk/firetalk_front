function duplicationCheck() {
    var nick = document.getElementById("input_nick").value;
    var duplication = document.getElementById("duplication");
    /*
    var exist = ["nick1", "nick2", "nick3"];

    for (var i = 0; i < exist.length; i++)
    {
        if (nick == exist[i]) {
            duplication.style.color = "green";
            duplication.style.display = "block";
        }
        else {
            duplication.style.display = "none";
        }
    }
    */ //비교하는거 모르겠...
    
    if (nick.length >= 1) {
        duplication.style.color = "green";
        duplication.style.display = "block";
    }
    else {
        duplication.style.display = "none";
    }
}


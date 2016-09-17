function duplicationCheck() {
    var nick = document.getElementById("input_nick").value;
    var duplication = document.getElementById("duplication");

    if (nick.length >= 1) {
        duplication.style.color = "green";
        duplication.style.display = "block";
    }
    else {
        duplication.style.display = "none";
    }
}


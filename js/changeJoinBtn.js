var btn_position = $('#button_signup').parent();
var btn_signup = $('#button_signup');

btn_signup.click( function() {
    btn_signup.remove();
    
    btn_position.append(
        $('<a>').attr('class','waves-effect waves-light btn-large').attr('id','button_signup_facebook').attr('href','#!').text('페이스북'),
        $('<a>').attr('class','waves-effect waves-light btn-large').attr('id','button_signup_email').attr('href','#!').text('이메일 인증')
    )
});

$(document).ready(function () {
    $('#loginForm').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const email = $('#email').val();
        const password = $('#password').val();

        $.post('/login', { email: email, password: password }, function (data) {
            if (data.valid) {
                window.location.href = '/accounts';
            } else {
                $('#errormsg').removeClass('hidemessage').addClass('showmessage');
            }
        });
    });
});

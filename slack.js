$(function () {
    // set user info in top right
    if (slack.authed) {
        $('#username').html(userInfo.display_name);
        $('#house').html(userInfo.type + ' @ ' + userInfo.house);
        $('#avatar > img').attr('src', userInfo.avatar);

        $('#loggedInDisplay').show();
    }
});

// todo logout button
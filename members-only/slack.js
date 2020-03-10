$(function () {
    // set user info in top right
    if (slack.authed) {
        $('#username').html(userInfo.display_name);
        $('#house').html((userInfo.boarder ? 'Boarder' : 'Resident') + ' @ ' + userInfo.house); // todo fix boarder
        $('#avatar > img').attr('src', userInfo.avatar);

        $('#loggedInDisplay').show();
    }
});
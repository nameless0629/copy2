document.addEventListener('DOMContentLoaded', function() {
    var languageSelect = document.querySelector('#info-box select');
    var usernameInput = document.querySelector('#username-input');
    var passwordInput = document.querySelector('#password-input');
    var loginButton = document.querySelector('#login');
    var cookieInfoElement = document.querySelector('#cookie-info');

    languageSelect.addEventListener('change', function() {
        if (this.value === '正體中文 (zh_tw)') {
            usernameInput.placeholder = '帳號';
            passwordInput.placeholder = '密碼';
            loginButton.textContent = '登入';
            cookieInfoElement.textContent = '\u2753 Cookie使用資訊';
        } else if (this.value === 'English (en)') {
            usernameInput.placeholder = 'Account';
            passwordInput.placeholder = 'Password';
            loginButton.textContent = 'Log in';
            cookieInfoElement.textContent = '\u2753 Cookie notice';
        }
    });

    cookieInfoElement.addEventListener('click', function() {
        var title, html;
        if (languageSelect.value === '正體中文 (zh_tw)') {
            title = '您的瀏覽器必須啟動 Cookies 功能';
            html = '本站使用了兩個cookie： 必要的是連線cookie，通常叫做 MoodleSession。您必須在瀏覽器裡允許這個cookie，以便使您的登入在頁與頁之間連續有效。當您登離或關閉瀏覽器，這個cookie在瀏覽器和伺服器裡都會被刪除。 另一個cookie純粹是為了方便，通常被叫做類似 MOODLEID 之類的名字。它只用來在瀏覽器裡記住您的用戶名。這意味著當您再次回到本站，登入頁面裡的用戶名已經替您填好了。拒絕此cookie是安全的，只不過每次登入都要重新輸入用戶名而已。';
        } else if (languageSelect.value === 'English (en)') {
            title = 'Cookies must be enabled in your browser';
            html = 'Two cookies are used on this site: The essential one is the session cookie, usually called MoodleSession. You must allow this cookie in your browser to provide continuity and to remain logged in when browsing the site. When you log out or close the browser, this cookie is destroyed (in your browser and on the server). The other cookie is purely for convenience, usually called MOODLEID or similar. It just remembers your username in the browser. This means that when you return to this site, the username field on the login page is already filled in for you. It is safe to refuse this cookie - you will just have to retype your username each time you log in.';
        }

        Swal.fire({
            title: '<strong style="font-size: 1.5em;">' + title + '</strong>',
            html: html,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: 'OK',
        });
    });
});
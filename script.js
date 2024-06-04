document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.querySelector('#info-box select');
    var usernameInput = document.querySelector('#username-input');
    var passwordInput = document.querySelector('#password-input');

    selectElement.addEventListener('change', function() {
        if (this.value === '正體中文 (zh_tw)') {
            usernameInput.placeholder = '帳號';
            passwordInput.placeholder = '密碼';
        } else if (this.value === 'English (en)') {
            usernameInput.placeholder = 'Account';
            passwordInput.placeholder = 'Password';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var cookieInfoElement = document.querySelector('#cookie-info');

    cookieInfoElement.addEventListener('click', function() {
        alert("您的瀏覽器必須啟動 Cookies 功能\n\n本站使用了兩個cookie： 必要的是連線cookie，通常叫做 MoodleSession。您必須在瀏覽器裡允許這個cookie，以便使您的登入在頁與頁之間連續有效。當您登離或關閉瀏覽器，這個cookie在瀏覽器和伺服器裡都會被刪除。 另一個cookie純粹是為了方便，通常被叫做類似 MOODLEID 之類的名字。它只用來在瀏覽器裡記住您的用戶名。這意味著當您再次回到本站，登入頁面裡的用戶名已經替您填好了。拒絕此cookie是安全的，只不過每次登入都要重新輸入用戶名而已。");
    });
});
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const welcomeText = document.querySelector("#welcome");

const HIDDEN_CLASSNAME = "hidden";  // 상수
const USERNAME_KEY = "username" // 문자열은 오류가 나도 알아차리기 어려우므로 변수로 대체

function LoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value; // 동적으로 바뀌는 데이터
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    welcome(username);
}

function welcome(username) {
    welcomeText.innerText = `Hello ${username} :)`;
    welcomeText.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    welcome(savedUsername);
}

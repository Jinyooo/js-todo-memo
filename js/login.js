const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const memoFormShow = document.querySelector("#memo-form"); 

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;

    greeting.innerHTML = "반갑습니다 " +username+ "님";

    loginForm.classList.add("hidden");  // 이거 외않되
    memoFormShow.classList.remove("hidden");

}

loginForm.addEventListener("submit", onLoginSubmit);
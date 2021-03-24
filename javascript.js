const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "project" && password === "robot") {
        alert("You have successfully logged in.");
        location.replace("https://605b51bf36fdd.htmlsave.net/")
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
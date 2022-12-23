const logIn = document.getElementById("log-in");
const password = document.getElementById("password");
const email = document.getElementById("email");

logIn.addEventListener("input", () => {
    let nameValue = logIn.value;

    let regex = new RegExp("^[^0-9][a-z0-9_-]{3,}$")

    if(!regex.test(nameValue)) {
        logIn.nextElementSibling.textContent = 'Incorrect Log-In!'
    } else {
        logIn.nextElementSibling.textContent = ''
    }
});

password.addEventListener("input", () => {
    let nameValue = password.value;

    let regex = new RegExp("^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,50}$")

    if(!regex.test(nameValue)) {
        password.nextElementSibling.textContent = 'Incorrect Password!'
    } else {
        password.nextElementSibling.textContent = ''
    }
});

email.addEventListener("input", () => {
    let nameValue = email.value;

    let regex = new RegExp("^[a-zA-Z0-9._]{3,}@[a-z]{3,10}\.[a-z]{2,3}$")

    if(!regex.test(nameValue)) {
        email.nextElementSibling.textContent = 'Incorrect eMail!'
    } else {
        email.nextElementSibling.textContent = ''
    }
})
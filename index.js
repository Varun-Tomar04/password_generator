const pw_x = document.getElementById("p");
const copy_x = document.getElementById("copy");
const len_x = document.getElementById("length");
const upper_x = document.getElementById("upper");
const lower_x = document.getElementById("lower");
const number_x = document.getElementById("number");
const symbol_x = document.getElementById("symbols");
const generate_x = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function Make_pass() {
    const len = len_x.value;

    let password = "";

    if (upper_x.checked) {
        password += getUppercase();
    }

    if (lower_x.checked) {
        password += getLowercase();
    }

    if (number_x.checked) {
        password += getNumber();
    }

    if (symbol_x.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generate_pass();
        password += x;
    }

    pw_x.innerText = password;
}

function generate_pass() {
    const xs = [];
    if (upper_x.checked) {
        xs.push(getUppercase());
    }

    if (lower_x.checked) {
        xs.push(getLowercase());
    }

    if (number_x.checked) {
        xs.push(getNumber());
    }

    if (symbol_x.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generate_x.addEventListener("click", Make_pass);

copy_x.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pw_x.innerText;

    if (!password) {
        return;
    }

    if (password==="Select options and generate") {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password has been copied to clipboard");
});
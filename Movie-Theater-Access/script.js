const inputage = document.querySelector("#age");
const btn = document.querySelector("#btn");
const box = document.querySelector("#box");
const result = document.querySelector("#result");

btn.onclick = function () {

    const age = Number(inputage.value);
    const hasTicket = box.checked;

    if (age >= 18 && hasTicket) {
        result.textContent = "Welcome to the movie!";
    }
    else if (age < 18 && !hasTicket) {
        result.textContent = "You are too young and you don't have a ticket.";
    }
    else if (age < 18) {
        result.textContent = "You are too young.";
    }
    else if (!hasTicket) {
        result.textContent = "You need a ticket.";
    }
    else {
        result.textContent = "Access Denied!";
    }

}
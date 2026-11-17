const btn = document.querySelector("#btn")
const result = document.querySelector("#result")

btn.onclick = function(){

    let number = ""
    let attempt = 0

    while(number !== 2){
        number = Number(prompt("please Guess the number"))
        attempt++
    }

    result.textContent = "congratulations you found the secret number. Attempts: " + attempt

};
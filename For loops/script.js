const inputage = document.getElementById("number")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
btn.onclick = function(){
    //boucle for for//
result.textContent = "";

    for (let number = 1; number <= 10; number++) {
        result.textContent += number + " ";
    }
}

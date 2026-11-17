const btn = document.getElementById("btn")
const result = document.getElementById("result")
btn.onclick = function(){
    //boucle for while//
let password = "";

while (password !== "1234") {
    password = prompt("Enter password");
}
result.textContent = "Bravo tu as trouvé le mot de passe 🎉";
}
let numberinput = document.querySelector("#number")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
// verifier si le bouton marche//
btn.onclick = function(){
let inputnumber = number.value
//lire le input value=nombre que tu tapes//
//le boucle 
let texte = "" //feuille vide pour stocker,ecrire les trucs//
for (let i = 1; i <= 10; i++) {
    texte += inputnumber + "X" + i + "=" + (inputnumber * i) + "<br>";
    result.innerHTML = texte; // afficher UNE seule fois
}
//
}

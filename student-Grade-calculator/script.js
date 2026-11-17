//recuperer les elements html//
const nameInput = document.getElementById("name")
const scoreInput = document.getElementById("score")
const subjectInput = document.getElementById("subject")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
//Attendre le clic//

btn.onclick = function(){
//Lire les valeurs//
const name = nameInput.value;
const subject = subjectInput.value;
let score = Number(scoreInput.value);
// Variables qui vont changer
    let grade;
    let status;
//Vérifier le score//
if (score < 0|| score > 100){
    result.textContent = "Invalid Score";
        return; 
}
// Déterminer la note//
if (score >= 80){
    grade = "A"
}
else if(score >= 70){
    grade = "B"
}

    else if (score >= 60) {
        grade = "C";
    }
    else if (score >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    // Pass ou Fail//
    // Pass ou Fail
    if (score >= 50) {
        status = "Pass";
    }
    else {
        status = "Fail";
    }
// Afficher le résultat
    result.innerHTML = `
        Student: ${name}<br>
        Subject: ${subject}<br>
        Score: ${score}<br>
        Grade: ${grade}<br>
        Status: ${status}
    `;

    // Vider les champs
    nameInput.value = "";
    subjectInput.value = "";
    scoreInput.value = "";
};




    


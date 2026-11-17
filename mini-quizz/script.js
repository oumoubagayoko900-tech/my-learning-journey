const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.onclick = function(){

    result.textContent = "Quiz started";
//arrray = liste des questions //
    let questions = [
        "Mali independence",
        "Mali president",
        "capital city of Mali"
    ];
//answer array//
    let answers = [
        "1960",
        "Assimi",
        "Bamako"
    ];
//afficher score//
    let score = 0;
    ////parcourure le tableaau//

    for (let i = 0; i < questions.length; i++) {

        let reponse = prompt(questions[i]);

        // comparaison//
        if (reponse === answers[i]) {
            score++;
        }
// while pour gérer les réponses vides insiter tant que ..//
    
        while (reponse === "") {
            reponse = prompt("Please enter an answer");
        }


    }

    // 👉 SCORE FINAL ICI (après la boucle)
    result.textContent = "Tu as obtenu " + score + " / " + questions.length;
    


  }


const inputnumber = document.getElementById("number")
const btn = document.getElementById("btn")
const Guess = document.getElementById("Guess")
btn.onclick = function(){
    let number = Number(inputnumber.value)
    if(number === 7 ){
        Guess.textContent = "Win" ;
   } else if (number > 7){
    Guess.textContent ="Big" ;

    }
    else{
            Guess.textContent ="Small" ;

    }

};
let output = "";

for (let number = 1; number <= 7; number++) {
    output += number + "<br>";
    
}


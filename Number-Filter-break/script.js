const btn = document. querySelector("#btn")
const result = document. querySelector("#result")

btn.onclick = function(){
    result.innerHTML = "";
    for (let number = 1;  number <=20 ; number++){
        if (number === 15 ){
        break;

     }
      result.innerHTML += number + "<br>";

    }
}
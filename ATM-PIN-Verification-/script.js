const btn = document.querySelector("#btn")
const result = document.querySelector("#result")

btn.onclick = function(){
    let PIN = ""
    let attempt = 0
    do{
        PIN = prompt("Please Enter The PIN")
    
    attempt++
    }
    while(PIN!== "0011")
result.textContent = "Access Granted!attempt."+attempt


}
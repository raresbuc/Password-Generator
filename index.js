const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pw1 = document.getElementById("pw1")
const pw2 = document.getElementById("pw2")


function generate() {
    let rand1 = Math.floor(Math.random() * characters.length)
    let rand2 = Math.floor(Math.random() * characters.length)
     pw1.textContent += characters[rand1]
     pw2.textContent += characters[rand2]
}


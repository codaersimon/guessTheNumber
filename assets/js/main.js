function letsGo(){
    document.getElementById("intro").style.display = "none";
}

console.log("--- Guess The Number ---");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let check1 = document.getElementById("radio4");
let check2 = document.getElementById("radio5");
let check3 = document.getElementById("radio6");
let check4 = document.getElementById("radioCustom");
let input = document.getElementById("customNumber");

let rounds

function InputNum(){
    if (check1.checked){
        input.style.display = "none";
        rounds = 4
    } else if(check2.checked){
        input.style.display = "none"
        rounds = 5
    } else if(check3.checked){
        input.style.display = "none"
        rounds = 6
    } else if(check4.checked){
        input.style.display = "block"
        rounds = Number(input.value);
    }
    console.log(rounds)
};

// function guessMe(){

// }


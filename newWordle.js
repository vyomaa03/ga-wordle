let testWord = ["g", "r","e", "e", "n"]
let button = document.getElementById("Submit");
let elements = document.querySelector("input");
let row = document.querySelectorAll(".row1");
let greenLetters = []
let checkLetters = []
let checkLetters2 = []
let rowCounter = 1;
let greenCounter = 0;

button.addEventListener('click', function() {
    let letter = elements.value.split('');
    console.log(letter)
for (let i = 0; i < letter.length; i++) {
    console.log(i)
    // can replace with a for (i in array) loop
    // Make your guess and answer capitalised (no matter user input can compare to answer)
    let capsGuess = []
    capsGuess[i] = letter[i].toUpperCase()

    row[i].textContent = letter[i]
    
    let capsTestWord = []; 
    capsTestWord[i] = testWord[i].toUpperCase()

    // letter[i] = greenLetters[i] //This doesnt make sense, youre trying to make each of the entries in letter (your guess) equal to nothing​
    console.log(capsTestWord[i])
    if(capsGuess[i] == capsTestWord[i]) {
        console.log("match")
        row[i].classList.add("green");
        checkLetters[i] = "" 
        checkLetters2[i] = "" 
        // create a counter that counts the number of greens
        greenCounter++
        console.log(greenCounter)

    } else {
        checkLetters[i] = capsGuess[i] 
        checkLetters2[i] = capsTestWord[i] 
    }
}

console.log(greenCounter)
    if (greenCounter == 5){
        console.log("done")
    }else{
        greenCounter = 1;
    }
 for (i in checkLetters) {
     if(checkLetters[i] == "") {
         continue
     } else if (checkLetters2.includes(checkLetters[i])) {
         row[i].classList.add("yellow") 
     } else {
         row[i].classList.add("black")
     }
 }
rowCounter++
console.log(rowCounter);
let newRow = ("row" + rowCounter)
row = document.querySelectorAll("." + newRow);
console.log(row)
if (greenCounter == 5){
    
}
if (rowCounter >= 6 && greenCounter < 5){
    prompt("You did not guess " + testWord + " in time.")
} 
// I need to make sure that this whole function stops when the number of rows
//reaches 6 but idk if putting a if loop is the best solution. 
}) 

if (rowCounter > 6 && greenCounter < 6){
    console.log("You did not guess " + testWord + " in time.")
} 



}) 

/* okay so now I need the code to stop at 2 instances
1. Where the number of greens has become 5 regardless of the number of rows
that have been used

2. where the number of greens has not turned 5 and the number of rows has 
turned 6. 

*/
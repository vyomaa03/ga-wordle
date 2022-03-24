let testWord = ["g", "r","e", "e", "n"]
let button = document.getElementById("Submit");
let elements = document.querySelector("input");
let row = document.querySelectorAll(".row1");
let greenLetters = []
let checkLetters = []
let checkLetters2 = []
let rowCounter = 1;

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
    
    let capsTestWord = []; //need to make new array since testWord is immutable so cant make it capital 
    capsTestWord[i] = testWord[i].toUpperCase()

    // letter[i] = greenLetters[i] //This doesnt make sense, youre trying to make each of the entries in letter (your guess) equal to nothing​
    console.log(capsTestWord[i])
    if(capsGuess[i] == capsTestWord[i]) {
        console.log("match")
        row[i].classList.add("green"); //This changes the class, you dont have a class .green in style.css (I've now added)
        checkLetters[i] = "" //I'd personally put these empty arrays within the for loop I can see this leading to issues when you go to the next row as checkLetters is currently a global variable and will have entries in the next for loop... 
        checkLetters2[i] = "" // dont use " " as then its a space, may cause issues..
    } else {
        checkLetters[i] = capsGuess[i] //changed greenLetters to capsGuess because it makes better sense name wise, you can use greenLetters, but your greenLetters was blank... so it wouldnt do anything. I assumed what you were going for was to use the guessed word.
        checkLetters2[i] = capsTestWord[i] //changed to capsTestWord to keep consistent and avoid issues with upperCase/lowerCase
    }
    
}
 for (i in checkLetters) {
     if(checkLetters[i] == "") {
         continue
     } else if (checkLetters2.includes(checkLetters[i])) {
         row[i].classList.add("yellow") //same as above need these classes in style.css else it wont do anything
     } else {
         row[i].classList.add("black")
     }
 }
rowCounter++
console.log(rowCounter);
let newRow = ("row" + rowCounter)
row = document.querySelectorAll("." + newRow);
console.log(row)

}) 
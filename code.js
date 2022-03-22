let button = document.getElementById("Submit");
let elements = document.querySelector("input");

// all of the rows of the grid
let row = document.querySelectorAll(".row1");

let rowB = document.querySelectorAll(".row3");
let rowC = document.querySelectorAll(".row4");
let rowD = document.querySelectorAll(".row5");
let rowE = document.querySelectorAll(".row6");

let word = ["h","e","l","l","o"] // test word
// array to put the letters that have been guessed
let greenWords = []
let checkWords = []
let yellowWords = []
button.addEventListener("click", function(){
    console.log(elements.value)
    let letters = elements.value.split('');
// this loop checks each letter in the input to the boxes
    for( let i=0; i< letters.length; i++){
        row[i].textContent = letters[i]
        if (row[i].textContent == word[i]){
            console.log("match")
// adding the colors to the background
            row[i].classList.add("green");
            greenWords.push(row[i].value);
            console.log(greenWords.value); // making sure that these blocks habe been added to this array 
        } 
        
        else {
            row[i].classList.add("black")
            checkWords.push(row[i].value);
            console.log(checkWords.value); // making this array so that there is a way to check if they are just letters that exist elsewhere int he word
        }
    }
})
// check if there is a change in the input and then have it run the second function.    




// check if there is a change in the input and then have it run the second function.    
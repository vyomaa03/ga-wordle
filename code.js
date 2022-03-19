let button = document.getElementById("Submit");
let elements = document.querySelector("input");
let row = document.querySelectorAll(".row1");

button.addEventListener("click", function(){
    console.log(elements.value)
    let letters = elements.value.split('') ;
    console.log(letters)
    console.log(row)
    for(let i=0; i< letters.length; i++){
        row[i].textContent = letters[i]
        console.log(row[i])
        
    }
})


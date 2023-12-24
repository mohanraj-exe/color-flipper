const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector("#btn");

function getRandomColor(){
    return Math.floor(Math.random() * hex.length)
}

button.addEventListener("click", function(){
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomColor()];
    }
    document.body.style.backgroundColor = hexColor
    document.querySelector(".color").innerHTML = hexColor;
});
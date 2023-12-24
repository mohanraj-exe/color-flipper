const colors = ["crimson", "pink", "#FFF685", "skyblue", "#004987"];
const button = document.querySelector("#btn");

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}

button.addEventListener("click", function(){
   const outputColor = document.body.style.backgroundColor = colors[getRandomColor()];
   document.querySelector(".color").innerHTML = outputColor;
});
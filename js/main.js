const colorsOrder = [];
const start = document.getElementById("play");


start.addEventListener("click", function() {
    addRandomColor();
})

function addRandomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    const randomColor = colors[Math.floor(Math.random()*3)];
    colorsOrder.push(randomColor);
}
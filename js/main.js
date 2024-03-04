let colorsOrder = [];
let highscore = document.getElementById("high-score");
let level = document.getElementById("level");
let highscoreNumber = 0;
let levelNumber = 1;
const start = document.getElementById("play");
const greenTile = document.querySelector(".tile.green.inactive");
const redTile = document.querySelector(".tile.red.inactive");
const blueTile = document.querySelector(".tile.blue.inactive");
const yellowTile = document.querySelector(".tile.yellow.inactive");


start.addEventListener("click", function() {
    level.innerHTML = levelNumber.toString();
    addRandomColor();
    changeColorOpacity()
    getSound();
});

const element = document.querySelector(".board");
element.classList.remove("unclickable");

greenTile.addEventListener("click", function() {
    handleTileClick("green");
});

redTile.addEventListener("click", function() {
    handleTileClick("red");
});

blueTile.addEventListener("click", function() {
    handleTileClick("blue");
});

yellowTile.addEventListener("click", function() {
    handleTileClick("yellow");
});

function addRandomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    const randomColor = colors[Math.floor(Math.random()*4)];
    colorsOrder.push(randomColor);
    
};

function changeColorOpacity(color) {
    if (color == "green"){
        greenTile.style.opacity = 1;
        setTimeout(() => {
            greenTile.style.opacity = 0.35;
        }, 1000);
    } else if (color == "red"){
        redTile.style.opacity = 1;
        setTimeout(() => {
            redTile.style.opacity = 0.35;
        }, 1000);
    } else if (color == "blue"){
        blueTile.style.opacity = 1;
        setTimeout(() => {
            blueTile.style.opacity = 0.35;
        }, 1000);
    } else if (color == "yellow"){
        yellowTile.style.opacity = 1;
        setTimeout(() => {
            yellowTile.style.opacity = 0.35;
        }, 1000);
    };
};

function getSound() {

};

function handleTileClick(clickedColor) {

}
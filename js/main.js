let colorsOrder = [];
let highscore = document.getElementById("high-score");
let level = document.getElementById("level");
const start = document.getElementById("play");
const greenTile = document.querySelector(".tile.green.inactive");
const redTile = document.querySelector(".tile.red.inactive");
const blueTile = document.querySelector(".tile.blue.inactive");
const yellowTile = document.querySelector(".tile.yellow.inactive");


start.addEventListener("click", function() {
    level.innerHTML = 1;
    addRandomColor();
    changeColorOpacity()
    getSound();
});

const element = document.querySelector(".board");
element.classList.remove("unclickable");

greenTile.addEventListener("click", function() {
    console.log("inside event listener")
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

function changeColorOpacity() {
    for (let i = 0; i < colorsOrder.length; i++) {
        if (colorsOrder[i] == "green") {
            greenTile.style.opacity = 1;
            setTimeout(() => {
                greenTile.style.opacity = 0.35;
            }, 2000);
        }
        else if (colorsOrder[i] == "red") {
            redTile.style.opacity = 1;
            setTimeout(() => {
                redTile.style.opacity = 0.35;
            }, 2000);
        }
        else if (colorsOrder[i] == "blue") {
            blueTile.style.opacity = 1;
            setTimeout(() => {
                blueTile.style.opacity = 0.35;
            }, 2000);
        }
        else if (colorsOrder[i] == "yellow") {
            yellowTile.style.opacity = 1;
            setTimeout(() => {
                yellowTile.style.opacity = 0.35;
            }, 2000);
        };
    };
};

function getSound() {

};

function handleTileClick(clickedColor) {
    for (let i = 0; i < colorsOrder.length; i++) {
        console.log(clickedColor);
        const correctColor = colorsOrder[i];
        console.log(correctColor);
        if (clickedColor == correctColor) { 
            level ++;
            highscore += 10;
            addRandomColor();
            changeColorOpacity();
            
        } else {
            //wrong sound
            //game over sound
            colorsOrder = [];
        };
    }

};
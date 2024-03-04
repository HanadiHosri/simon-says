let colorsOrder = [];
let userOrder = [];
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
});

const element = document.querySelector(".board");
element.classList.remove("unclickable");

greenTile.addEventListener("click", function() {
    changeColorOpacity("green");
    userOrder.push("green");
    checkUserChoice();
});

redTile.addEventListener("click", function() {
    changeColorOpacity("red");
    userOrder.push("red");
    checkUserChoice();
});

blueTile.addEventListener("click", function() {
    changeColorOpacity("blue");
    userOrder.push("blue");
    checkUserChoice();
});

yellowTile.addEventListener("click", function() {
    changeColorOpacity("yellow");
    userOrder.push("yellow");
    checkUserChoice();
});

function addRandomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    const randomColor = colors[Math.floor(Math.random()*4)];
    colorsOrder.push(randomColor);
    changeColorOpacity(randomColor);
    
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

function areEqualArrays(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    } else {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }
}

function checkUserChoice() {
    if (areEqualArrays(colorsOrder, userOrder)) {
        startNextLevel();
    } else {
        colorsOrder = [];
        userOrder = [];
        level.innerHTML = "1";
        highscore.innerHTML = "0";
    }
};

function startNextLevel() {
    levelNumber ++;
    level.innerHTML = levelNumber.toString();
    highscoreNumber += 10
    highscore.innerHTML = highscoreNumber.toString();
    userOrder = [];
    addRandomColor();
}
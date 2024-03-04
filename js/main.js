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

const greenAudio = new Audio("../simon-says/sounds/green.mp3");
const redAudio = new Audio("../simon-says/sounds/red.mp3");
const blueAudio = new Audio("../simon-says/sounds/blue.mp3");
const yellowAudio = new Audio("../simon-says/sounds/yellow.mp3");

start.addEventListener("click", function() {
    level.innerHTML = levelNumber.toString();
    addRandomColor();
});

const element = document.querySelector(".board");
element.classList.remove("unclickable");

greenTile.addEventListener("click", function() {
    changeColorOpacity("green");
    userOrder.push("green");
    greenAudio.play();
    checkUserChoice();
});

redTile.addEventListener("click", function() {
    changeColorOpacity("red");
    userOrder.push("red");
    redAudio.play();
    checkUserChoice();
});

blueTile.addEventListener("click", function() {
    changeColorOpacity("blue");
    userOrder.push("blue");
    bluenAudio.play();
    checkUserChoice();
});

yellowTile.addEventListener("click", function() {
    changeColorOpacity("yellow");
    userOrder.push("yellow");
    blueAudio.play();
    checkUserChoice();
});

function addRandomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    
    for (let i = 1; i <= levelNumber; i++) {
        setTimeout(() => {
            for (let j = 0; j < i; j++) {
                console.log("j is " + j + " i is " + i);
                const randomIndex = Math.floor(Math.random() * 4);
                const randomColor = colors[randomIndex];
                colorsOrder.push(randomColor);
                changeColorOpacity(randomColor);
            }
        },i * 1000);
    }
}
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
    console.log("comparing " + array1.length + " to " + array2.length);
    if (array1.length !== array2.length) {
        return false;
    } else {
        for (let i = 0; i < array1.length; i++) {
            console.log("comparing " + array1[i] + " to " + array2[i]);
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }
}

function checkUserChoice() {
    if (areEqualArrays(colorsOrder, userOrder)) {
        if (levelNumber <= 12) {
            startNextLevel();
        } else {
            alert("Congratulations! You completed all levels!");
        };
    } else {
        colorsOrder = [];
        userOrder = [];
        level.innerHTML = "1";
        highscore.innerHTML = "0";
    };
};

function startNextLevel() {
    levelNumber ++;
    level.innerHTML = levelNumber.toString();
    highscoreNumber += 10
    highscore.innerHTML = highscoreNumber.toString();
    userOrder = [];
    addRandomColor();
}
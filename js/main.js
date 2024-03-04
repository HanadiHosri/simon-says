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

const greenAudio = document.createElement('audio');
greenAudio.id = 'audio-player';
greenAudio.autoplay = true;
greenAudio.src = '../simon-says/sounds/green.mp3';
greenAudio.type = 'audio/mp3';


start.addEventListener("click", function() {
    level.innerHTML = levelNumber.toString();
    addRandomColor();
});

const element = document.querySelector(".board");
element.classList.remove("unclickable");

greenTile.addEventListener("click", function() {
    changeColorOpacity("green");
    userOrder.push("green");
    greenTile.appendChild(greenAudio);;
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
    
    for (let i = 0; i < levelNumber; i++) {
        setTimeout(() => {
            for (let j = 0; j <= i; j++) {
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
        if (levelNumber <= 11) {
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
const colorsOrder = [];
const start = document.getElementById("play");


start.addEventListener("click", function() {
    addRandomColor();
    changeColorOpacity()
});

function addRandomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    const randomColor = colors[Math.floor(Math.random()*3)];
    colorsOrder.push(randomColor);
    
};

function changeColorOpacity() {
    const greenTile = document.querySelector(".tile.green.inactive");
    const redTile = document.querySelector(".tile.red.inactive");
    const blueTile = document.querySelector(".tile.blue.inactive");
    const yellowTile = document.querySelector(".tile.yellow.inactive");

    for (let i = 0; i < colorsOrder.length; i++) {
        if (colorsOrder[i] == "green") {
            greenTile.style.opacity = 1;
        }
        else if (colorsOrder[i] == "red") {
            redTile.style.opacity = 1;
        }
        else if (colorsOrder[i] == "blue") {
            blueTile.style.opacity = 1;
        }
        else if (colorsOrder[i] == "yellow") {
            yellowTile.style.opacity = 1;
        }
    }
};

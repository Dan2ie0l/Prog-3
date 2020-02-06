//! Setup function fires automatically
function setup() {

    var socket = io();
    var side = 15;
    var matrix = [];



    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');

    var seasonText = document.getElementById("season")

    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');






        if (season == "winter") {

            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("white");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("#ccff66");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("#33cccc");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("#999966");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }

        }
        else if (season == "spring") {

            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("green");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("brown");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }
        }
        else if (season == "summer") {

            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("green");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("brown");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }
        }
        else if (season == "autumn" || season == "fall") {

            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("#ff9900");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("brown");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }
        }
        else {
            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("green");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("brown");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }
        }
    }
}
/*

var season = prompt("Write any season");
var seasonText = document.getElementById("season")

 function framerate(){
    if(z >= 0 && z < 50){
        a=30;
    }
    else if(z >= 50 && z < 100){
        a=2;
    }
    else if(z >= 100 && z < 150){
        a=40;
    }
    else if(z >= 150 && z <= 200){
        a=1;
    }
    else{
        a=40;
    }
 }
season ;
var c = 0;
if(season=="spring"){
    z=0;
}
else if(season=="summer"){
    z=100;
}
else if(season=="winter"){
    z=150;
}
else if(season=="fall" || season=="autumn"){
    z=50;
}
else{
    z=0;
}
var side = 15;
*/
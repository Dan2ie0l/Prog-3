var Grass = require("./Modules/class.grass.js");
var Xotaker = require("./Modules/class.xotaker.js");
var Gishatich = require("./Modules/class.gishatich.js");
var Vorsord = require("./Modules/class.vorsord.js");
var Mah = require("./Modules/class.mah.js");
let random = require('./Modules/random.js');

// arrays
grassArr = [];
gishatichner = [];
xotakerner = [];
vorsord = [];
mahh = [];
grassHashiv = 0;
matrix = [];
var season;
var z;

// end 



//matrix generating
function matrixGenerator(matrixSize, grass, xotakerner, gishatichner, vorsord, mahh) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < xotakerner; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatichner; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < vorsord; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < mahh; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(20, 5, 1, 5, 6, 2);
//end


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3003);


//
function creatingobjects() {

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {

                grassArr.push(new Grass(x, y, 1));
                grassHashiv++;
            }
            else if (matrix[y][x] == 2) {
                xotakerner.push(new Xotaker(x, y, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichner.push(new Gishatich(x, y, 3));

            }
            else if (matrix[y][x] == 4) {
                vorsord.push(new Vorsord(x, y, 4));

            }
            else if (matrix[y][x] == 5) {
                mahh.push(new Mah(x, y, 5));

            }
        }
    }
}

creatingobjects();

// myus obyektneri hashivnery 
//

function game() {



    z++;
    if (z >= 0 && z < 50) {
        season = "spring";
        seasonText.innerHTML = "Spring"

    }
    else if (z >= 50 && z < 100) {
        season = "autumn"
        seasonText.innerHTML = "Fall"
    }
    else if (z >= 100 && z < 150) {
        season = "summer"
        seasonText.innerHTML = "Summer"
    }
    else if (z >= 150 && z <= 200) {
        season = "winter"
        seasonText.innerHTML = "Winter"
        if (z == 200) {
            z = 0
        }

    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in vorsord) {
        vorsord[i].eat();
    }
    for (var i in vorsord) {
        if (vorsord[i].energy >= 18) {
            vorsord[i].bazmanal()
        }
        else if (vorsord[i].energy <= 0) {
            vorsord[i].mahanal(i)
        }
    }
    for (var i in gishatichner) {
        gishatichner[i].eat();
    }
    for (var i in gishatichner) {
        if (gishatichner[i].energy >= 18) {
            gishatichner[i].bazmanal()
        }
        else if (gishatichner[i].energy <= 0) {
            gishatichner[i].mahanal(i)
        }
    }
    for (var i in xotakerner) {
        xotakerner[i].eat();

    }
    for (var i in xotakerner) {
        if (xotakerner[i].energy >= 10) {
            xotakerner[i].bazmanal();
        }
        else if (xotakerner[i].energy <= 0) {

            xotakerner[i].mahanal(i);
        }
    }

    for (var i in mahh) {
        mahh[i].eat();
    }
    for (var i in mahh) {
        if (mahh[i].energy >= 18) {
            mahh[i].bazmanal()
        }
        else if (mahh[i].energy <= 0) {
            mahh[i].mahanal(i)
        }
    }





    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        season: season

    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}

setInterval(game, 1000
)
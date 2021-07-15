// Player Factory

const Player = (name, turn) => {
    const getName = () => name;
    let getTurn = () => turn;
    const userTurn = (number) => {
        if (name == 'X' && document.getElementById('box' + number).innerHTML == "") {
            document.getElementById('box' + number).innerHTML = 'X';
            round++;
            document.getElementById('turnDisplay').innerHTML = "O's Turn";
        }
        else if (name == 'O' && document.getElementById('box' + number).innerHTML == "") {
            document.getElementById('box' + number).innerHTML = 'O';
            round++;
            document.getElementById('turnDisplay').innerHTML = "X's Turn";
        }
        else {
            console.log('System Error');
       }
    }
    const win = () => {
        document.getElementById('turnDisplay').innerHTML = name + ' Wins!';
        document.getElementById('restart').innerHTML = "Play Again?";
        round = -1;
    }
    return {getName, getTurn, userTurn, win}
    }

const x = Player("X", true);
const o = Player("O", false);

// GameBoard Module

document.getElementById('container').addEventListener('click', function(e) {
    let box1 = document.getElementById('box1').innerHTML;
    let box2 = document.getElementById('box2').innerHTML;
    let box3 = document.getElementById('box3').innerHTML;
    let box4 = document.getElementById('box4').innerHTML;
    let box5 = document.getElementById('box5').innerHTML;
    let box6 = document.getElementById('box6').innerHTML;
    let box7 = document.getElementById('box7').innerHTML;
    let box8 = document.getElementById('box8').innerHTML;
    let box9 = document.getElementById('box9').innerHTML;
    console.log(box1);
    console.log(box2);
    console.log(box3);

    // Horizontal

    if (box1 == 'O' && box2 == 'O' && box3 == 'O') {
        o.win();
    }
    else if (box1 == 'X' && box2 == 'X' && box3 == 'X') {
       x.win();
    }
    if (box4 == 'O' && box5 == 'O' && box6 == 'O') {
        o.win();
    }
    else if (box4 == 'X' && box5 == 'X' && box5 == 'X') {
       x.win();
    }
    if (box7 == 'O' && box8 == 'O' && box9 == 'O') {
        o.win();
    }
    else if (box7 == 'X' && box8 == 'X' && box9 == 'X') {
       x.win();
    }

    // Vertical

    if (box1 == 'O' && box4 == 'O' && box7 == 'O') {
        o.win();
    }
    else if (box1 == 'X' && box4 == 'X' && box7 == 'X') {
       x.win();
    }
    if (box2 == 'O' && box5 == 'O' && box8 == 'O') {
        o.win();
    }
    else if (box2 == 'X' && box5 == 'X' && box8 == 'X') {
       x.win();
    }
    if (box3 == 'O' && box6 == 'O' && box9 == 'O') {
        o.win();
    }
    else if (box3 == 'X' && box6 == 'X' && box9 == 'X') {
       x.win();
    }

    // Diagonal

    if (box1 == 'O' && box5 == 'O' && box9 == 'O') {
        o.win();
    }
    else if (box1 == 'X' && box5 == 'X' && box9 == 'X') {
       x.win();
    }
    if (box3 == 'O' && box5 == 'O' && box7 == 'O') {
        o.win();
    }
    else if (box3 == 'X' && box5 == 'X' && box7 == 'X') {
       x.win();
    }
})

// Cotroller Module


//
let round = 1;
function myTurn(num) {
    if (round <= 0) {
        console.log("End");
    }
    else if (round & 1) {
        document.getElementById('turnDisplay').innerHTML = "X's Turn";
        x.userTurn(num);
    }
    else {
        document.getElementById('turnDisplay').innerHTML = "O's Turn";
        o.userTurn(num);
    }
}

function newGame() {
    document.getElementById('box1').innerHTML = "";
    document.getElementById('box2').innerHTML = "";
    document.getElementById('box3').innerHTML = "";
    document.getElementById('box4').innerHTML = "";
    document.getElementById('box5').innerHTML = "";
    document.getElementById('box6').innerHTML = "";
    document.getElementById('box7').innerHTML = "";
    document.getElementById('box8').innerHTML = "";
    document.getElementById('box9').innerHTML = "";
    document.getElementById('turnDisplay').innerHTML = "X's Turn";
    document.getElementById('restart').innerHTML = "Restart";
    round = 1;
}
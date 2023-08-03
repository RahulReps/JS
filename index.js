let cells = document.querySelectorAll(".cell");
let playerdisplay = document.querySelector("#turnIndicator");
let restart = document.querySelector("#restartButton");

let moves = ["", "", "", "", "", "", "", "", ""];
let current = "X";

runGame();

function runGame(){
    cells.forEach(cell => cell.addEventListener("click", clicked));
    playerdisplay.textContent = `${current}'s turn`; 
    restart.addEventListener("click",restartGame);
}

function clicked(){
    const boxNo = this.getAttribute("cellIndex"); 
    if(moves[boxNo]!=""){
        return;
    }
    moves[boxNo] = current;
    this.textContent = current;
    if(winnerCheck()){
        restartGame();
        return;
    }
    current=(current == "X")?"O":"X";
    playerdisplay.textContent = `${current}'s turn`; 
}

function winnerCheck(){
    if(moves[0] == moves[1] && moves[1] == moves[2] && (moves[0]!="" || moves[1]!="" || moves[2]!="")){
        alert(`${current} wins!!!`);
        return true;

    }
    if(moves[3] == moves[4] && moves[4] == moves[5] && (moves[3]!="" || moves[4]!="" || moves[5]!="")){
        alert(`${current} wins!!!`);
        return true;

    }
    if(moves[6] == moves[7] && moves[7] == moves[8] && (moves[6]!="" || moves[7]!="" || moves[8]!="")){
        alert(`${current} wins!!!`);
        return true;
    }
    if(moves[0] == moves[3] && moves[3] == moves[6] && (moves[0]!="" || moves[3]!="" || moves[6]!="")){
        alert(`${current} wins!!!`);
        return true;

    }
    if(moves[1] == moves[4] && moves[4] == moves[7] && (moves[1]!="" || moves[4]!="" || moves[7]!="")){
        alert(`${current} wins!!!`);
        return true;

    }
    if(moves[2] == moves[5] && moves[5] == moves[8] && (moves[2]!="" || moves[5]!="" || moves[8]!="")){
        alert(`${current} wins!!!`);
        return true;

    }
    if(moves[0] == moves[4] && moves[4] == moves[8] && (moves[0]!="" || moves[4]!="" || moves[8]!="")){
        alert(`${current} wins!!!`);
        return true;
    }
    if(moves[2] == moves[4] && moves[4] == moves[6] && (moves[2]!="" || moves[4]!="" || moves[6]!="")){
        alert(`${current} wins!!!`);
        return true;
    }
    if(!moves.includes("")){
        alert(`Draw!`);
        return true;
    }
    return false;
}

function restartGame(){
    current = "X";
    moves = ["", "", "", "", "", "", "", "", ""];
    playerdisplay.textContent = `${current}'s turn`; 
    cells.forEach(cell => cell.textContent = "");
}


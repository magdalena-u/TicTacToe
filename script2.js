const startBtn = document.querySelector('button');
const div = document.querySelectorAll('.box')
let flag = true
//constructor
function Player(mark) {
    this.mark = mark;
    this.score = [];
    this.result = 0;
}

const playerOne = new Player('X');
const playerTwo = new Player('O');

const winningPattern = ['123', '456', '789', '147', '258', '369', '159', '357'];



//add points for winner
function playerOneWin() {
    playerOne.result += 1;
    renderGame();
}

function playerTwoWin() {
    playerTwo.result += 1;
    renderGame();
}

//conditions of win
const whoWin = () => {

    //player One
    let scoreOne = playerOne.score;
    scoreOne.sort();
    let scoreOnePattern = scoreOne.join('');

    for (let i = 0; i <= winningPattern.length; i++) {
        if (scoreOnePattern.includes(winningPattern[i])) {
            return playerOneWin()
        }
    }

    //player Two
    let scoreTwo = playerTwo.score;
    scoreTwo.sort();
    let scoreTwoPattern = scoreTwo.join('');

    for (let i = 0; i <= winningPattern.length; i++) {
        if (scoreTwoPattern.includes(winningPattern[i])) {
            return playerTwoWin()
        }
    }
}



playGame = (e) => {

    if (flag === true) {
        e.target.innerText = playerOne.mark;
        playerOne.score.push(e.target.id);
        flag = !flag;
    } else {
        e.target.innerText = playerTwo.mark;
        let score = e.target.id;
        playerTwo.score.push(score);
        flag = !flag;
    }
    whoWin()
}

function renderGame() {
    //display score of player One
    const resultOne = document.querySelector('.result_one');
    resultOne.innerHTML = playerOne.result;
    //display score of player Two
    const resultTwo = document.querySelector('.result_two');
    resultTwo.innerHTML = playerTwo.result;

}


div.forEach(item => item.addEventListener('click', playGame))
startBtn.addEventListener('click', renderGame)
const startBtn = document.querySelector('button');
const div = document.querySelectorAll('.box')
const line = document.querySelector('.line');
let flag = true
//constructor
function Player(mark) {
    this.mark = mark;
    this.score = [];
    this.result = 0;
}

const playerOne = new Player('X');
const playerTwo = new Player('O');

const winningPattern = [{
        pattern: '123',
        top: 52,
        left: 10,
        width: 340,
        height: 5,
    }, {
        pattern: '456',
        top: 172,
        left: 10,
        width: 340,
        height: 5,
    },
    {
        pattern: '789',
        top: 292,
        left: 10,
        width: 340,
        height: 5,
    },
    {
        pattern: '147',
        top: 10,
        left: 58,
        width: 5,
        height: 340,
    },
    {
        pattern: '258',
        top: 10,
        left: 178,
        width: 5,
        height: 340,
    },
    {
        pattern: '369',
        top: 10,
        left: 298,
        width: 5,
        height: 340,
    },
    {
        pattern: '159',
        top: -45,
        left: 175,
        width: 5,
        height: 450,
        rotate: -45,
    },
    {
        pattern: '357',
        top: -45,
        left: 175,
        width: 5,
        height: 450,
        rotate: 45,
    },
]

// ,     pattern: '456'
//}'789', '147', '258', '369', '159', '357'];


//draw line

function drawLine(win) {
    line.style.top = `${winningPattern[win].top}px`;
    line.style.left = `${winningPattern[win].left}px`;
    line.style.width = `${winningPattern[win].width}px`;
    line.style.height = `${winningPattern[win].height}px`;
    line.style.transform = `rotate(${winningPattern[win].rotate}deg)`;
}

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

    for (let i = 0; i < winningPattern.length; i++) {
        if (scoreOnePattern.includes(winningPattern[i].pattern)) {
            let win = i;
            drawLine(win)
            return playerOneWin()
        }
    }

    //player Two
    let scoreTwo = playerTwo.score;
    scoreTwo.sort();
    let scoreTwoPattern = scoreTwo.join('');

    for (let i = 0; i < winningPattern.length; i++) {
        if (scoreTwoPattern.includes(winningPattern[i].pattern)) {
            let win = i;
            drawLine(win)
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
    startBtn.classList.remove('active');
    div.forEach(item => item.addEventListener('click', playGame))
    //display score of player One
    const resultOne = document.querySelector('.result_one');
    resultOne.innerHTML = playerOne.result;
    //display score of player Two
    const resultTwo = document.querySelector('.result_two');
    resultTwo.innerHTML = playerTwo.result;

}


startBtn.addEventListener('click', renderGame)
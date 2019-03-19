const div = document.querySelectorAll('.box')
let flag = true
//constructor
function Player(mark) {
    this.mark = mark;
    this.score = [];
}

const playerOne = new Player('X');
const playerTwo = new Player('O');

//conditions of win
const whoWin = () => {}


const showScore = whoWin()

playGame = (e) => {

    if (flag === true) {
        e.target.innerText = playerOne.mark;
        let score = e.target.id;
        playerOne.score.push(score);
        flag = !flag;
    } else {
        e.target.innerText = playerTwo.mark;
        let score = e.target.id;
        playerTwo.score.push(score);
        flag = !flag;
    }
    let score = e.target.id
    whoWin()

}


div.forEach(item => item.addEventListener('click', playGame))
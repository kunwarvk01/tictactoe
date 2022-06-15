let player = 'X';
let gameOver = false;
let count = 0;


//changePlayer
const changePlayer = () => {
    return player === 'X' ? "0" : "X";
};




//isWon
const checkWon = () => {
    let boxTexts = document.getElementsByClassName("boxText");
    let boxs = document.getElementsByClassName('box');
    let winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    winPos.forEach(ele => {
        if (boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText &&
            boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText &&
            boxTexts[ele[0]].innerText !== "") {
            boxs[ele[0]].style.backgroundColor = "lightskyblue";
            boxs[ele[1]].style.backgroundColor = "lightskyblue";
            boxs[ele[2]].style.backgroundColor = "lightskyblue";
            document.getElementById("result").innerText =
                boxTexts[ele[0]].innerText + " won";
            gameOver = true;

        } else if (count === 9) {
            document.getElementById("result").innerText = "Its a DRAW";
            boxs[0].style.backgroundColor = "lightpink";
            boxs[1].style.backgroundColor = "lightpink";
            boxs[2].style.backgroundColor = "lightpink";
            boxs[3].style.backgroundColor = "lightpink";
            boxs[4].style.backgroundColor = "lightpink";
            boxs[5].style.backgroundColor = "lightpink";
            boxs[6].style.backgroundColor = "lightpink";
            boxs[7].style.backgroundColor = "lightpink";
            boxs[8].style.backgroundColor = "lightpink";

            gameOver = true;
        }


    });

};





//turns
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    let boxText = box.querySelector(".boxText");

    box.addEventListener("click", () => {
        if (boxText.innerText === "" && !gameOver) {
            boxText.innerText = player;
            player = changePlayer();
            count++;
            checkWon();
            document.getElementsByClassName("player")[0].innerText = player;
        }
    });
});





//resset button
let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", () => {
    let boxTexts = document.querySelectorAll(".boxText");
    boxTexts.forEach(boxText => {
        boxText.innerText = "";

    });
    player = "X";
    gameOver = false;
    count = 0;
    reset.innerText = "Start Again";

    let x = document.getElementsByClassName('box');
    for (i of x) {
        i.style.backgroundColor = "white";
    }
    document.getElementById('result').innerText = "RUNNING..";
    document.getElementsByClassName("player")[0].innerText = "X";
});
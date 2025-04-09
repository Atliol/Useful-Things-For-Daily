const gameField = document.querySelector(".GameField");
const newGameButton = document.querySelector(".newGameButton");
const winnerText = document.querySelector(".winnerText");
const winnerWindow = document.querySelector(".PopUpContent");
const popUp = document.querySelector(".popUp");
const arrWithGameField = [[], [], [], [], [], [], [], [], []];

let firstMove = false;
function whoIsTheWinner() {
  let winner = "Draw";
  if (
    arrWithGameField[0] == 1 &&
    arrWithGameField[1] == 1 &&
    arrWithGameField[2] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[3] == 1 &&
    arrWithGameField[4] == 1 &&
    arrWithGameField[5] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[6] == 1 &&
    arrWithGameField[7] == 1 &&
    arrWithGameField[8] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[0] == 1 &&
    arrWithGameField[3] == 1 &&
    arrWithGameField[6] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[1] == 1 &&
    arrWithGameField[4] == 1 &&
    arrWithGameField[7] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[2] == 1 &&
    arrWithGameField[5] == 1 &&
    arrWithGameField[8] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[0] == 1 &&
    arrWithGameField[4] == 1 &&
    arrWithGameField[8] == 1
  ) {
    winner = "redCross";
  } else if (
    arrWithGameField[6] == 1 &&
    arrWithGameField[4] == 1 &&
    arrWithGameField[2] == 1
  ) {
    winner = "redCross";
  }

  if (
    arrWithGameField[0] == 2 &&
    arrWithGameField[1] == 2 &&
    arrWithGameField[2] == 2
  ) {
    console.log("1");
    winner = "greenCircle";
  } else if (
    arrWithGameField[3] == 2 &&
    arrWithGameField[4] == 2 &&
    arrWithGameField[5] == 2
  ) {
    console.log(arrWithGameField);
    console.log("2");

    winner = "greenCircle";
  } else if (
    arrWithGameField[6] == 2 &&
    arrWithGameField[7] == 2 &&
    arrWithGameField[8] == 2
  ) {
    console.log("3");
    winner = "greenCircle";
  } else if (
    arrWithGameField[0] == 2 &&
    arrWithGameField[3] == 2 &&
    arrWithGameField[6] == 2
  ) {
    console.log("4");
    winner = "greenCircle";
  } else if (
    arrWithGameField[1] == 2 &&
    arrWithGameField[4] == 2 &&
    arrWithGameField[7] == 2
  ) {
    console.log("5");
    winner = "greenCircle";
  } else if (
    arrWithGameField[2] == 2 &&
    arrWithGameField[5] == 2 &&
    arrWithGameField[8] == 2
  ) {
    console.log("6");
    winner = "greenCircle";
  } else if (
    arrWithGameField[0] == 2 &&
    arrWithGameField[4] == 2 &&
    arrWithGameField[8] == 2
  ) {
    console.log("7");
    winner = "greenCircle";
  } else if (
    arrWithGameField[6] == 2 &&
    arrWithGameField[4] == 2 &&
    arrWithGameField[2] == 2
  ) {
    console.log("8");
    winner = "greenCircle";
  }
  return winner;
}
function whoIsTheNext() {

  let number = 0;
  arrWithGameField.forEach((element) => {
    number += element.length;
  });
  return number;
}

gameField.addEventListener("click", (clickPlace) => {
  let redCross = document.createElement("img");
  redCross.src = "images/cross.png";
  redCross.style.height = "270px";
  redCross.style.width = "270px";
  let greenCircle = document.createElement("img");
  greenCircle.src = "images/circle.png";
  greenCircle.style.height = "200px";
  greenCircle.style.width = "200px";
  let targetOfClick = clickPlace.target;
  numberOfSquare = clickPlace.target.className.slice(-1);
  if (firstMove == false) {
    firstMove = true;
    targetOfClick.appendChild(redCross);
    arrWithGameField[numberOfSquare].push(1);
    return;
  }
  let numberOfTheNextMove = whoIsTheNext();
  if (numberOfTheNextMove % 2 != 0 && numberOfTheNextMove <= 8) {
    targetOfClick.appendChild(greenCircle);
    arrWithGameField[numberOfSquare].push(2);
    let winner = whoIsTheWinner();
    if (winner == "redCross") {
      showWinner(winner);
    } else if (winner == "greenCircle") {
      showWinner(winner);
    }
  } else if (numberOfTheNextMove <= 8) {
    targetOfClick.appendChild(redCross);
    arrWithGameField[numberOfSquare].push(1);
    let winner = whoIsTheWinner();
    if (winner == "redCross") {
      showWinner(winner);
      console.log(arrWithGameField);
    } else if (winner == "greenCircle") {
      showWinner(winner);
    } else if (numberOfTheNextMove == 8) {
      showWinner("draw");
    }
  }
});
function showWinner(winner) {
  popUp.classList.toggle("hidden");
  winnerWindow.classList.add("winnerWindow");
  if (winner == "redCross") {
    winnerText.innerHTML = "အနီမှအနိင်ရရှိပါသည်။";
  } else if (winner == "greenCircle") {
    winnerText.innerHTML = "အစိမ်းမှအနိင်ရရှိပါသည်။";
  } else {
    winnerText.innerHTML = "သရေရပါသည်။";
  }
}
newGameButton.addEventListener("click", () => {
  window.location.reload();
});

function smartComputer() {
  //time
 }


const gameContainer = document.getElementById("game");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const stop = document.getElementById("stop");
let previousHoleId = null;
let scores = 0;
let hugtsa = 20;
let scoreInterval = null;
let timeInterval = null;

function togloom() {
  for (let i = 0; i < 9; i++) {
    const hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = i.toString();
    const mole = document.createElement("div");
    mole.classList.add("moles");
    mole.style.display = "none";
    mole.addEventListener("click", function () {
      console.log("working");
      const count = document.getElementById("playerScore");
      count.innerText = Number(count.innerText) + 1;
    });
    hole.appendChild(mole);
    gameContainer.appendChild(hole);
  }
}

function starter() {
  hide();
  const randomNumber = Math.floor(Math.random() * 9);
  console.log(randomNumber, "THIS HOLE");

  const randomHole = document.getElementById(randomNumber);
  console.log(randomHole);

  const randomMole = randomHole.querySelector(".moles");
  console.log(randomMole);

  randomMole.style.display = "block";

  previousHoleId = randomNumber;
}
function time() {
  hugtsa = hugtsa - 1;
  const timer = document.getElementById("playerTime");
  timer.innerHTML = `${hugtsa} sec`;
  if (hugtsa <= 0) {
    clearInterval(scoreInterval);
    clearInterval(timeInterval);
    const lastmole = document.getElementById(previousHoleId);
    lastmole.querySelector(".moles").style.display = "none";
    const count = document.getElementById("playerScore");
    alert(`${count}`);
  }
}
function RESTART() {
  scores = 0;
  hugtsa = 20;
  startButton.addEventListener("click", function () {
    scoreInterval = setInterval(starter, 1000);
    timeInterval = setInterval(time, 1000);
  });
}
restartButton.addEventListener("click", RESTART);
stop.addEventListener("click", function stop() {
  clearInterval(scoreInterval);
  clearInterval(timeInterval);
});
function hide() {
  if (previousHoleId !== null) {
    const umnuhNuh = document.getElementById(previousHoleId);
    const umnuhSohorNomin = umnuhNuh.querySelector(".moles");
    umnuhSohorNomin.style.display = "none";
  }
}

startButton.addEventListener("click", function () {
  scoreInterval = setInterval(starter, 1000);
  timeInterval = setInterval(time, 500);
});

window.onload = togloom;

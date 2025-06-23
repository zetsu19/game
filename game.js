const gameContainer = document.getElementById("game");

function togloom() {
  for (let i = 0; i < 9; i++) {
    const hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = i.toString();
    gameContainer.appendChild(hole);
    const mole = document.createElement("div");
    mole.classList.add("moles");
    gameContainer.appendChild(hole);
    hole.appendChild(mole);
  }
}

window.onload = togloom;

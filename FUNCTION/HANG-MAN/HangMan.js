const alphabets = document.getElementById("alphabets");
const underscore = document.getElementById("underscore");
let fail = 0;
let maxFail = 6;

const hello = [" LORD", "APPLE", "TWOPAC", "SAMSUNG", "SISIMASISI", "GEN Z"];
const alphavit = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

let emptyArray = [];

function keyboard() {
  for (let i = 0; i < alphavit.length; i++) {
    const newDiv = document.createElement("button");
    newDiv.innerHTML = alphavit[i];
    alphabets.appendChild(newDiv);
    newDiv.classList.add("words");
    newDiv.addEventListener("click", function () {
      emptyArray.push(newDiv.innerText);
      console.log(emptyArray);
      line();
    });
  }
}

const random = Math.floor(Math.random() * hello.length);
const currentIndex = hello[random];

function line() {
  let ug = " ";
  for (let i = 0; i < currentIndex.length; i++) {
    if (emptyArray.includes(currentIndex[i])) {
      ug = ug + currentIndex[i];
    } else {
      ug = ug + "_ ";
    }
  }
  underscore.innerText = ug;
  console.log(currentIndex);
}

line();
window.onload = keyboard;

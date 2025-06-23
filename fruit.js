const fruitsinput = document.getElementById("fruitsinput");
const addf = document.getElementById("addf");
const diffruits = document.getElementById("diffruits2");
const neg = document.getElementById("neg");
const fruitlist = document.querySelector(".fruitlist");
let fruitId = 0;
function counter() {
  const newDiv = document.createElement("div");

  fruitId++;

  const currenId = fruitId;

  newDiv.innerHTML = `<span><span>${fruitsinput.value}</span><span> COUNT: <span id = "fruitt">1 </span></span><button id = nemeh>increase</button><button id = hasah>decrease</button></span>`;

  fruitlist.appendChild(newDiv);

  const count = document.querySelector(".fruitlist");

  document.getElementById("diffruits2").textContent = count.childElementCount;
  document.getElementById("totalnum2").textContent = count.childElementCount;

  nemeh.addEventListener("click", function () {
    const nemeh = document.getElementById("nemeh");
    const shineDiv = document.createElement("div");
    fruitlist.appendChild(shineDiv);
    document.getElementById("totalnum2").textContent = count.childElementCount;
    const fruitt = document.getElementById("fruitt");
    document.getElementById("totalnum2").textContent = count.childElementCount;

    document.getElementById("fruitt").textContent = count.childElementCount;
  });
}

addf.addEventListener("click", counter);

addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    counter();
  }
});

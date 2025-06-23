const addbtn = document.getElementById("add-btn");
const placeholderinput = document.getElementsByClassName("holder");
const lists = document.getElementsByClassName("lists")[0];
const input = document.querySelector(".holder");

function addd() {
  const newDiv = document.createElement("div");
  let str = input.value;
  newDiv.innerHTML = `<input type = "checkbox"/> ${str} <button id = "dltBtn" >rem</button>`;
  lists.appendChild(newDiv);
  const deleteBtn = document.getElementById("dltBtn");
  deleteBtn.addEventListener("click", function () {
    lists.removeChild(newDiv);
  });
}

addbtn.addEventListener("click", addd);
addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addd();
  }
});

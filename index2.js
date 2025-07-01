const numbers = ["1", "2", "3", "4", "5", " 6", "7"];

const nameContainer = document.getElementById("name-container");
const input = document.getElementById("input");

input.addEventListener("input", function () {
  if ((input.value = numbers.value)) {
    console.log(input.value);
  }
});
for (let i = 0; i < numbers.length; i++) {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = numbers[i];
  nameContainer.appendChild(newDiv);
}

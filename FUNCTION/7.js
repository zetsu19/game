const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function highestNum(a) {
  let ihToo = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (ihToo < numbers[i]) {
      ihToo = numbers[i];
    }
  }
  return ihToo;
}
const negyum = highestNum(numbers);
console.log(negyum);

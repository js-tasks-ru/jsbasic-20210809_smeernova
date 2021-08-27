let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  // Ваш код
  const filteredArray = arr.filter(number => number >= a && number <= b);
  return filteredArray;
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);



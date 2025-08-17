function multiply(num1, num2) {
  return num1 * num2;
}

function lastElement(arr) {
  return arr[arr.length - 1];
}

function capitalize(string) {
  return string.toUpperCase();
}

function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(lastElement([3, 5, 7]));
console.log(capitalize("eggplant"));

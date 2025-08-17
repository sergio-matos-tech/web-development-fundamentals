console.log("a" < "A");
console.log("11" == 11);

let random = Math.floor(Math.random() * 10);

console.log(`Generated = ${random}`);
if (random == 5) {
  console.log(5);
} else {
  console.log("Not 5");
}

console.log(isEven(random));

function isEven(num) {
  return num % 2 == 0 ? true : false;
}

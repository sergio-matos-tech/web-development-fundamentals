const numbers = [32, 20, 453, 83, 4, 3, 98, 12, 23, 3];

numbers.forEach((number) => {
  console.log(number);
});

console.log("\nEven numbers: ");
numbers.forEach((number) => (number % 2 == 0 ? console.log(number) : ""));

const doubleNumbers = numbers.map((x) => x * 2);

console.log(doubleNumbers);

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(20));
console.log(rollDie());

function greet(message = "World") {
  return `Hello ${message}`;
}

console.log(greet("Markus"));
console.log(greet());

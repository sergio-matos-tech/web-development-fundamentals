randomNumberBetweenOneAndTen = Math.floor(Math.random() * 10 + 1);

console.log(randomNumberBetweenOneAndTen);

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
console.log(roll);

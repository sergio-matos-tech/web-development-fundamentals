const nums = [9, 32, 3, 2, 9, 3, 4, 99, 9832, 43, 23, 239, 379, 43];

const odds = nums.filter((n) => n % 2 == 0);
const lestThanTen = nums.filter((n) => n < 10);

console.log(odds);
console.log(lestThanTen);

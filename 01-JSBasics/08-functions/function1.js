function generateIntRandomNumbers(start, end, amount) {
  let numbers = [];
  if (amount > 0 && amount != null && start != null && end != null) {
    for (let i = 0; i < amount; i++) {
      numbers[i] = Math.floor(Math.random() * end);
    }
  }

  return numbers;
}

console.log(generateIntRandomNumbers(1, 50, 1));

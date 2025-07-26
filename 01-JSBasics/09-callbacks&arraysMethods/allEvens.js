
function allEvens(numbers) {
    return numbers.every(n => n % 2 == 0)
}

console.log(allEvens([2, 4, 6, 8]));
console.log(allEvens([1, 4, 6, 8]));
console.log(allEvens([1, 2, 3]));

function hasEven(numbers) {
    return numbers.some(n => n % 2 == 0)
}

console.log(hasEven([2, 4, 6, 8]));
console.log(hasEven([1, 4, 6, 8]));
console.log(hasEven([1, 2, 3]));



// global scope
// it is not recommended
var year = 2020;

// local scope
let yearLet = 2020;

// Ex:

if (true) {
    var dateVar = '2025-12-12'
    let dateLet = '2025-11-11'
}

// console.log(date_let); // error


console.log(dateVar); // not error

// js is dynamic typed
yearLet = '2020'
console.log(typeof yearLet);

let number = 2

console.log(++number);
console.log(number++);
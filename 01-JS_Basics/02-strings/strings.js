

let bestColor = 'purple'
let quote = "you had me at 'hello'"

console.log(quote);
console.log(quote.length);
console.log(quote[2]);

let firstName = 'Sergio'
let surname = ' Henrique'

let fullName = firstName.concat(surname)

console.log(fullName);
console.log(fullName.length);
console.log(fullName.trim());

console.log(fullName.search('r'));
console.log(fullName.indexOf('r'));

const word = 'skateboard'
let facialHair = word.slice(5, word.length)
facialHair = facialHair.replace('o', 'e')
console.log(facialHair);

console.log(`My first name is ${firstName}, my surname is ${surname} and my full name is ${fullName}`)
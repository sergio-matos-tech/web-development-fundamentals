

let num1 = 1
let num2 = 1
let arr1 = [1]
let arr2 = [1]



console.log(num1 == num2)
console.log(num1 === num2)
console.log(arr1 == arr2)
console.log(arr1 === arr2);

arr2 = arr1
console.log(arr1 == arr2)
console.log(arr1 === arr2)

console.log(Math.PI);

const airplaneSeats = [ 
    ['Ruth', 'Anthony', 'Stevie'], 
    ['Amelia', 'Pedro', 'Maya'], 
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = 'Hugo'

console.log(airplaneSeats);

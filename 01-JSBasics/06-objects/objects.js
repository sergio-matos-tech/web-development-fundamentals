

const person = {
    name: 'Carlos',
    phone: '9825439-34334',
    email: 'carlos@gmail.com',
    dateOfBirth: '1999-01-04'
};

console.log(person);


const product = {
    name: 'Gummy Bears',
    inStock: true,
    price: 1.99,
    flavors: ['grape', 'apple', 'cherry']
}

console.log(product)


console.log(product.flavors[2]);

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAdress = restaurant.address + ', ' + restaurant.city + ', ' + restaurant.state + ', ' + restaurant.zipcode

console.log(fullAdress);
console.log(typeof fullAdress);

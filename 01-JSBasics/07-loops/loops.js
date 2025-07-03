


for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

const animals = [
    "lion",
    "bear",
    "zebra",
    "horse",
    "dog",
    "cat",
    "marmot"

]

const length = animals.length

for (let i = 0; i < length; i++)
    console.log(i, animals[i]);

let people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]

people.sort()
const peopleLength = people.length
for (let i = 0; i < peopleLength; i++) {
    console.log(people[i]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (const number of numbers) {
    console.log(Math.pow(number, 2));
}



const orders = [
    {
        "id": 1,
        "moment": "2025-06-20T19:53:07Z",
        "orderStatus": "PAID",
        "client": {
            "id": 1,
            "name": "Maria Brown",
            "email": "maria@gmail.com",
            "phone": "988888888",
            "password": "123456"
        }
    },
    {
        "id": 2,
        "moment": "2025-07-21T03:42:10Z",
        "orderStatus": "CANCELED",
        "client": {
            "id": 3,
            "name": "Bob Grey",
            "email": "bob@gmail.com",
            "phone": "966666666",
            "password": "123456"
        }
    },
    {
        "id": 3,
        "moment": "2025-07-22T15:21:22Z",
        "orderStatus": "SHIPPED",
        "client": {
            "id": 1,
            "name": "Maria Brown",
            "email": "maria@gmail.com",
            "phone": "988888888",
            "password": "123456"
        }
    }
]

for (const order of orders) {
    console.log(order);
}
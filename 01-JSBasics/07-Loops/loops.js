


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
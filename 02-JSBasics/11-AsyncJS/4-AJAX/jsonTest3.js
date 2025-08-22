const rawData = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());

console.log(rawData);
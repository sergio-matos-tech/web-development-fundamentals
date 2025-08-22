

const button = document.getElementById('btn');
const dogImage = document.getElementById('dogImage');

button.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogImage.src = data.message;
        })
        .catch(error => console.error('Error fetching the dog image:', error));
});



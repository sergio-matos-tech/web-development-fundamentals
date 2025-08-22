

const button = document.getElementById('joke-btn');
const jokeContainer = document.getElementById('joke');

button.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const joke = await response.json();
        jokeContainer.textContent = joke.value;

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        alert('Failed to fetch a joke. Please try again later.');
    }
});
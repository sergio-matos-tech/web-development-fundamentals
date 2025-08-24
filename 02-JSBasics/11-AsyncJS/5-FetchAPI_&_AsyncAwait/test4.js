

async function getMovies() {
    try {
        const response = await fetch('/movies.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const movies = await response.json();
        console.log(movies);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

getMovies();

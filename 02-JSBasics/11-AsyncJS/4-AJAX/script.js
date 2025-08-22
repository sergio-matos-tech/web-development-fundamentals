document.getElementById("load-movies").addEventListener("click", () => {
    fetch("movies.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json(); 
        })
        .then(data => {
            const moviesList = document.getElementById("movies-list");
            moviesList.innerHTML = ""; 

            // Corrected line: iterate directly over the 'data' array
            data.forEach(movie => {
                const listItem = document.createElement("li");
                listItem.textContent = `${movie.title} (${movie.year})`;
                moviesList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching movies:", error);
            const moviesList = document.getElementById("movies-list");
            moviesList.textContent = "Failed to load movies. See console for details.";
        });
});
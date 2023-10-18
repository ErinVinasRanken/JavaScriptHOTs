document.addEventListener("DOMContentLoaded", function() {
    let favoriteMovies = ["Howl's Moving Castle", "Harry Potter", "Aladin"];
    let movieList = document.getElementById("movieList");

    function displayMovies() {
        movieList.innerHTML = ""; 

        for (let i = 0; i < favoriteMovies.length; i++) {
            let movieItem = document.createElement("p");
            movieItem.textContent = favoriteMovies[i];
            movieList.appendChild(movieItem);
        }
    }

    document.getElementById("addButton").addEventListener("click", function() {
        let movieInput = document.getElementById("movieInput").value;

        if (movieInput.trim() !== "") {
            favoriteMovies.push(movieInput);
            displayMovies(); 
            document.getElementById("movieInput").value = ""; 
        }
    });

    displayMovies(); 
});
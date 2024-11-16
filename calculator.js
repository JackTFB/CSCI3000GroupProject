document.addEventListener("DOMContentLoaded", function () {
    // Anime Calculator Elements
    const animeForm = document.getElementById("anime-form");
    const animeList = document.getElementById("shows");
    const totalAnimeTimeText = document.createElement("p");
    let totalAnimeTime = 0;

    // Video Game Calculator Elements
    const gameForm = document.getElementById("game-form");
    const gameList = document.getElementById("games");
    const totalGameTimeText = document.createElement("p");
    let totalGameTime = 0;

    // Add dynamic total time displays
    if (animeForm) {
        animeForm.parentElement.appendChild(totalAnimeTimeText);
    }
    if (gameForm) {
        gameForm.parentElement.appendChild(totalGameTimeText);
    }

    // Load saved data on page load
    loadAnimeData();
    loadGameData();

    // ===================== Anime Calculator =====================
    if (animeForm) {
        animeForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get input values
            const showName = document.getElementById("show-name").value;
            const episodes = parseInt(document.getElementById("episodes").value);
            const duration = parseFloat(document.getElementById("duration").value);

            // Calculate total time for the anime (in hours)
            const totalTimeForShow = (episodes * duration) / 60;

            // Save data to localStorage
            saveAnimeData(showName, episodes, duration, totalTimeForShow);

            // Update the total time display
            updateTotalAnimeTime(totalTimeForShow);

            // Reset the form
            animeForm.reset();
        });

        document.getElementById("reset-list").addEventListener("click", function () {
            resetAnimeList();
        });
    }

    function saveAnimeData(showName, episodes, duration, totalTimeForShow) {
        const animeListData = JSON.parse(localStorage.getItem("animeShows")) || [];
        animeListData.push({
            name: showName,
            episodes: episodes,
            duration: duration,
            totalTime: totalTimeForShow
        });
        localStorage.setItem("animeShows", JSON.stringify(animeListData));
    }

    function loadAnimeData() {
        const savedAnimeData = JSON.parse(localStorage.getItem("animeShows")) || [];
        totalAnimeTime = savedAnimeData.reduce((total, anime) => total + anime.totalTime, 0);
        updateTotalAnimeTime(0);
    }

    function updateTotalAnimeTime(newTime) {
        totalAnimeTime += newTime;
        totalAnimeTimeText.textContent = totalAnimeTime >= 1
            ? `Total Anime Time: ${totalAnimeTime.toFixed(2)} hours`
            : `Total Anime Time: ${(totalAnimeTime * 60).toFixed(2)} minutes`;
    }

    function resetAnimeList() {
        localStorage.removeItem("animeShows");
        totalAnimeTime = 0;
        updateTotalAnimeTime(0);
    }

    // ===================== Video Game Calculator =====================
    if (gameForm) {
        gameForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get input values
            const gameName = document.getElementById("game-name").value;
            const hours = parseFloat(document.getElementById("hours").value);

            // Save data to localStorage
            saveGameData(gameName, hours);

            // Update the total time display
            updateTotalGameTime(hours);

            // Reset the form
            gameForm.reset();
        });

        document.getElementById("reset-game-list").addEventListener("click", function () {
            resetGameList();
        });
    }

    function saveGameData(gameName, hours) {
        const gameListData = JSON.parse(localStorage.getItem("gameList")) || [];
        gameListData.push({
            name: gameName,
            hours: hours
        });
        localStorage.setItem("gameList", JSON.stringify(gameListData));
    }

    function loadGameData() {
        const savedGameData = JSON.parse(localStorage.getItem("gameList")) || [];
        totalGameTime = savedGameData.reduce((total, game) => total + game.hours, 0);
        updateTotalGameTime(0);
    }

    function updateTotalGameTime(newTime) {
        totalGameTime += newTime;
        totalGameTimeText.textContent = totalGameTime >= 1
            ? `Total Game Time: ${totalGameTime.toFixed(2)} hours`
            : `Total Game Time: ${(totalGameTime * 60).toFixed(2)} minutes`;
    }

    function resetGameList() {
        localStorage.removeItem("gameList");
        totalGameTime = 0;
        updateTotalGameTime(0);
    }
});

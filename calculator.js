// Anime Watch Time Calculator Code
document.getElementById("anime-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const showName = document.getElementById("show-name").value;
    const episodes = parseInt(document.getElementById("episodes").value);
    const duration = parseInt(document.getElementById("duration").value);

    // Calculate total time for the show
    const totalTimeForShow = (episodes * duration) / 60; // in hours

    // Add the show to the list
    const showList = document.getElementById("shows");
    const listItem = document.createElement("li");
    if (totalTimeForShow >= 1) {
        listItem.textContent = `${showName} - ${episodes} episodes, ${duration} min/episode, Total: ${totalTimeForShow.toFixed(2)} hours`;
    } else {
        listItem.textContent = `${showName} - ${episodes} episodes, ${duration} min/episode, Total: ${(totalTimeForShow * 60).toFixed(2)} minutes`;
    }
    showList.appendChild(listItem);

    // Update the total watch time
    updateTotalTime(totalTimeForShow);

    // Clear the form
    document.getElementById("anime-form").reset();
});

document.getElementById("reset-list").addEventListener("click", function() {
    resetList();
});

let totalTime = 0;
let totalTimeText = document.getElementById("total-time");

function updateTotalTime(newTime) {
    totalTime += newTime;
    if (totalTime > 1) {
        totalTimeText.textContent = `Total time: ${totalTime.toFixed(2)} hours`;
    } else {
        totalTimeText.textContent = `Total time: ${(totalTime * 60).toFixed(2)} minutes`;
    }
}

function resetList() {
    const showList = document.getElementById("shows");
    showList.innerHTML = ''; // Clear the list
    totalTime = 0;
    totalTimeText.textContent = `Total time: 0 hours`;
}

// Video Game Time Calculator Code
document.getElementById("game-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const gameName = document.getElementById("game-name").value;
    const hours = parseFloat(document.getElementById("hours").value);

    // Add the game to the list
    const gameList = document.getElementById("games");
    const listItem = document.createElement("li");
    if (hours >= 1) {
        listItem.textContent = `${gameName} - Estimated Completion Time: ${hours.toFixed(2)} hours`;
    } else {
        listItem.textContent = `${gameName} - Estimated Completion Time: ${(hours * 60).toFixed(2)} minutes`;
    }
    gameList.appendChild(listItem);

    // Update the total game time
    updateTotalGameTime(hours);

    // Clear the form
    document.getElementById("game-form").reset();
});

document.getElementById("reset-game-list").addEventListener("click", function() {
    resetGameList();
});

let totalGameTime = 0;
let totalGameTimeText = document.getElementById("total-game-time");

function updateTotalGameTime(newTime) {
    totalGameTime += newTime;
    if (totalGameTime >= 1) {
        totalGameTimeText.textContent = `Total time: ${totalGameTime.toFixed(2)} hours`;
    } else {
        totalGameTimeText.textContent = `Total time: ${(totalGameTime * 60).toFixed(2)} minutes`;
    }
}

function resetGameList() {
    const gameList = document.getElementById("games");
    gameList.innerHTML = ''; // Clear the list
    totalGameTime = 0;
    totalGameTimeText.textContent = `Total time: 0 hours`;
}

const animeForm = document.getElementById("anime-form");
// Makes sure the form is loaded before the event listener is added
// Otherwise it will conflict with the video game form if on video game page
if(animeForm){
// Event listener for anime form submission
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

// Event listener for resetting the anime list
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

// Function that resets the anime show list and time
function resetList() {
    const showList = document.getElementById("shows");
    showList.replaceChildren(); // Replace with emptiness
    totalTime = 0;
    totalTimeText.textContent = `Total time: 0 hours`;
}
}
//NEW VIDEO GAME JS BELOW

// Event listener for video game form submission
const gameForm = document.getElementById("game-form");
if(gameForm){
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


// Event listener for resetting the game list
document.getElementById("reset-game-list").addEventListener("click", function() {
    resetGameList();
});

let totalGameTime = 0;
let totalGameTimeText = document.getElementById("total-game-time");

// Function to update the total game time
function updateTotalGameTime(newTime) {
    totalGameTime += newTime;
    if (totalGameTime >= 1) {
        totalGameTimeText.textContent = `Total time: ${totalGameTime.toFixed(2)} hours`;
    } else {
        totalGameTimeText.textContent = `Total time: ${(totalGameTime * 60).toFixed(2)} minutes`;
    }
}

// Function that resets the game list and time
function resetGameList() {
    const gameList = document.getElementById("games");
    gameList.replaceChildren(); 
    totalGameTime = 0;
    totalGameTimeText.textContent = `Total time: 0 hours`;
}
}
// //Function to save the games to a list 
// function saveGameList() { 
//     const gameList = document.getElementById("games");
//     const games = []; //Empty to store games 
//     gameList.querySelectorAll("li").forEach(item => {
//         games.push(item.textContent);
//     });
//     localStorage.setItem("games", JSON.stringify(games)); //Save the games to local storage
//     localStorage.setItem("totalGameTime", totalGameTime); //Save the total game time to local storage
// }

// //Function to load the games from the list
// function loadGameList() {
//     const games = JSON.parse(localStorage.getItem("games"));
//     if (games) {
//         const gameList = document.getElementById("games");
//         games.forEach(game => {
//             const listItem = document.createElement("li");
//             listItem.textContent = game;
//             gameList.appendChild(listItem);
//         });
//     }
//     else{
//         games = [];
//     }
//     totalGameTime = (localStorage.getItem("totalGameTime")); //Load the total game time from local storage
//     // Same function as earlier to convert to hours or minutes
//     if (totalGameTime >= 1) {
//         totalGameTimeText.textContent = `Total time: ${totalGameTime.toFixed(2)} hours`;
//     } else {
//         totalGameTimeText.textContent = `Total time: ${(totalGameTime * 60).toFixed(2)} minutes`;
//     }   
// }
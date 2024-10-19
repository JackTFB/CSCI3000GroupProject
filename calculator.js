// TODO Write basic calculator function for calculator
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
    listItem.textContent = `${showName} - ${episodes} episodes, ${duration} min/episode, Total: ${totalTimeForShow.toFixed(2)} hours`;
    showList.appendChild(listItem);

    // Update the total watch time
    updateTotalTime(totalTimeForShow);

    // Clear the form
    document.getElementById("anime-form").reset();
});

let totalTime = 0;

function updateTotalTime(newTime) {
    totalTime += newTime;
    document.getElementById("total-time").textContent = `Total time: ${totalTime.toFixed(2)} hours`;
}
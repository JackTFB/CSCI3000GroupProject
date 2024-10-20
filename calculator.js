// TODO Write basic calculator function for calculator
document.getElementById("anime-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const showName = document.getElementById("show-name").value;
    const episodes = parseInt(document.getElementById("episodes").value);
    const duration = parseInt(document.getElementById("duration").value);

    // Calculate total time for the show
    const totalTimeForShow = (episodes * duration) / 60; // in hours

    /*if (totalTimeForShow > 1){

    }
    Want to represnt in minutes if not a whole hour 
    */ 

    // Add the show to the list
    const showList = document.getElementById("shows");
    const listItem = document.createElement("li");
    if(totalTimeForShow>=1){
    listItem.textContent = `${showName} - ${episodes} episodes, ${duration} min/episode, Total: ${totalTimeForShow.toFixed(2)} hours`;
    }
    else{
        listItem.textContent = `${showName} - ${episodes} episodes, ${duration} min/episode, Total: ${(totalTimeForShow*60).toFixed(2)} minutes`;
    }
    showList.appendChild(listItem);

    // Update the total watch time
    updateTotalTime(totalTimeForShow);

    // Clear the form
    document.getElementById("anime-form").reset();
});

document.getElementById("reset-list").addEventListener("click", function(){
    resetList(); 
})

let totalTime = 0;
let totalTimeText = document.getElementById("total-time");

function updateTotalTime(newTime) {
    totalTime += newTime;
    if(totalTime>1){
        totalTimeText.textContent = `Total time: ${totalTime.toFixed(2)} hours`;
    }
    else{
        totalTimeText.textContent = `Total time: ${(totalTime*60).toFixed(2)} minutes`;
    }
    //document.getElementById("total-time").textContent = `Total time: ${totalTime.toFixed(2)} hours`;
    //totalTimeText.textContent = `Total time: ${totalTime.toFixed(2)} hours`;
}

// Function that resets show list and time 
function resetList(){
    showList = document.getElementById("shows");
    showList.replaceChildren(); // Replace with emptiness 
    totalTime = 0; 
    totalTimeText.textContent = `Total time: 0 hours`;
}

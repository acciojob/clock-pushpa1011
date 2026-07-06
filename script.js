const timer = document.getElementById("timer");

function updateTimer() {
    const now = new Date();

    // Format exactly like: 2/27/2023, 1:04:46 PM
    timer.textContent = now.toLocaleString();
}

// Display immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
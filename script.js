// Format: "Month Day, Year Hour:Minute:Second"
// Example: "July 21, 2024 15:00:00" (for 3 PM on July 21, 2024)
const targetDate = new Date("May 24, 2025 16:00:00").getTime();

const countdownFunction = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find between now and the target date
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display results
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        document.getElementById("event-message").innerHTML = "IM HEREEE AGAINNNN"; // Or any message
        document.querySelector(".countdown-timer").style.display = "none"; // Hide the timer
    }
}, 1000); // Update every 1 second

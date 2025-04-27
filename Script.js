// *** IMPORTANT: Set your target date and time here! ***
// Format: "Month Day, Year Hour:Minute:Second"
// Example: "July 21, 2024 15:00:00" (for 3 PM on July 21, 2024)
// Use 24-hour format for time.
const targetDate = new Date("May 3, 2025 10:00:00").getTime();

const countdownFunction = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the target date
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        document.getElementById("event-message").innerHTML = "IM HEREEEEEEEE"; // Or any message
        document.querySelector(".countdown-timer").style.display = "none"; // Hide the timer
    }
}, 1000); // Update every 1 second
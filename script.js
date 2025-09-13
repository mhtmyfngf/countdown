const countdowns = [
    {
        id: "countdown1",
        targetDate: new Date("October 10, 2025 14:00:00").getTime(),
        eventMessage: "Woah what the heck are you doing here😉 ",
        type: "countdown", 
        elements: {
            days: "days1",
            hours: "hours1",
            minutes: "minutes1",
            seconds: "seconds1",
            message: "event-message1",
            timerContainer: "countdown-timer1"
        }
    },
    {
        id: "countdown2",
        targetDate: new Date("February 16, 2025 00:00:00").getTime(),
        eventMessage: "uhhh",
        type: "countup",
        elements: {
            years: "years2",
            days: "days2",
            hours: "hours2",
            minutes: "minutes2",
            seconds: "seconds2",
            message: "event-message2",
            timerContainer: "countdown-timer2"
        }
    }
];

function initializeCountdown(countdownConfig) {
    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        let distance;

        if (countdownConfig.type === "countdown") {
            distance = countdownConfig.targetDate - now;
        } else if (countdownConfig.type === "countup") {
            distance = now - countdownConfig.targetDate; // Calculate time elapsed
        }

        // Only display positive values for countdown, or continuously for count-up
        if (distance >= 0 || countdownConfig.type === "countup") {
            let years = 0;
            if (countdownConfig.type === "countup" && countdownConfig.elements.years) {
                // Approximate years for count-up
                // Using 365.25 days per year for better average accuracy
                years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
                distance -= years * (1000 * 60 * 60 * 24 * 365.25); // Subtract years from distance
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display years if element exists
            if (countdownConfig.elements.years) {
                document.getElementById(countdownConfig.elements.years).innerHTML = years;
            }
            // Display other results
            document.getElementById(countdownConfig.elements.days).innerHTML = days;
            document.getElementById(countdownConfig.elements.hours).innerHTML = hours;
            document.getElementById(countdownConfig.elements.minutes).innerHTML = minutes;
            document.getElementById(countdownConfig.elements.seconds).innerHTML = seconds;
        }


        // Logic for when the timer 'ends' (for countdown)
        if (countdownConfig.type === "countdown" && distance < 0) {
            clearInterval(countdownFunction);
            if (countdownConfig.elements.years) {
                document.getElementById(countdownConfig.elements.years).innerHTML = "0";
            }
            document.getElementById(countdownConfig.elements.days).innerHTML = "0";
            document.getElementById(countdownConfig.elements.hours).innerHTML = "0";
            document.getElementById(countdownConfig.elements.minutes).innerHTML = "0";
            document.getElementById(countdownConfig.elements.seconds).innerHTML = "0";
            document.getElementById(countdownConfig.elements.message).innerHTML = countdownConfig.eventMessage;
            document.getElementById(countdownConfig.elements.timerContainer).style.display = "none";
        }
    }, 1000);
}

//do the thing cuh
countdowns.forEach(config => {
     if (document.getElementById(config.id)) { //lock in
        initializeCountdown(config);
    }
});



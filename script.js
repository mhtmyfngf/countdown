const countdowns = [
    {
        id: "countdown1",
        targetDate: new Date("August 29, 2025 17:5:00").getTime(),
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
        targetDate: new Date("February 16, 2024 00:00:00").getTime(),
        eventMessage: "uhhh",
        type: "countup",
        elements: {
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
            distance = now - countdownConfig.targetDate;
        }

        if (distance >= 0 || countdownConfig.type === "countup") {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById(countdownConfig.elements.days).innerHTML = days;
            document.getElementById(countdownConfig.elements.hours).innerHTML = hours;
            document.getElementById(countdownConfig.elements.minutes).innerHTML = minutes;
            document.getElementById(countdownConfig.elements.seconds).innerHTML = seconds;
        }


        if (countdownConfig.type === "countdown" && distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById(countdownConfig.elements.days).innerHTML = "0";
            document.getElementById(countdownConfig.elements.hours).innerHTML = "0";
            document.getElementById(countdownConfig.elements.minutes).innerHTML = "0";
            document.getElementById(countdownConfig.elements.seconds).innerHTML = "0";
            document.getElementById(countdownConfig.elements.message).innerHTML = countdownConfig.eventMessage;
            document.getElementById(countdownConfig.elements.timerContainer).style.display = "none";
        }
    }, 1000);
}

// Initialize all countdowns
countdowns.forEach(config => {
    if (document.getElementById(config.id)) { //lock in
        initializeCountdown(config);
    }
});

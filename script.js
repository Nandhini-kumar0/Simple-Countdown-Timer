let countdown;
let timeLeft = 0;
let isPaused = false;

function setTimer(minutes) {
    timeLeft = minutes * 60;
    displayTime(timeLeft);
}

function startTimer() {
    if (countdown) clearInterval(countdown);
    isPaused = false;
    countdown = setInterval(() => {
        if (timeLeft > 0 && !isPaused) {
            timeLeft--;
            displayTime(timeLeft);
        } else if (timeLeft === 0) {
            clearInterval(countdown);
            playAlert();
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = !isPaused;
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = 0;
    displayTime(timeLeft);
}

function displayTime(seconds) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const remainingSeconds = String(seconds % 60).padStart(2, '0');
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = remainingSeconds;
}

function playAlert() {
    const alertSound = document.getElementById('alertSound');
    alertSound.play();
}

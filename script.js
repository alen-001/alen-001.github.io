// Existing JavaScript

const display = document.querySelector('.dis');
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        isRunning = true;
        timer = setInterval(updateTime, 10);
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function reset() {
    display.textContent = '00:00:00:00';
    isRunning = false;
    elapsedTime = 0;
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString();
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60).toString();
    let seconds = Math.floor((elapsedTime / 1000) % 60).toString();
    let milliseconds = Math.floor((elapsedTime % 1000) / 10).toString();
    let time = hours.padStart(2, '0') + ':' + minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0') + ':' + milliseconds.padStart(2, '0');
    display.textContent = time;
}

// Pomodoro timer logic
let pomodoroTimer;
let pomodoroRunning = false;
let pomodoroTime = 25 * 60 * 1000; // 25 minutes in milliseconds
let pomodoroStartTime = 0;
let pomodoroElapsedTime = 0;

function startPomodoro() {
    if (!pomodoroRunning) {
        pomodoroStartTime = Date.now() - pomodoroElapsedTime;
        pomodoroRunning = true;
        pomodoroTimer = setInterval(updatePomodoro, 1000);
    }
}

function stopPomodoro() {
    if (pomodoroRunning) {
        clearInterval(pomodoroTimer);
        pomodoroRunning = false;
    }
}

function resetPomodoro() {
    pomodoroElapsedTime = 0;
    display.textContent = '25:00';
    pomodoroRunning = false;
    clearInterval(pomodoroTimer);
}

function updatePomodoro() {
    const currentTime = Date.now();
    pomodoroElapsedTime = currentTime - pomodoroStartTime;
    let remainingTime = pomodoroTime - pomodoroElapsedTime;

    if (remainingTime <= 0) {
        clearInterval(pomodoroTimer);
        pomodoroRunning = false;
        display.textContent = '00:00';
        alert('Time is up!');
    } else {
        let minutes = Math.floor((remainingTime / (1000 * 60)) % 60).toString();
        let seconds = Math.floor((remainingTime / 1000) % 60).toString();
        let time = minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');
        display.textContent = time;
    }
}

// Functions to switch between modes
function showStopwatch() {
    document.getElementById('stopwatch').style.display = 'block';
    document.getElementById('pomodoro').style.display = 'none';
}

function showPomodoro() {
    document.getElementById('stopwatch').style.display = 'none';
    document.getElementById('pomodoro').style.display = 'block';
}

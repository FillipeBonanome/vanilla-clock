let ms = 0;
let started = false;

const msElement = document.getElementById('ms');
const clockElement = document.getElementById('min-sec');
const startButton = document.querySelector('.startButton');

function updateStopwatch() {
    let totalSeconds = Math.floor(ms / 100);
    let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    let seconds = String(totalSeconds % 60).padStart(2, '0');
    let milliseconds = String(ms % 100).padStart(2, '0');
    clockElement.textContent = `${minutes}:${seconds}`;
    msElement.textContent = `.${milliseconds}`;
}

function toggleStart() {
    started = !started;
    startButton.textContent = started ? 'Pausar' : 'Iniciar';
}

function resetStopwatch() {
    ms = 0;
    updateStopwatch();
    started = false;
    startButton.textContent = 'Iniciar';
}

function updateMs() {
    if (!started) return;
    ms++;
    updateStopwatch();
}

setInterval(updateMs, 10);
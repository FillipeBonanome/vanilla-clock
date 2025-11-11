let timeOut = null;
let possibleHours = [];
let possibleMinutes = [];

const clockElement = document.getElementById('clock');
const hourSelect = document.getElementById('hour');
const minuteSelect = document.getElementById('minute');

function populateSelectOptions() {
    for (let i = 0; i < 24; i++) {
        const hour = String(i).padStart(2, '0');
        possibleHours.push(hour);
        const option = document.createElement('option');
        option.value = hour;
        option.textContent = hour;
        hourSelect.appendChild(option);
    }

    for (let i = 0; i < 60; i++) {
        const minute = String(i).padStart(2, '0');
        possibleMinutes.push(minute);
        const option = document.createElement('option');
        option.value = minute;
        option.textContent = minute;
        minuteSelect.appendChild(option);
    }
}

function startAlarm() {
    const selectedHour = hourSelect.value;
    const selectedMinute = minuteSelect.value;
    let interval = 0;
    const today = new Date();

    if (selectedHour < String(today.getHours()).padStart(2, '0') ||
        (selectedHour === String(today.getHours()).padStart(2, '0') && selectedMinute <= String(today.getMinutes()).padStart(2, '0'))) {
        console.log('O horário selecionado já passou hoje. O alarme será definido para amanhã.');
        interval = (parseInt(selectedHour) * 60 * 60 * 1000 + parseInt(selectedMinute) * 60 * 1000 + 24 * 60 * 60 * 1000) - (today.getHours() * 60 * 60 * 1000 + today.getMinutes() * 60 * 1000 + today.getSeconds() * 1000 + today.getMilliseconds());
    } else {
        interval = (parseInt(selectedHour) * 60 * 60 * 1000 + parseInt(selectedMinute) * 60 * 1000) - (today.getHours() * 60 * 60 * 1000 + today.getMinutes() * 60 * 1000 + today.getSeconds() * 1000 + today.getMilliseconds());
    }

    if (timeOut !== null) {
        clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
        alert('Alarme! São ' + selectedHour + ':' + selectedMinute);
    }, interval);
    console.log('Alarme definido para ' + selectedHour + ':' + selectedMinute + ' em ' + interval/1000 + ' s');

}

function stopAlarm() {
    if (timeOut !== null) {
        clearTimeout(timeOut);
        timeOut = null;
        alert("Alarme parado.");
    }
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

}

setInterval(updateClock, 1000);
updateClock();

populateSelectOptions();
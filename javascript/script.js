function updateClock() {
    //Atualiza o relógio a cada segundo
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    //Atualiza o título da página com o horário atual
    document.title = `${hours}:${minutes}:${seconds} - Relógio Online`;

    //Atualiza o dia da semana
    const dayElement = document.getElementById('day');
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const dayName = daysOfWeek[now.getDay()];

    //Atualiza o mês e o ano
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const monthName = monthNames[now.getMonth()];
    const year = now.getFullYear();

    dayElement.textContent = dayName + ', ' + now.getDate() + ' de ' + monthName + ' de ' + year;

}

setInterval(updateClock, 1000);
updateClock();
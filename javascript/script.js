const clockElement = document.getElementById('clock');
const dayElement = document.getElementById('date');
const cards = document.getElementById('cards');

const timeZones = [
    { zone: 'America/Sao_Paulo', name: 'São Paulo - Brasil' },
    { zone: 'Europe/London', name: 'Londres - Reino Unido' },
    { zone: 'Asia/Tokyo', name: 'Tóquio - Japão' },
    { zone: 'America/New_York', name: 'Nova York - EUA' },
    { zone: 'Europe/Paris', name: 'Paris - França' },
    { zone: 'Australia/Sydney', name: 'Sydney - Austrália' },
    { zone: 'Africa/Johannesburg', name: 'Joanesburgo - África do Sul' },
    { zone: 'Asia/Dubai', name: 'Dubai - Emirados Árabes Unidos' }
];

//Converte o horário para o fuso desejado
function convertTimeZone(date, timeZone) {
    return new Date(date.toLocaleString('pt-BR', { timeZone: timeZone }));
}

function updateClock() {
    //Atualiza o relógio a cada segundo
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    //Atualiza o título da página com o horário atual 
    document.title = `${hours}:${minutes}:${seconds} - Relógio Online`;

    //Atualiza o dia da semana
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const dayName = daysOfWeek[now.getDay()];

    //Atualiza o mês e o ano
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const monthName = monthNames[now.getMonth()];
    const year = now.getFullYear();

    dayElement.textContent = dayName + ', ' + now.getDate() + ' de ' + monthName + ' de ' + year;


    while(cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }

    for(let i = 0; i < timeZones.length; i++) {
        const zoneTime = convertTimeZone(now, timeZones[i].zone);
        const zoneHours = String(zoneTime.getHours()).padStart(2, '0');
        const zoneMinutes = String(zoneTime.getMinutes()).padStart(2, '0');
        const zoneSeconds = String(zoneTime.getSeconds()).padStart(2, '0');
        
        const card = document.createElement('div');
        card.className = 'card';

        const cardTime = document.createElement('p');
        cardTime.className = 'card-time';
        cardTime.textContent = `${zoneHours}:${zoneMinutes}:${zoneSeconds}`;
        
        const zoneName = document.createElement('p');
        zoneName.className = 'zone-name';
        zoneName.textContent = timeZones[i].name;
        
        card.appendChild(cardTime);
        card.appendChild(zoneName);
        cards.appendChild(card);
    }

}

setInterval(updateClock, 1000);
updateClock();
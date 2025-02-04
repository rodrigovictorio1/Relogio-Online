// Função para formatar números com dois dígitos
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

// Função para atualizar o relógio
function updateClock() {
    const now = new Date();

    // Obter horas, minutos e segundos
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    // Atualizar o relógio na página
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Obter a data atual
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('pt-BR', options);

    // Atualizar a data na página
    document.getElementById('date').textContent = currentDate;
}

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);

// Chamar a função imediatamente para evitar atraso inicial
updateClock();
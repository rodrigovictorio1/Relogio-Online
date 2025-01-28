// Função para atualizar o relógio
function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const relogio = document.getElementById('relogio');
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Função para alternar o tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Salva a preferência do tema no localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Verifica o tema salvo no localStorage e aplica ao carregar a página
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Adiciona o evento de clique ao botão de alternar tema
document.getElementById('toggleTheme').addEventListener('click', toggleTheme);

// Inicializa o relógio e aplica o tema salvo
atualizarRelogio();
applySavedTheme();

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
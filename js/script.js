// Função para atualizar o relógio
function atualizarRelogio() {
    // Obtém a data e hora atuais
    const agora = new Date();
    // Formata as horas, minutos e segundos para sempre ter dois dígitos
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    // Atualiza o conteúdo do elemento com o ID "relogio"
    const relogio = document.getElementById('relogio');
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Função para alternar entre os temas light e dark
function toggleTheme() {
    // Obtém o elemento body
    const body = document.body;
    // Alterna a classe 'dark-theme' no body
    body.classList.toggle('dark-theme');

    // Salva a preferência do tema no localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Função para aplicar o tema salvo no localStorage ao carregar a página
function applySavedTheme() {
    // Obtém o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    // Se o tema salvo for 'dark', aplica a classe 'dark-theme' ao body
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Adiciona um evento de clique ao botão de alternar tema
document.getElementById('toggleTheme').addEventListener('click', toggleTheme);

// Inicializa o relógio e aplica o tema salvo ao carregar a página
atualizarRelogio();
applySavedTheme();

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
// 1. Esconder o Loading Spinner após carregar a página
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    // Adiciona um pequeno atraso para dar efeito
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
});

// 2. Efeito Interativo no Botão
const botao = document.getElementById('btnInterativo');

botao.addEventListener('click', () => {
    // Array de frases aleatórias sobre sustentabilidade
    const dicas = [
        "Reduza o tempo no banho!",
        "Desligue as luzes ao sair do quarto.",
        "Use sacolas retornáveis sempre que puder.",
        "Recicle seu lixo eletrônico em postos específicos."
    ];
    
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    
    // Altera o estilo do botão e mostra a mensagem
    botao.style.backgroundColor = '#c8a2c8'; // Muda para lilás
    alert("Dica de Sustentabilidade: " + dicaAleatoria);
});

// 3. Efeito de Scroll Suave para o menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
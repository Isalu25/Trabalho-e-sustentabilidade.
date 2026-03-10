// Espera o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    
    const btn = document.getElementById('btnMensagem');
    const displayMensagem = document.getElementById('mensagemOculta');

    // Lista de frases aleatórias
    const dicas = [
        "🌱 Reduza o tempo de banho em 5 minutos.",
        "🔋 Prefira pilhas recarregáveis.",
        "♻️ Separe o lixo orgânico do reciclável.",
        "🚲 Se puder, vá de bicicleta ou caminhe!",
        "💡 Apague as luzes ao sair de um cômodo."
    ];

    // Função que acontece quando clica no botão
    btn.addEventListener('click', () => {
        // Escolhe uma dica aleatória do nosso 'array'
        const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
        
        // Coloca o texto no parágrafo
        displayMensagem.textContent = dicaAleatoria;
        
        // Faz a mensagem aparecer mudando a classe CSS
        displayMensagem.className = "visible";
        
        // Efeito extra: muda a cor do botão ao clicar
        btn.style.backgroundColor = "#d6bcfa"; 
        btn.style.color = "#2d3748";
    });

});
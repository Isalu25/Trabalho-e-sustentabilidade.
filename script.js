// Espera todo o site carregar para sumir com o Spinner
window.addEventListener('load', function() {
    const loader = document.getElementById('loader-container');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1500); // 1.5 segundos de loading para dar um charme
});

// Interatividade do Botão (Slide 8)
const btn = document.getElementById('btn-interativo');
const msg = document.getElementById('mensagem-sustentavel');

const compromissos = [
    "Vou reduzir meu consumo de plástico esta semana! 🥤",
    "Vou desligar os aparelhos da tomada ao sair! 🔌",
    "Vou separar o lixo orgânico do reciclável! ♻️",
    "Vou plantar uma semente ou cuidar de uma planta hoje! 🌻"
];

btn.addEventListener('click', function() {
    // Escolhe uma frase aleatória
    const sorteio = Math.floor(Math.random() * compromissos.length);
    msg.innerText = compromissos[sorteio];
    
    // Muda a cor do fundo da mensagem como feedback visual
    msg.style.color = "#2D5A5A";
    msg.style.fontWeight = "bold";
    
    // Pequeno efeito no botão ao clicar
    btn.style.transform = "scale(0.9)";
    setTimeout(() => btn.style.transform = "scale(1)", 100);
});
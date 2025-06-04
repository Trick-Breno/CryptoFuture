// Data do evento: 15 de abril de 2025, 19:00
const dataEvento = new Date('2025-07-15T19:00:00').getTime();

function atualizarContagem() {
  const agora = new Date().getTime();
  const tempoRestante = dataEvento - agora;

  // Calcula dias, horas, minutos e segundos
  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  // Atualiza o DOM
  document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
  document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
  document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
  document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');

  // Se a contagem acabar
  if (tempoRestante < 0) {
    document.getElementById('tempo-restante').textContent = "O evento começou!";
    clearInterval(intervaloContagem);
  }
}

// Atualiza a cada segundo
const intervaloContagem = setInterval(atualizarContagem, 1000);


const perguntas = document.querySelectorAll('.faq-pergunta');

perguntas.forEach((pergunta) => {
  pergunta.addEventListener('click', () => {
    const resposta = pergunta.nextElementSibling;
    
    resposta.classList.toggle('ativa');
  });
});
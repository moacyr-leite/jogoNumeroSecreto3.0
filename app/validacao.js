function verificarChute(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor invalido</div>`;
    return;
  }
  if (numeroNaoPermitido(numero)) {
    elementoChute.innerHTML += `
    <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
    `;
    return;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
        <div>
            O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>
        </div>
    `;
  } else {
    elementoChute.innerHTML += `<div>
        O número secreto é menor <i class="fa-solid fa-arrow-up-long"></i>
    </div>`;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="restart" class="btn-jogar">Jogue Novamente</button>
    `;
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroNaoPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "restart") {
    window.location.reload();
  }
});

const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

alert(numeroSecreto);
0;
const elementoMenorValor = document.getElementById("valor-menor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("valor-maior");
elementoMaiorValor.innerHTML = maiorValor;

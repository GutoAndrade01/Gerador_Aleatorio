var numerosGerados = [];
var contador = 0;

function gerarNumeroNaoRepetido(dezenaInicial, dezenaFinal) {
  var numeroAleatorio = Math.floor(Math.random() * (dezenaFinal - dezenaInicial + 1)) + dezenaInicial;
  if (!numerosGerados.includes(numeroAleatorio)) {
    numerosGerados.push(numeroAleatorio);
    return numeroAleatorio;
  } else {
    return gerarNumeroNaoRepetido(dezenaInicial, dezenaFinal);
  }
}

function exibirNumerosGerados() {
  var numerosGeradosElement = document.getElementById("numerosGerados");
  numerosGeradosElement.innerHTML = "";

  for (var i = 0; i < numerosGerados.length; i++) {
    var listItem = document.createElement("div");
    listItem.textContent = numerosGerados[i].toString().padStart(2, "0");
    listItem.classList.add("numero");
    numerosGeradosElement.appendChild(listItem);
  }

  document.getElementById("contador").textContent = contador;
}

document.getElementById("gerarNumeros").addEventListener("click", function() {
  var dezenaInicial = parseInt(document.getElementById("dezenaInicial").value, 10);
  var dezenaFinal = parseInt(document.getElementById("dezenaFinal").value, 10);
  var quantidadeDezenas = parseInt(document.getElementById("quantidadeDezenas").value, 10);

  if (isNaN(dezenaInicial) || isNaN(dezenaFinal) || isNaN(quantidadeDezenas) || dezenaInicial < 0 || dezenaInicial > 99 || dezenaFinal < 0 || dezenaFinal > 99 || dezenaInicial > dezenaFinal || quantidadeDezenas < 1 || quantidadeDezenas > 100) {
    alert("Por favor, insira valores válidos para as dezenas (entre 00 e 99), a dezena inicial deve ser menor ou igual à dezena final e a quantidade de dezenas deve ser entre 1 e 100.");
    return;
  }

  numerosGerados = [];
  contador = 0;

  for (var i = 0; i < quantidadeDezenas; i++) {
    gerarNumeroNaoRepetido(dezenaInicial, dezenaFinal);
    contador++;
  }

  exibirNumerosGerados();
});

document.getElementById("ordenarNumeros").addEventListener("click", function() {
  numerosGerados.sort(function(a, b) {
    return a - b; // Ordenação ascendente
  });

  exibirNumerosGerados();
});
function callPage() {
  // Redirecionar para a página desejada
  window.location.href = "pagina-alvo.html";
}

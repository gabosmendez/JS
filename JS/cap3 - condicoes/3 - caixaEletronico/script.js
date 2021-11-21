function mostrarNotas(){
  let inCash = document.getElementById("inCash");
  let outCem = document.getElementById("outCem");
  let outCinquenta = document.getElementById("outCinquenta");
  let outDez = document.getElementById("outDez");

  //limpa mensagens, caso segunda execução
  outCem.textContent = "";
  outCinquenta.textContent = "";
  outDez.textContent = "";
  
  let saque = Number(inCash.value);
  if (saque === 0 || isNaN(saque)) {
    alert("Por favor, informe o valor corretamente!");
    inCash.focus();
    return;
  }

  //verifica se saque não é múltiplo de 10
  if (saque % 10 !== 0){
    alert("Desculpe, valor inválido para as notas disponíveis!");
    inCash.focus();
    return;
  }

  //calcula notas de 100, 50 e 10
  let notasCem = Math.floor(saque/100);
  let resto = saque % 100;
  let notasCinquenta = Math.floor(resto/50);
  resto = resto % 50;
  let notasDez = Math.floor(resto/10);

  if (notasCem > 0){
    outCem.textContent = "Notas de R$100: " + notasCem;
  }
  if (notasCinquenta > 0){
    outCinquenta.textContent = "Notas de R$50: " + notasCinquenta;
  }
  if (notasDez > 0){
    outDez.textContent = "Notas de R$10: " + notasDez;
  }
}
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", mostrarNotas);
  
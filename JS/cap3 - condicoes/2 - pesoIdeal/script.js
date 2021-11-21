function calcularPeso(){
  let inName = document.getElementById("inName")
  let rdMasculino = document.getElementById("rdMasculino")
  let rdFeminino = document.getElementById("rdFeminino")
  let inAltura = document.getElementById("altura")
  let outResposta = document.getElementById("outResposta")

  let nome = inName.value
  let masculino = rdMasculino.checked
  let feminino = rdFeminino.checked
  let altura = Number(inAltura.value)

  //verifica se nome e campos de seleção foram selecionados
  if (nome === "" || (masculino === false && feminino === false)) {
    alert("Por favor, preencha os dados corretamente!");
    inName.focus(); //posiciona o foco no campo de edição
    return;
  }

  //se altura for vazia ou NaN: not a number
  if (altura === 0 || isNaN(altura)){
    alert("Por favor, preencha o campo altura com números e em metros!");
    inAltura.focus(); //posiciona o foco no campo de edição
    return;
  }

  //se masculino (significa masculino == true)
  if (masculino){
    var peso = 22*Math.pow(altura,2); //eleva ao quadrado
  } else {
    var peso = 21*Math.pow(altura,2);
  }

  //apresenta a resposta
  outResposta.textContent = nome + ", teu peso ideal é " + peso.toFixed(2) + " kg";
}

let btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularPeso);


//limpar campos
function limparCampos(){
  //recarrega a página
  location.reload();
  document.getElementById("inName").focus();
}

let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);
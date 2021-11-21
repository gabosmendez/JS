function calcularMedia(){
  //cria referência aos elementos da página
  let inName = document.getElementById("inName");
  let inNota1 = document.getElementById("inNota1");
  let inNota2 = document.getElementById("inNota2");

  //obtém os conteúdos dos campos de edição da página
  let nome = inName.value;
  let nota1 = Number(inNota1.value);
  let nota2 = Number(inNota2.value);

  //calcula média das notas
  let media = ((nota1+nota2)/2);

  //apresenta a média (altera o conteúdo do elemento outMedia)
  outMedia.textContent = "Média das notas: " + media.toFixed(1);

  //cria as condições
  if (media >= 7){
    outSituacao.textContent = "Parabéns, " + nome + "! Você foi aprovado(a)!";
    outSituacao.style.color = "green";
  } else if (media >= 5){
    outSituacao.textContent = "Você está em exame, " + nome;
    outSituacao.style.color = "grey";
  } else{
    outSituacao.textContent = "Você está reprovado(a), " + nome;
    outSituacao.style.color = "red";
  }
}

//cria uma referência ao elemento btResultado (botão)
let btResultado = document.getElementById("btResultado");
//registra um evento associado ao botão, para carregar uma função
btResultado.addEventListener("click", calcularMedia);
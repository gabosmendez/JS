let toast = document.querySelector('.toast');
let nameCadastro = document.querySelector('#inputCadastro');
let btCadastrar = document.querySelector('#btCadastrar');
let nameCadastrado = nameCadastro.value;

function removerToast (){
  toast.classList.remove('visible');
}

btCadastrar.onclick = function (){
  toast.classList.add('visible');
  setTimeout (removerToast, 5000);
  toast.textContent = nameCadastrado + ', cadastro realizado com sucesso!';
}
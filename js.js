window.onscroll = function () {
  var backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
};

function validar() {
  var Nome_do_Usuario = contato.Nome_do_Usuario.value;
  var email = contato.email.value;
  var telefone = contato.telefone.value;
  var avaliacao = contato.querySelector("select").value;

  if (Nome_do_Usuario == "") {
    alert("Por favor preencha o campo com o seu Nome de Usuário");
    contato.Nome_do_Usuario.focus();
    return false;
  }

  if (email == "") {
    alert("Por favor preencha o campo com o seu email");
    contato.email.focus();
    return false;
  }

  if (telefone == "") {
    alert("Por favor preencha o campo com o seu telefone");
    contato.telefone.focus();
    return false;
  }

  if (avaliacao == "") {
    alert("Por favor selecione uma nota de avaliação do site");
    contato.querySelector("select").focus();
    return false;
  }

  alert("Mensagem enviada!");

  contato.reset();
  return true;
}

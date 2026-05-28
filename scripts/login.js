const cadastros = {
  "nati@gmail.com": {user: "Nati", password: "12345678"},
  "marcos@gmail.com": {user: "Marcos", password: "87654321"},
  "cesar@gmail.com": {user: "César", password: "09876543"},
  "trainees@gmail.com": {user: "Trainees", password: "traineesejcomp"},
  "ejcomp@email.com": {user: "EJCOMP", password: "ejcomp"}
}


function fazerLogin() {
  const email = document.getElementById("email").value.trim()
  const senha = document.getElementById("senha").value.trim()

  if (email == "" || senha == "") {
    alert("Preencha todos os campos")
    return;
  }

  if (cadastros[email] && cadastros[email].password === senha) {
    localStorage.setItem("usuarioLogado", cadastros[email].user);
    document.getElementById('form').reset();
    window.location.href = '../index.html';
    return;
  }

  alert("E-mail e/ou senha inválido(s).");
  document.getElementById('form').reset();
  return;
}
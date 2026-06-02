const cadastros: { [email: string]: { user: string; password: string } } = {
  "nati@gmail.com": { user: "Nati", password: "12345678" },
  "marcos@gmail.com": { user: "Marcos", password: "87654321" },
  "cesar@gmail.com": { user: "César", password: "09876543" },
  "trainees@gmail.com": { user: "Trainees", password: "traineesejcomp" },
  "ejcomp@email.com": { user: "EJCOMP", password: "ejcomp" },
};

function fazerLogin() {
  const email = document.getElementById("email") as HTMLInputElement;
  const senha = document.getElementById("senha") as HTMLInputElement;

  if (email.value == "" || senha.value == "") {
    alert("Preencha todos os campos");
    return;
  }

  if (
    cadastros[email.value] &&
    cadastros[email.value].password === senha.value
  ) {
    localStorage.setItem("usuarioLogado", cadastros[email.value].user);
    (document.getElementById("form") as HTMLFormElement).reset();
    window.location.href = "../index.html";
    return;
  }

  alert("E-mail e/ou senha inválido(s).");
  (document.getElementById("form") as HTMLFormElement).reset();
  return;
}

export {}

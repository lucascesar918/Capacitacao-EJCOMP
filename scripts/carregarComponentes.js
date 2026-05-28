async function carregarComponentes() {
    const respostaHeader = await fetch('/componentes/header.html');
    if (respostaHeader.ok) {
        document.getElementById('header').innerHTML = await respostaHeader.text();
        const usuarioLogado = localStorage.getItem("usuarioLogado");
        if (usuarioLogado) {
            document.getElementById('usuario').textContent = usuarioLogado;
        }
    }

    const respostaFooter = await fetch('/componentes/footer.html');
    if (respostaFooter.ok) {
        document.getElementById('footer').innerHTML = await respostaFooter.text();
    }
}

function checkLogin() {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
        window.location.href = '/carrinho.html';
    }
    else {
        alert("Faça login para acessar o carrinho.");
        window.location.href = '/login.html';
    }
}

function clickPerfil() {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
        const opcao = confirm(`Logado como ${usuarioLogado}. Deseja sair?`);
        if (opcao) {
            localStorage.removeItem("usuarioLogado");
            alert("Logout realizado com sucesso!");
            window.location.href = '/index.html';
        }
    }
    else {
        window.location.href = '/login.html';
    }
}

carregarComponentes()
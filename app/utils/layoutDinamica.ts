export async function carregarComponentes(): Promise<void> {
    const respostaHeader = await fetch('/componentes/header.html');
    if (respostaHeader.ok) {
        const header = document.getElementById('header');
        if (header) {
            header.innerHTML = await respostaHeader.text();
            const usuarioLogado = localStorage.getItem('usuarioLogado');
            if (usuarioLogado) {
                const usuario = document.getElementById('usuario');
                if (usuario) {
                    usuario.textContent = usuarioLogado;
                }
            }
        }
    }

    const respostaFooter = await fetch('/componentes/footer.html');
    if (respostaFooter.ok) {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.innerHTML = await respostaFooter.text();
        }
    }
}

export function checkLogin(): void {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        window.location.href = '/carrinho.html';
        return;
    }

    alert('Faça login para acessar o carrinho.');
    window.location.href = '/login.html';
}

export function clickPerfil(): void {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        const opcao = confirm(`Logado como ${usuarioLogado}. Deseja sair?`);
        if (opcao) {
            localStorage.removeItem('usuarioLogado');
            alert('Logout realizado com sucesso!');
            window.location.href = '/index.html';
        }
        return;
    }

    window.location.href = '/login.html';
}

carregarComponentes();
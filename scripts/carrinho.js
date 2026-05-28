const PRODUTOS = {
    "pedigree": { preco: 189.99, estoqueInicial: 3 },
    "whiskas": { preco: 168.99, estoqueInicial: 3 },
    "formula-natural": { preco: 95.71, estoqueInicial: 3 }
};

let estoqueBruto = localStorage.getItem("estoque");
let quantidadeBruta = localStorage.getItem("quantidade");

let estoque = {};
let quantidade = {};

if (estoqueBruto && estoqueBruto.trim().startsWith("{")) {
    estoque = JSON.parse(estoqueBruto);
} else {
    estoque = {
        "pedigree": PRODUTOS["pedigree"].estoqueInicial,
        "whiskas": PRODUTOS["whiskas"].estoqueInicial,
        "formula-natural": PRODUTOS["formula-natural"].estoqueInicial
    };
}

if (quantidadeBruta && quantidadeBruta.trim().startsWith("{")) {
    quantidade = JSON.parse(quantidadeBruta);
} else {
    quantidade = {
        "pedigree": 0,
        "whiskas": 0,
        "formula-natural": 0
    };
}

atualizarEstoqueECarrinho();

window.addEventListener('componentesCarregados', () => {
    atualizarEstoqueECarrinho();
});

function atualizarEstoqueECarrinho() {
    localStorage.setItem("estoque", JSON.stringify(estoque));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));

    let totalGeral = 0;

    for (const chave in PRODUTOS) {
        let elementoEstoque = document.getElementById(`estoque-quantidade-${chave}`);
        if (elementoEstoque) {
            elementoEstoque.textContent = estoque[chave];
        }

        let elementoCarrinhoQtd = document.getElementById(`carrinho-quantidade-${chave}`);
        let elementoTotalItem = document.getElementById(`total-${chave}`);

        if (elementoCarrinhoQtd && elementoTotalItem) {
            let valorTotalItem = quantidade[chave] * PRODUTOS[chave].preco;
            totalGeral += valorTotalItem;

            elementoCarrinhoQtd.textContent = quantidade[chave];
            elementoTotalItem.textContent = valorTotalItem.toFixed(2);
        }
    }

    let elementoTotalPagar = document.getElementById("total-pagar");
    if (elementoTotalPagar) {
        elementoTotalPagar.textContent = totalGeral.toFixed(2);
    }
}

function adicionarAoCarrinho(chaveId) {
    if (estoque[chaveId] !== undefined && estoque[chaveId] > 0) {
        estoque[chaveId]--;
        quantidade[chaveId]++;
        atualizarEstoqueECarrinho();
    } else {
        alert("Produto esgotado!");
    }
}

function removerDoCarrinho(chaveId) {
    if (quantidade[chaveId] !== undefined && quantidade[chaveId] > 0) {
        estoque[chaveId]++;
        quantidade[chaveId]--;
        atualizarEstoqueECarrinho();
    } else {
        alert("Não há produtos no carrinho para remover!");
    }
}
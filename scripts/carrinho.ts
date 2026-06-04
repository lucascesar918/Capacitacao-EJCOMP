interface ProdutosTipagem {
    preco: number;
    estoqueInicial: number;
}

type ProdutoChaves = "pedigree" | "whiskas" | "formula-natural";

type ProdutosMapeados = Record<ProdutoChaves, ProdutosTipagem>;

type EstoqueTipagem = Record<ProdutoChaves, number>;
type QuantidadeTipagem = Record<ProdutoChaves, number>;

const PRODUTOS: ProdutosMapeados = {
    "pedigree": { preco: 189.99, estoqueInicial: 3 },
    "whiskas": { preco: 168.99, estoqueInicial: 3 },
    "formula-natural": { preco: 95.71, estoqueInicial: 3 }
};

let estoqueBruto = localStorage.getItem("estoque");
let quantidadeBruta = localStorage.getItem("quantidade");

let estoque: EstoqueTipagem;
let quantidade: QuantidadeTipagem;

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

function atualizarEstoqueECarrinho(): void {
    localStorage.setItem("estoque", JSON.stringify(estoque));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));

    let totalGeral = 0;

    const chaves = Object.keys(PRODUTOS) as ProdutoChaves[];

    for (const chave of chaves) {
        let elementoEstoque = document.getElementById(`estoque-quantidade-${chave}`);
        if (elementoEstoque) {
            elementoEstoque.textContent = String(estoque[chave]);
        }

        let elementoCarrinhoQtd = document.getElementById(`carrinho-quantidade-${chave}`);
        let elementoTotalItem = document.getElementById(`total-${chave}`);

        if (elementoCarrinhoQtd && elementoTotalItem) {
            let valorTotalItem = quantidade[chave] * PRODUTOS[chave].preco;
            totalGeral += valorTotalItem;

            elementoCarrinhoQtd.textContent = String(quantidade[chave]);
            elementoTotalItem.textContent = valorTotalItem.toFixed(2);
        }
    }

    let elementoTotalPagar = document.getElementById("total-pagar");
    if (elementoTotalPagar) {
        elementoTotalPagar.textContent = totalGeral.toFixed(2);
    }
}

function adicionarAoCarrinho(chaveId: ProdutoChaves): void {
    if (estoque[chaveId] > 0) {
        estoque[chaveId]--;
        quantidade[chaveId]++;
        atualizarEstoqueECarrinho();
    } else {
        alert("Produto esgotado!");
    }
}

function removerDoCarrinho(chaveId: ProdutoChaves): void {
    if (quantidade[chaveId] > 0) {
        estoque[chaveId]++;
        quantidade[chaveId]--;
        atualizarEstoqueECarrinho();
    } else {
        alert("Não há produtos no carrinho para remover!");
    }
}
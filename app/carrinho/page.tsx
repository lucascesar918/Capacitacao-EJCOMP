'use client';

import styles from "./page.module.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from "react";

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

export default function Carrinho() {
  const [estoque, setEstoque] = useState<EstoqueTipagem>({
    "pedigree": PRODUTOS["pedigree"].estoqueInicial,
    "whiskas": PRODUTOS["whiskas"].estoqueInicial,
    "formula-natural": PRODUTOS["formula-natural"].estoqueInicial
  });

  const [quantidade, setQuantidade] = useState<QuantidadeTipagem>({
    "pedigree": 0,
    "whiskas": 0,
    "formula-natural": 0
  });

  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const estoqueBruto = localStorage.getItem('estoque');
    const quantidadeBruta = localStorage.getItem('quantidade');

    if (estoqueBruto && estoqueBruto.trim().startsWith("{")) {
      setEstoque(JSON.parse(estoqueBruto));
    }
    if (quantidadeBruta && quantidadeBruta.trim().startsWith("{")) {
      setQuantidade(JSON.parse(quantidadeBruta));
    }
    setCarregado(true);
  }, []);

  useEffect(() => {
    if (carregado) {
      localStorage.setItem('estoque', JSON.stringify(estoque));
      localStorage.setItem('quantidade', JSON.stringify(quantidade));
    }
  }, [estoque, quantidade, carregado]);

  function adicionarAoCarrinho(chaveId: ProdutoChaves): void {
    if (estoque[chaveId] > 0) {
      setEstoque(prev => ({ ...prev, [chaveId]: prev[chaveId] - 1 }));
      setQuantidade(prev => ({ ...prev, [chaveId]: prev[chaveId] + 1 }));
    } else {
      alert("Produto esgotado!");
    }
  }

  function removerDoCarrinho(chaveId: ProdutoChaves): void {
    if (quantidade[chaveId] > 0) {
      setEstoque(prev => ({ ...prev, [chaveId]: prev[chaveId] + 1 }));
      setQuantidade(prev => ({ ...prev, [chaveId]: prev[chaveId] - 1 }));
    } else {
      alert("Não há produtos no carrinho para remover!");
    }
  }

  const totalGeral = (Object.keys(PRODUTOS) as ProdutoChaves[]).reduce((acc, chave) => {
    return acc + (quantidade[chave] * PRODUTOS[chave].preco);
  }, 0);

  return (
    <main>
      <Header />
      <hr className={styles["divisor-carrinho"]} />
      <h1 className={styles["h1-carrinho"]}>Produtos adicionados ao carrinho</h1>
      <section id="carrinho">
        <ul className={styles.carrinho}>
          <li className={styles.carrinho}>
            <div className={styles["carrinho-produto"]}>
              <img src="/assets/racao1.jpg" alt="Ração Pedigree" className={styles["img-carrinho-produto"]} />
              <div className={styles["carrinho-produto-conteudo"]}>
                <h3 className={styles["carrinho-nome"]}>Ração Pedigree Carne Frango Cães Adultos 15 kg</h3>
                <p className={styles["carrinho-descricao"]}>Ração Premium 100% completa e balanceada.</p>
                <p className={styles["carrinho-preco"]}>UNIDADE: R$ 189,99</p>
              </div>
              <div className={styles["carrinho-botao"]}>
                <button type="button" onClick={() => adicionarAoCarrinho('pedigree')}>ADICIONAR AO CARRINHO</button>
                <button type="button" onClick={() => removerDoCarrinho('pedigree')}>REMOVER DO CARRINHO</button>
                <label className={styles.quantidade}>Quantidade: <span>{quantidade['pedigree']}</span>/3</label>
                <label className={styles["carrinho-preco"]}>TOTAL: R$ <span>{(quantidade['pedigree'] * PRODUTOS['pedigree'].preco).toFixed(2)}</span></label>
              </div>
            </div>
          </li>
          <li className={styles.carrinho}>
            <div className={styles["carrinho-produto"]}>
              <img src="/assets/racao2.jpg" alt="Ração Whiskas" className={styles["img-carrinho-produto"]} />
              <div className={styles["carrinho-produto-conteudo"]}>
                <h3 className={styles["carrinho-nome"]}>Whiskas Ração Carne Para Gatos Adultos 10Kg</h3>
                <p className={styles["carrinho-descricao"]}>Ração com prebióticos que contribuem para digestão saudável.</p>
                <p className={styles["carrinho-preco"]}>UNIDADE: R$ 168,99</p>
              </div>
              <div className={styles["carrinho-botao"]}>
                <button type="button" onClick={() => adicionarAoCarrinho('whiskas')}>ADICIONAR AO CARRINHO</button>
                <button type="button" onClick={() => removerDoCarrinho('whiskas')}>REMOVER DO CARRINHO</button>
                <label className={styles.quantidade}>Quantidade: <span>{quantidade['whiskas']}</span>/3</label>
                <label className={styles["carrinho-preco"]}>TOTAL: R$ <span>{(quantidade['whiskas'] * PRODUTOS['whiskas'].preco).toFixed(2)}</span></label>
              </div>
            </div>
          </li>
          <li className={styles.carrinho}>
            <div className={styles["carrinho-produto"]}>
              <img src="/assets/racao3.jpg" alt="Ração Fórmula Natural" className={styles["img-carrinho-produto"]} />
              <div className={styles["carrinho-produto-conteudo"]}>
                <h3 className={styles["carrinho-nome"]}>Fórmula Natural Fresh Meat Cães Adultos 2,5Kg</h3>
                <p className={styles["carrinho-descricao"]}>Alimento completo com proteínas nobres.</p>
                <p className={styles["carrinho-preco"]}>UNIDADE: R$ 95,71</p>
              </div>
              <div className={styles["carrinho-botao"]}>
                <button type="button" onClick={() => adicionarAoCarrinho('formula-natural')}>ADICIONAR AO CARRINHO</button>
                <button type="button" onClick={() => removerDoCarrinho('formula-natural')}>REMOVER DO CARRINHO</button>
                <label className={styles.quantidade}>Quantidade: <span>{quantidade['formula-natural']}</span>/3</label>
                <label className={styles["carrinho-preco"]}>TOTAL: R$ <span>{(quantidade['formula-natural'] * PRODUTOS['formula-natural'].preco).toFixed(2)}</span></label>
              </div>
            </div>
          </li>
        </ul>
        <h2 className={styles["h2-carrinho"]}>Total dos produtos: R$ <span>{totalGeral.toFixed(2)}</span></h2>
      </section>
      <hr className={styles["divisor-carrinho"]} />
      <Footer />
    </main>
  );
}
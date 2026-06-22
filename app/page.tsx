'use client';

import { useEffect } from 'react';
import { adicionarAoCarrinho, atualizarEstoqueECarrinho } from './utils/carrinho';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    atualizarEstoqueECarrinho();
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section id="sobre" className={styles.sobreSection}>
          <article className={styles.sobreCard}>
            <h2 className={styles.sobreTitle}>Quem somos?</h2>
            <p className={styles.description}>
              Somos um pet shop apaixonado por animais e dedicado ao bem-estar do
              seu melhor amigo. Trabalhamos com produtos de qualidade, atendimento
              especializado e serviços pensados para garantir mais saúde, conforto
              e felicidade para cães e gatos.
            </p>
          </article>

          <article className={styles.sobreCard}>
            <h2 className={styles.sobreTitle}>Por que escolher a gente?</h2>
            <p className={styles.description}>
              Oferecemos produtos de qualidade, atendimento atencioso e um
              ambiente pensado especialmente para o conforto e cuidado do seu pet.
              Nosso compromisso é garantir confiança, praticidade e carinho em
              cada atendimento.
            </p>
          </article>

          <article className={styles.sobreCard}>
            <h2 className={styles.sobreTitle}>O que fazemos?</h2>
            <p className={styles.description}>
              Trabalhamos com venda de rações, acessórios, brinquedos e produtos
              essenciais para o dia a dia do seu animal de estimação. Além disso,
              buscamos oferecer soluções práticas e seguras para cuidar da saúde e
              felicidade do seu pet.
            </p>
          </article>
        </section>

        <div className={styles.divisor} />

        <section id="servicos" className={styles.section}>
          <h2 className={styles.title}>Nossos serviços para o seu pet</h2>
          <ul className={styles.cardGrid}>
            <li className={styles.card}>
              <div className={styles.cardContent}>
                <img src="/assets/banhotosa2.jpeg" alt="Banho e tosa" className={styles.cardImage} />
                <h3 className={styles.cardTitle}>Banho e tosa</h3>
                <p className={styles.description}>
                  Higiene completa com produtos de qualidade para deixar seu pet
                  limpo, cheiroso e confortável.
                </p>
              </div>
              <button type="button" className={styles.button}>CONHECER SERVIÇO</button>
            </li>

            <li className={styles.card}>
              <div className={styles.cardContent}>
                <img src="/assets/hospedagem.jpeg" alt="Hospedagem" className={styles.cardImage} />
                <h3 className={styles.cardTitle}>Hospedagem</h3>
                <p className={styles.description}>
                  Um ambiente seguro e confortável para cuidar do seu pet enquanto
                  você viaja.
                </p>
              </div>
              <button type="button" className={styles.button}>CONHECER SERVIÇO</button>
            </li>

            <li className={styles.card}>
              <div className={styles.cardContent}>
                <img src="/assets/passeio.jpeg" alt="Passeios" className={styles.cardImage} />
                <h3 className={styles.cardTitle}>Passeios</h3>
                <p className={styles.description}>
                  Caminhadas supervisionadas para manter seu animal ativo e saudável.
                </p>
              </div>
              <button type="button" className={styles.button}>CONHECER SERVIÇO</button>
            </li>
          </ul>
        </section>

        <div className={styles.divisor} />

        <section id="produtos" className={styles.section}>
          <h2 className={styles.title}>Nossos produtos para o seu pet</h2>
          <ul className={styles.cardGrid}>
            <li className={styles.card}>
              <div className={styles.cardContent}>
                <img src="/assets/racao1.jpg" alt="Ração Pedigree" className={styles.cardImage} />
                <h3 className={styles.cardTitle}>
                  Ração Pedigree Carne Frango e Cereais Cães Adultos Raças Médias e Grandes 15 kg
                </h3>
                <p className={styles.description}>
                  Ração Premium 100% completa e balanceada para cães adultos.
                </p>
                <p className={styles.price}>R$189,99</p>
              </div>
              <button type="button" className={styles.button} onClick={() => adicionarAoCarrinho('pedigree')}>
                ADICIONAR AO CARRINHO
              </button>
              <p className={styles.quantity}>Restam apenas <span id="estoque-quantidade-pedigree">3</span></p>
            </li>

            <li className={styles.card}>
              <div className={styles.cardContent}>
                <img src="/assets/racao2.jpg" alt="Ração Whiskas" className={styles.cardImage} />
                <h3 className={styles.cardTitle}>Whiskas Ração Whiskas Carne Para Gatos Adultos 10Kg</h3>
                <p className={styles.description}>
                  Ração com prebióticos que contribuem para digestão saudável.
                </p>
                <p className={styles.price}>R$168,99</p>
              </div>
              <button type="button" className={styles.button} onClick={() => adicionarAoCarrinho('whiskas')}>
                ADICIONAR AO CARRINHO
              </button>
              <p className={styles.quantity}>Restam apenas <span id="estoque-quantidade-whiskas">3</span></p>
            </li>

            <li className={styles.card}>
              <div className={styles.cardContent}>
                <img src="/assets/racao3.jpg" alt="Ração Fórmula Natural" className={styles.cardImage} />
                <h3 className={styles.cardTitle}>
                  Fórmula Natural Fresh Meat Ração Seca Para Cães Adultos De Médio Porte Sabor Frango 2,5Kg
                </h3>
                <p className={styles.description}>
                  Alimento completo com proteínas nobres e alta palatabilidade.
                </p>
                <p className={styles.price}>R$95,71</p>
              </div>
              <button type="button" className={styles.button} onClick={() => adicionarAoCarrinho('formula-natural')}>
                ADICIONAR AO CARRINHO
              </button>
              <p className={styles.quantity}>Restam apenas <span id="estoque-quantidade-formula-natural">3</span></p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/assets/logo.jpeg" alt="descrição da imagem" className={styles.logo} />

      <div className={styles.section}>
        <h2>Formas de pagamento</h2>
        <div className={styles.paymentIcons}>
          <img src="/assets/visa.png" alt="descrição da imagem" />
          <img src="/assets/mastercard.png" alt="descrição da imagem" />
          <img src="/assets/paypal.png" alt="descrição da imagem" />
          <img src="/assets/cartao.png" alt="descrição da imagem" />
        </div>
      </div>

      <div className={styles.section}>
        <h2 id="contato">Ouvidoria</h2>
        <div className={styles.contact}>
          <p>E-mail: petshop@gmail.com</p>
          <p>Telefone: (18) 91234-5678</p>
        </div>
      </div>
    </footer>
  );
}

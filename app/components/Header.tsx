'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [usuarioLogado, setUsuarioLogado] = useState<string | null>(null);

  useEffect(() => {
    const storedUsuario = window.localStorage.getItem('usuarioLogado');
    setUsuarioLogado(storedUsuario);

    const handleStorage = () => {
      setUsuarioLogado(window.localStorage.getItem('usuarioLogado'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleCheckLogin = () => {
    if (usuarioLogado) {
      window.location.href = '/carrinho';
      return;
    }

    alert('Faça login para acessar o carrinho.');
    window.location.href = '/login';
  };

  const handlePerfilClick = () => {
    if (usuarioLogado) {
      const opcao = confirm(`Logado como ${usuarioLogado}. Deseja sair?`);
      if (opcao) {
        window.localStorage.removeItem('usuarioLogado');
        setUsuarioLogado(null);
        alert('Logout realizado com sucesso!');
        window.location.href = '/';
      }
      return;
    }

    window.location.href = '/login';
  };

  return (
    <header className={styles.header}>
      <a href="/index.html">
        <img src="/assets/logo.jpeg" alt="Logo petshop" className={styles.logo} />
      </a>
      <nav className={styles.nav}>
        <a href="/" className={styles.linkButton}>Página Inicial</a>
        <a href="#sobre" className={styles.linkButton}>Sobre</a>
        <a href="/#servicos" className={styles.linkButton}>Serviços</a>
        <a href="/#produtos" className={styles.linkButton}>Produtos</a>
        <a href="#contato" className={styles.linkButton}>Contate-nos</a>
        <button type="button" onClick={handlePerfilClick} className={`${styles.linkButton} ${styles.loginButton}`}>
          <img src="/assets/usuario.svg" className={styles.icon} />
          <span>{usuarioLogado ?? 'Entrar'}</span>
        </button>
        <button type="button" onClick={handleCheckLogin} className={`${styles.linkButton} ${styles.iconButton}`}>
          <img src="/assets/carrinho.svg" className={styles.icon} />
        </button>
      </nav>
    </header>
  );
}
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
      window.location.href = '/carrinho.html';
      return;
    }

    alert('Faça login para acessar o carrinho.');
    window.location.href = '/login.html';
  };

  const handlePerfilClick = () => {
    if (usuarioLogado) {
      const opcao = confirm(`Logado como ${usuarioLogado}. Deseja sair?`);
      if (opcao) {
        window.localStorage.removeItem('usuarioLogado');
        setUsuarioLogado(null);
        alert('Logout realizado com sucesso!');
        window.location.href = '/index.html';
      }
      return;
    }

    window.location.href = '/login.html';
  };

  return (
    <header className={styles.header}>
      <a href="/index.html">
        <img src="/assets/logo.jpeg" alt="Logo petshop" className={styles.logo} />
      </a>
      <nav className={styles.nav}>
        <a href="/index.html" className={styles.linkButton}>Página Inicial</a>
        <a href="/index.html#sobre" className={styles.linkButton}>Sobre</a>
        <a href="/index.html#servicos" className={styles.linkButton}>Serviços</a>
        <a href="/index.html#produtos" className={styles.linkButton}>Produtos</a>
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

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [usuarioLogado, setUsuarioLogado] = useState<string | null>(null);
  const router = useRouter();

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
      router.push('/carrinho');
      return;
    }

    alert('Faça login para acessar o carrinho.');
    router.push('/login');
  };

  const handlePerfilClick = () => {
    if (usuarioLogado) {
      const opcao = confirm(`Logado como ${usuarioLogado}. Deseja sair?`);
      if (opcao) {
        window.localStorage.removeItem('usuarioLogado');
        setUsuarioLogado(null);
        alert('Logout realizado com sucesso!');
        router.push('/');
      }
      return;
    }

    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/assets/logo.jpeg" alt="Logo petshop" className={styles.logo} />
      </Link>
      
      <nav className={styles.nav}>
        <Link href="/" className={styles.linkButton}>Página Inicial</Link>
        <Link href="#sobre" className={styles.linkButton}>Sobre</Link>
        <Link href="/#servicos" className={styles.linkButton}>Serviços</Link>
        <Link href="/#produtos" className={styles.linkButton}>Produtos</Link>
        <Link href="#contato" className={styles.linkButton}>Contate-nos</Link>
        
        <button type="button" onClick={handlePerfilClick} className={`${styles.linkButton} ${styles.loginButton}`}>
          <img src="/assets/usuario.svg" className={styles.icon} alt="Perfil" />
          <span>{usuarioLogado ?? 'Entrar'}</span>
        </button>
        <button type="button" onClick={handleCheckLogin} className={`${styles.linkButton} ${styles.iconButton}`}>
          <img src="/assets/carrinho.svg" className={styles.icon} alt="Carrinho" />
        </button>
      </nav>
    </header>
  );
}
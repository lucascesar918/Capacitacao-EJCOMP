'use client';

import styles from "./page.module.css";
import { useRef } from "react";

const cadastros: { [email: string]: { user: string; password: string } } = {
  "nati@gmail.com": { user: "Nati", password: "12345678" },
  "marcos@gmail.com": { user: "Marcos", password: "87654321" },
  "cesar@gmail.com": { user: "César", password: "09876543" },
  "trainees@gmail.com": { user: "Trainees", password: "traineesejcomp" },
  "ejcomp@email.com": { user: "EJCOMP", password: "ejcomp" },
};

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleLogin() {
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    if (email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }

    const usuario = cadastros[email];

    if (usuario && usuario.password === password) {
      localStorage.setItem("usuarioLogado", usuario.user);
      window.location.href = "/";
      return;
    }

    alert("E-mail e/ou senha inválido(s).");
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <a href="/index.html">
          <img
            src="/assets/logo.jpeg"
            alt="Logo petshop"
            className={styles.logo}
          />
        </a>
      </div>
      <div className={styles.content}>
        <h1 className={styles.h1}>Faça o seu login para continuar</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
            <input type="email" id="email" ref={emailRef} className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Senha
            </label>
            <input type="password" id="password" ref={passwordRef} className={styles.input} />
          </div>
          <button type="button" className={styles.button} onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

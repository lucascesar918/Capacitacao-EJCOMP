# Projeto de Capacitacao EJCOMP

Projeto desenvolvido durante a capacitação de trainees da **Empresa Júnior de Computação (EJCOMP)**. O objetivo foi aplicar conceitos práticos de desenvolvimento web front-end e arquitetura de software.

## Autores

| [<img src="https://github.com/lucascesar918.png" width="60px;"/><br /><sub><b>Lucas César</b></sub>](https://github.com/lucascesar918) | [<img src="https://github.com/nataliacampossoares.png" width="60px;"/><br /><sub><b>Natália Campos</b></sub>](https://github.com/nataliacampossoares) | [<img src="https://github.com/marcos-sellin.png" width="60px;"/><br /><sub><b>Marcos Sellin</b></sub>](https://github.com/marcos-sellin) |
| :---: | :---: | :---: |
<br>

## Tecnologias
- Next.js (Router)
- React + TypeScript

## Como rodar

No diretório do projeto:

```bash
npm install
npm run dev
```

Para build de produção:

```bash
npm run build
npm run start
```

## Estrutura relevante

- [app/page.tsx](app/page.tsx) — página principal
- [app/utils/carrinho.ts](app/utils/carrinho.ts) — lógica compartilhada do carrinho com localStorage
- [app/components/Header.tsx](app/components/Header.tsx) — cabeçalho reutilizável
- [app/components/Footer.tsx](app/components/Footer.tsx) — rodapé reutilizável
- [app/page.module.css](app/page.module.css) — estilos da página (CSS Module)
- [app/components/Header.module.css](app/components/Header.module.css) — estilos do `Header`
- [app/components/Footer.module.css](app/components/Footer.module.css) — estilos do `Footer`
- [public](public/) — imagens e outros assets estáticos

## Problemas conhecidos / observações / boas práticas

- O projeto passou por problemas de hidratação (server vs client) durante a migração. Esses pontos foram tratados ao:
	- Tornar componentes puramente client-side onde necessário (com `use client`).
	- Evitar acesso direto a `localStorage` durante SSR, acessar só quando no navegador (o utilitário só acessa `localStorage` quando `typeof window !== 'undefined'`).
- Ainda há trabalhos a fazer na limpeza de arquivos legados e no refinamento de estilos responsivos.

## Próximos Passos
- [X] Migração para TypeScript
- [ ] Migração completa para Next
- [ ] Subir uma demonstração ao vivo do projeto

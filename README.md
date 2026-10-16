# 🛍️ ShopFamily — Landing Page Premium

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES6+">
  <img src="https://img.shields.io/badge/Design-Responsivo-60a5fa?style=for-the-badge&logo=responsive-design&logoColor=white" alt="Design Responsivo">
  <img src="https://img.shields.io/badge/Acessibilidade-WCAG-green?style=for-the-badge&logo=accessibility&logoColor=white" alt="Acessibilidade">
</p>

<p align="center">
  <strong>"O Shopping que cabe no seu bolso."</strong><br>
  Uma <em>landing page</em> institucional de alta conversão, responsiva e acessível em Dark Mode. Desenvolvida com HTML5 semântico, CSS3 com variáveis globais e JavaScript ES6+ para proporcionar máxima fluidez e interatividade.
</p>

---

## 📌 Sobre o Projeto

O **ShopFamily** é uma página de captura (*landing page*) projetada com foco em experiência do usuário (UX), acessibilidade web (A11y) e microinterações modernas. O projeto simula a interface principal de um shopping virtual voltado para o consumo familiar, unindo uma marcação semântica limpa a um *Design System* robusto em estilo *Premium Dark Slate*.

---

## 🎨 Funcionalidades e Decisões de Engenharia

| Elemento | Implementação Técnica | Impacto Visual / UX |
| :--- | :--- | :--- |
| **Paleta Dark Slate** | Tokens CSS (`--bg-dark: #0f172a`, `--text-main: #f8fafc`) | Redução da fadiga ocular e estética sofisticada alinhada a tendências de UI. |
| **Glassmorphism Header** | `backdrop-filter: blur(12px)` e posição `sticky` | Cabeçalho fixo elegante com desfoque de fundo ao rolar a página. |
| **Menu Mobile Acessível** | Gaveta lateral com suporte a atributos `aria-expanded` e tecla `ESC` | Navegação intuitiva e inclusiva para leitores de tela em smartphones. |
| **Scrollspy Dinâmico** | Observer via JS monitorando seções da página | Destaque automático no link da navbar correspondente ao conteúdo visível. |
| **Otimização de Carregamento** | Atributos `fetchpriority="high"` e `decoding="async"` na imagem Hero | Melhoria direta no indicador **LCP (Largest Contentful Paint)** do Google PageSpeed. |
| **Notificações Toast (UX)** | Injeção dinâmica de componentes de aviso ao interagir com CTAs | Feedback instantâneo para o usuário ao clicar em "Baixe nosso app" ou "Entrar". |

---

## 🛡️ Melhorias de Arquitetura, SEO e Acessibilidade

- **SEO & Social Sharing**: Configuração de meta tags para buscadores e tags **Open Graph (`og:*`)** para pré-visualização em redes sociais e apps de mensagem (WhatsApp/LinkedIn).
- **Semântica HTML5**: Substituição de contêineres genéricos por tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Navegação por Teclado**: Destaque visual customizado através da pseudo-classe `:focus-visible` e suporte à tecla `Escape` para fechar menus.
- **Acessibilidade Sensorial**: Suporte à regra `@media (prefers-reduced-motion: reduce)`, respeitando usuários com sensibilidade a animações no sistema operacional.

---

## 📱 Responsividade Total

O layout foi desenvolvido com regras fluidas de *Flexbox* e ajustado em pontos de quebra (*Media Queries*) estratégicos:

- **💻 Desktops e Notebooks (> 968px):** Disposição em duas colunas espelhadas, cabeçalho amplo com links visíveis e efeitos de hover avançados.
- **📱 Tablets (<= 968px):** Reorganização vertical do conteúdo Hero, textos centralizados e dimensões otimizadas para o toque.
- **📲 Smartphones (<= 768px):** Ativação do menu hambúrguer animado com transição fluida da gaveta de links.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica, acessível e otimizada para buscadores.
- **CSS3 Moderno:** Flexbox, Variáveis CSS (`:root`), Animações `@keyframes`, Glassmorphism e Media Queries.
- **JavaScript (ES6+):** Manipulação modular do DOM, gerenciamento do menu mobile, observadores de rolagem e sistema de notificações *Toast*.
- **Google Fonts:** Tipografia moderna **Inter** com suporte de peso de 300 a 800.

---

## 🔍 Estrutura de Arquivos

```bash
ShopFamily/
├── index.html          # Marcação semântica, meta tags de SEO e estrutura A11y
├── style.css           # Tokens CSS, animações, efeitos visuais e responsividade
├── script.js           # Lógica do menu mobile, Scrollspy, Sticky Header e Toasts
├── hero-family-ptbr.png # Imagem ilustrativa da seção principal
└── README.md           # Documentação completa do projeto
```

## ⚙️ Como Executar o Projeto
Como a aplicação é construída com tecnologias nativas da Web (Vanilla JS), não requer instalação de dependências ou gerenciadores de pacote.

1. Clone o repositório:
```bash
git clone [https://github.com/seu-usuario/shopfamily-landing-page.git](https://github.com/seu-usuario/shopfamily-landing-page.git)
```
2. Navegue até a pasta do projeto:
```bash
cd shopfamily-landing-page
```
3. Abra no navegador:

Dê um duplo clique no arquivo index.html; OU

Execute com a extensão Live Server no VS Code para uma experiência de desenvolvimento completa.

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizar, modificar e contribuir.


# 🛍️ ShopFamily — Landing Page Premium

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Design-Responsivo-60a5fa?style=for-the-badge&logo=responsive-design&logoColor=white" alt="Responsivo">
</p>

<p align="center">
  <strong>"O Shopping que cabe no seu bolso."</strong><br>
  Uma landing page moderna, responsiva e institucional em Dark Mode, desenvolvida para conectar famílias às melhores ofertas com facilidade, fluidez e segurança.
</p>

---

## 📌 Sobre o Projeto

O **ShopFamily** é uma página de captura (*landing page*) de alta conversão projetada com foco total na experiência do usuário (UX) e em microinterações fluidas. O projeto simula a interface principal de uma plataforma de e-commerce voltada para o consumo familiar, integrando uma marcação estrutural limpa a uma folha de estilo robusta e moderna.

> 💡 **Destaque:** O projeto utiliza uma abordagem estética *Premium Dark Slate*, alinhada com as maiores tendências de design de interfaces (UI) do mercado atual.

---

## 🎨 Funcionalidades e Decisões de Design

| Elemento | Implementação Técnica | Impacto Visual / UX |
| :--- | :--- | :--- |
| **Paleta Dark Mode** | Fundo `#0f172a` com textos em `#f8fafc` | Redução da fadiga ocular e estética sofisticada. |
| **Glow & Gradientes** | `linear-gradient` e `drop-shadow` | Destaque estratégico na logo e no título principal. |
| **Microinterações** | `transition: all 0.3s ease` e `translateY` | Feedback visual dinâmico em botões e links (*Hover*). |
| **Animações Nativas** | `@keyframes` (`fadeInLeft`, `fadeInRight`) | Transição de carregamento elegante e fluida ao abrir a página. |

---

## 📱 Responsividade Total (Adaptável a qualquer tela)

A interface foi inteiramente adaptada utilizando *Media Queries* estratégicas, garantindo o funcionamento perfeito em três quebras principais:
* **💻 Desktops e Notebooks (Telas amplas):** Distribuição horizontal em duas colunas espelhadas com espaçamento dinâmico (*Flexbox*).
* **📱 Tablets (Até 968px):** Reorganização vertical do conteúdo, centralização de textos e ajuste de espaçamentos para o toque.
* **📲 Smartphones (Até 480px):** Empilhamento completo dos links de navegação para transformar o menu em uma experiência nativa para o polegar.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica avançada (`<nav>`, `<div>` estruturais, `<footer>`).
* **CSS3 Moderno:** Flexbox para layouts complexos, gerenciamento de animações, filtros e efeitos de profundidade.
* **Google Fonts:** Integração da fonte moderna **Inter** (pesos de 300 a 800) via cabeçalho e importação para máxima consistência tipográfica.

---

## 🔍 Estrutura de Arquivos

```bash
├── index.html            # Estrutura e marcação semântica da página
├── style.css             # Estilização, animações e responsividade (Flexbox)
├── hero-family-ptbr.png  # Imagem ilustrativa da seção principal
└── README.md             # Documentação completa do projeto

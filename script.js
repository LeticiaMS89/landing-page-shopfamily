/**
 * ===================================================================
 * SHOPFAMILY LANDING PAGE - LÓGICA PRINCIPAL (JAVASCRIPT ES6+)
 * ===================================================================
 * 
 * Este arquivo controla a interatividade da página:
 * - Menu móvel (Hambúrguer) com suporte a Acessibilidade (A11y)
 * - Cabeçalho inteligente ao rolar a página (Sticky Header)
 * - Destaque dinâmico dos links de navegação conforme a rolagem (Scrollspy)
 * - Feedback visual interativo nos botões de Ação (CTA)
 */

// Garante que o código só execute após a estrutura do HTML (DOM) estar totalmente carregada
document.addEventListener('DOMContentLoaded', () => {

  // ===================================================================
  // 1. MENU MOBILE (GAVETA DE NAVEGAÇÃO & HAMBÚRGUER)
  // ===================================================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.links');
  const navLinks = document.querySelectorAll('.links a');

  /**
   * Alterna a visibilidade do menu móvel e atualiza o estado de acessibilidade
   */
  function alternarMenuMobile() {
    if (!menuToggle || !navMenu) return;

    // Alterna a classe 'active' que exibe/oculta o menu no CSS
    const menuAberto = navMenu.classList.toggle('active');

    // Atualiza o atributo ARIA informando leitores de tela se o menu está aberto ou fechado
    menuToggle.setAttribute('aria-expanded', menuAberto);

    // Ajusta o rótulo de acessibilidade do botão
    const rotuloBotao = menuAberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação';
    menuToggle.setAttribute('aria-label', rotuloBotao);
  }

  /**
   * Fecha o menu móvel caso esteja aberto (útil ao clicar em um link)
   */
  function fecharMenuMobile() {
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
      }
    }
  }

  // Evento de clique no botão hambúrguer
  if (menuToggle) {
    menuToggle.addEventListener('click', alternarMenuMobile);
  }

  // Fecha o menu ao clicar em qualquer link da navegação
  navLinks.forEach(link => {
    link.addEventListener('click', fecharMenuMobile);
  });

  // Fecha o menu ao pressionar a tecla 'Escape' (Boa prática de acessibilidade)
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
      fecharMenuMobile();
    }
  });

  // Fecha o menu se o usuário clicar fora da área da navbar no mobile
  document.addEventListener('click', (evento) => {
    const clicouForaDoMenu = !navMenu?.contains(evento.target);
    const clicouNoBotaoToggle = menuToggle?.contains(evento.target);

    if (clicouForaDoMenu && !clicouNoBotaoToggle) {
      fecharMenuMobile();
    }
  });


  // ===================================================================
  // 2. CABEÇALHO DINÂMICO AO ROLAR A PÁGINA (STICKY HEADER)
  // ===================================================================
  const header = document.querySelector('.header');

  /**
   * Adiciona uma classe ao cabeçalho para intensificar a sombra/desfoque ao rolar a tela
   */
  function atualizarEstiloHeader() {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  // Ouve a rolagem da página
  window.addEventListener('scroll', atualizarEstiloHeader);


  // ===================================================================
  // 3. SCROLLSPY (DESTAQUE AUTOMÁTICO DO LINK ATIVO)
  // ===================================================================
  const secoes = document.querySelectorAll('section[id], main[id]');

  /**
   * Identifica qual seção está visível na viewport e ativa o link correspondente na navbar
   */
  function destacarLinkNaRolagem() {
    const posicaoScroll = window.scrollY + 150; // Offset para ativação antecipada

    secoes.forEach(secao => {
      const topoSecao = secao.offsetTop;
      const alturaSecao = secao.offsetHeight;
      const idSecao = secao.getAttribute('id');

      if (posicaoScroll >= topoSecao && posicaoScroll < topoSecao + alturaSecao) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${idSecao}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', destacarLinkNaRolagem);


  // ===================================================================
  // 4. FEEDBACK INTERATIVO NOS BOTÕES DE AÇÃO (UX/TOASTS)
  // ===================================================================
  const botoesDownload = document.querySelectorAll('a[href="#download"], .btn-primary');
  const botaoLogin = document.querySelector('.btn-login');

  /**
   * Exibe uma notificação temporária e elegante na tela (Toast)
   * @param {string} mensagem - Texto a ser exibido no toast
   */
  function exibirToast(mensagem) {
    // Remove toast existente para não acumular notificações
    const toastExistente = document.querySelector('.toast-notification');
    if (toastExistente) {
      toastExistente.remove();
    }

    // Cria o elemento da notificação
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = mensagem;

    // Estilização injetada diretamente no elemento
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      backgroundColor: '#1e293b',
      color: '#f8fafc',
      padding: '14px 24px',
      borderRadius: '9999px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(248, 250, 252, 0.1)',
      fontSize: '14px',
      fontWeight: '600',
      zIndex: '9999',
      opacity: '0',
      transform: 'translateY(20px)',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    });

    document.body.appendChild(toast);

    // Animação de entrada
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    // Remove automaticamente após 3 segundos
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Intercepta o clique no botão "Baixe nosso app"
  botoesDownload.forEach(botao => {
    botao.addEventListener('click', (evento) => {
      if (botao.getAttribute('href') === '#download') {
        evento.preventDefault();
        exibirToast('📲 Redirecionando para o download do app ShopFamily...');
      }
    });
  });

  // Intercepta o clique no botão "Entrar"
  if (botaoLogin) {
    botaoLogin.addEventListener('click', (evento) => {
      if (botaoLogin.getAttribute('href') === '#login') {
        evento.preventDefault();
        exibirToast('🔒 Abrindo tela de login...');
      }
    });
  }

});

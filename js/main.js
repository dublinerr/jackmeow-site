'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

if (menuToggle && navigation) {
  navigation.classList.add('mobile-nav');
  menuToggle.hidden = false;
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  const desktop = window.matchMedia('(min-width: 601px)');
  const updateMenu = () => {
    closeMenu();
    menuToggle.hidden = desktop.matches;
  };
  desktop.addEventListener('change', updateMenu);
  updateMenu();
}

for (const button of document.querySelectorAll('[data-copy]')) {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const command = document.getElementById(button.dataset.copy);
    const status = button.closest('.install-card').querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(command.textContent.trim());
      button.textContent = 'Copied';
      status.textContent = 'Install command copied to clipboard.';
    } catch {
      button.textContent = 'Copy';
      status.textContent = 'Copy unavailable. Select the command and copy it manually.';
    }
  });
}

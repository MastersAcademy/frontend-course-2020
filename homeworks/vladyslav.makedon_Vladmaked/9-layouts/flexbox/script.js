const topRowHeaderBurgerMenuEl = document.querySelector('[data-top-row-header-burger-menu]');
const topRowHeaderNavigationEl = document.querySelector('[data-top-row-header-navigation]');
const bodyEl = document.querySelector('[data-body]');
topRowHeaderBurgerMenuEl.addEventListener('click', () => {
    topRowHeaderNavigationEl.classList.toggle('visible');
    bodyEl.classList.toggle('body_overflow-hidden');
});

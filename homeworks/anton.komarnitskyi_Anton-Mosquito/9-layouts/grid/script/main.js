document.addEventListener('click', (e) => {
    const atrrr = e.target.dataset.toogle;
    if (atrrr === 'menu') {
        const tooglMenu = document.querySelector('.toogle-menu');
        const navigation = document.querySelector('.navigation__menu');
        tooglMenu.classList.toggle('active');
        navigation.classList.toggle('active');
    }
});

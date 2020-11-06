// preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(() => {
        document.querySelector('[data-preloader]').classList.remove('preloader');
        document.querySelector('[data-loader]').classList.remove('loader');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};

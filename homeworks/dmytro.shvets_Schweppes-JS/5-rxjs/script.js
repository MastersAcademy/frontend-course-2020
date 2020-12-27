(function () {
    const { fromEvent } = window.rxjs;
    const {
        map, pairwise, filter, throttleTime,
    } = window.rxjs.operators;

    const navContainer = document.querySelector('[data-navigation]');
    const resultNav = document.querySelector('[data-results-nav]');
    const favoritesNav = document.querySelector('[data-favorites-nav]');
    const favoritesBtn = document.querySelector('[data-clickable-favorites]');
    const loadBtn = document.querySelector('[data-clickable-load]');
    const imagesContainer = document.querySelector('[data-images-container]');
    const saveConfirmed = document.querySelector('[data-save-confirmed]');
    const loader = document.querySelector('[data-loader]');

    // creating RxJS stream
    const stream$ = fromEvent(window, 'scroll');
    stream$.pipe(
        throttleTime(100),
        map(() => {
            if (document.documentElement.scrollTop < 100) {
                return ({
                    position: document.documentElement.scrollTop,
                    direction: true,
                });
            } return ({
                position: document.documentElement.scrollTop,
                direction: false,
            });
        }),
        pairwise(),
        filter((data) => (data[1].position - data[0].position > 50
            || data[1].position - data[0].position < -50
            || data[1].position < 100)),
        map((data) => {
            if (data[1].position - data[0].position > 50) {
                return false;
            } return true;
        }),
    ).subscribe((direction) => {
        if (direction) {
            navContainer.classList.add('slideOutDown');
            navContainer.classList.remove('slideOutUp');
        } else {
            navContainer.classList.remove('slideOutDown');
            navContainer.classList.add('slideOutUp');
        }
    });

    // NASA API
    const count = 10;
    const apiKey = 'zN9qoF8IGbcu0CLqzHYsAfsrtX4PhEIZc8z2F3zM';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

    let resultsArray = [];
    let favorites = {};

    function showContent(page) {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
        if (page === 'results') {
            resultNav.classList.remove('hidden');
            favoritesNav.classList.add('hidden');
        } else {
            resultNav.classList.add('hidden');
            favoritesNav.classList.remove('hidden');
        }
        loader.classList.add('hidden');
    }

    function saveFavorite(e) {
        const link = e.target.parentNode.parentNode.firstChild.firstChild.getAttribute('src');
        // Loop through Results Array to select favorite
        resultsArray.forEach((item) => {
            if (item.url === link && !favorites[link]) {
                favorites[link] = item;
                // Show save confirmation for 2 seconds
                saveConfirmed.hidden = false;
                setTimeout(() => {
                    saveConfirmed.hidden = true;
                }, 2000);
                // Set favorites in localStorage
                localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
            }
        });
    }

    // Remove item from Favorites
    function removeFavorite(e) {
        const deletedCard = e.target.parentNode.parentNode;
        const url = deletedCard.firstChild.firstChild.getAttribute('src');
        if (favorites[url]) {
            delete favorites[url];
            // Set favorites in localStorage
            localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
        }
        deletedCard.classList.add('hidden');
    }

    function createDOMNodes(page) {
        const currentArray = page === 'results' ? resultsArray : Object.values(favorites);
        currentArray.forEach((result) => {
            //  Card container
            const card = document.createElement('div');
            card.classList.add('card');
            // Link
            const link = document.createElement('a');
            link.href = result.hdurl;
            link.title = 'View full Image';
            link.target = '_black';
            // Image
            const image = document.createElement('img');
            image.src = result.url;
            image.alt = 'NASA picture of the Day';
            image.loading = 'lazy';
            image.classList.add('card-img-top');
            // Card body
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            // Card title
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = result.title;
            // Save Text
            const saveText = document.createElement('p');
            saveText.classList.add('clickable');
            if (page === 'results') {
                saveText.textContent = 'Add to favorites';
                saveText.addEventListener('click', saveFavorite);
            } else {
                saveText.textContent = 'Remove favorite';
                saveText.addEventListener('click', removeFavorite);
            }
            // Card Text
            const cardText = document.createElement('p');
            cardText.textContent = result.explanation;
            // Footer container
            const footer = document.createElement('small');
            footer.classList.add('text-muted');
            // Date
            const date = document.createElement('strong');
            date.textContent = result.date;
            // Copyright
            const copyrightResult = result.copyright === undefined ? '' : result.copyright;
            const copyright = document.createElement('span');
            copyright.textContent = ` ${copyrightResult}`;
            // Append
            footer.append(date, copyright);
            cardBody.append(cardTitle, saveText, cardText, footer);
            link.appendChild(image);
            card.append(link, cardBody);
            imagesContainer.appendChild(card);
        });
    }

    function updateDOM(page) {
        // Get favorites from localStorage
        if (localStorage.getItem('nasaFavorites')) {
            favorites = JSON.parse(localStorage.getItem('nasaFavorites'));
        }
        imagesContainer.textContent = '';
        createDOMNodes(page);
        showContent(page);
    }

    // Get 10 images from NASA API
    async function gettingNasaPictures() {
        // Show Loader
        loader.classList.remove('hidden');
        try {
            const response = await fetch(apiUrl);
            resultsArray = await response.json();
            updateDOM('results');
        } catch (error) {
            alert(error);
        }
    }

    function goToFavorites() {
        updateDOM('favorites');
    }

    // Adding event listener
    favoritesBtn.addEventListener('click', goToFavorites);
    loadBtn.addEventListener('click', gettingNasaPictures);
    favoritesNav.addEventListener('click', gettingNasaPictures);

    // On load
    gettingNasaPictures();
}());

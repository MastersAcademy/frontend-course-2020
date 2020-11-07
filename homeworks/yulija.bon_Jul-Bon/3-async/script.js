const app = document.querySelector('#app');
const input = document.querySelector('#filter');
const select = document.querySelector('#sorting');
const loader = document.querySelector('#loader');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getDAtaFromApi() {
    try {
        await delay(3000);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
    return null;
}

function render(data) {
    const html = data.map((article) => `<article id="${article.id}">
                        <h2>${article.title}</h2>
                        <p>${article.body}</p>
                        </article>`).join('');
    app.innerHTML = html;
}

async function renderApiData() {
    const dataFromApi = await getDAtaFromApi();
    render(dataFromApi);
    loader.style.display = 'none';
}

getDAtaFromApi();
renderApiData();

async function sortApiData(selectValue) {
    const dataFromApi = await getDAtaFromApi();
    let sortData;
    if (selectValue === 'decrease') {
        sortData = dataFromApi.sort((obj1, obj2) => {
            if (obj1.title > obj2.title) return -1;
            return 0;
        });
    }
    if (selectValue === 'increase') {
        sortData = dataFromApi.sort((obj1, obj2) => {
            if (obj1.title < obj2.title) return -1;
            return 0;
        });
    }
    if (selectValue === 'none') {
        sortData = dataFromApi;
    }

    render(sortData);
}

async function filterApiData() {
    const articles = await getDAtaFromApi();
    const filterValue = input.value.trim().toLowerCase();

    if (filterValue.length) {
        const filteredList = articles.filter((article) => {
            let titleString = '';

            titleString += `${article.title.toString().toLowerCase().trim()}`;

            return titleString.match(filterValue);
        });

        render(filteredList);
    }
}

input.addEventListener('input', (event) => {
    app.innerHTML = '';
    const filterValue = event.target.value;
    console.log(filterValue);
    filterApiData(filterValue);
});

select.addEventListener('change', (event) => {
    app.innerHTML = '';
    const selectValue = event.target.value;
    sortApiData(selectValue);
});

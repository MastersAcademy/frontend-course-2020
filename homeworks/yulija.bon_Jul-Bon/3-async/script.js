const app = document.querySelector('#app');
const input = document.querySelector('#filter');
const select = document.querySelector('#sorting');
const loader = document.querySelector('#loader');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getDataFromApi() {
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
    const html = data.map((article) => `<article class="article" data-post="${article.id}">
                        <h2>${article.title}</h2>
                        <p>${article.body}</p>
                        </article>`).join('');
    app.innerHTML = html;
}

async function renderApiData() {
    const dataFromApi = await getDataFromApi();
    render(dataFromApi);
    loader.classList.add('hidden');
}

getDataFromApi();
renderApiData();

async function sortApiData(selectValue) {
    const dataFromApi = await getDataFromApi();
    let sortData;
    switch (selectValue) {
        case 'decrease':
            sortData = dataFromApi.sort((obj1, obj2) => {
                if (obj1.title < obj2.title) return -1;
                return 0;
            });
            break;
        case 'increase':
            sortData = dataFromApi.sort((obj1, obj2) => {
                if (obj1.title > obj2.title) return -1;
                return 0;
            });
            break;
        case 'none':
            sortData = dataFromApi;
            break;
        default:
            sortData = dataFromApi;
    }

    render(sortData);
}

async function filterApiData() {
    const articles = await getDataFromApi();
    const filterValue = input.value.trim().toLowerCase();

    if (filterValue.length) {
        const filteredList = articles.filter((article) => {
            const titleString = article.title.toString().toLowerCase().trim();

            return titleString.match(filterValue);
        });

        render(filteredList);
    }
}

input.addEventListener('input', (event) => {
    app.innerHTML = '';
    const filterValue = event.target.value;
    filterApiData(filterValue);
});

select.addEventListener('change', (event) => {
    app.innerHTML = '';
    const selectValue = event.target.value;
    sortApiData(selectValue);
});

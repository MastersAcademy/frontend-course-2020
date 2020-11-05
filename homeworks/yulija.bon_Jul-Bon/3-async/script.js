fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        // json.forEach(function (article) {
        //     //console.log(obj.title);
        // });
        const html = json.map((article) => `<article id="${article.id}">
                        <h2>${article.title}</h2>
                        <p>${article.body}</p>
                        </article>`)
            .join('');

        console.log(html);
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
    })
    .catch((error) => console.log(error));

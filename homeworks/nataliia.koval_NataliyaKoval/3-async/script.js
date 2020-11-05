async function getResponse() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await response.json();

  const list = document.querySelector('[data-list]');
  const template = document.querySelector('[data-template]');
  

  for (let post of posts) {
    const content = template.content;
    const title = content.querySelector('[data-title]');
    const text = content.querySelector('[data-text]');
    title.innerText = post.title;
    text.innerText = post.body;
    list.appendChild(template.content.cloneNode(true));
  }

  document.body.classList.add('loaded');
}
setTimeout(getResponse, 3000);




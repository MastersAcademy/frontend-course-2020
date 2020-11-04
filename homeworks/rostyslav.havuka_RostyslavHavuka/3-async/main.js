let data = [];

document.addEventListener('DOMContentLoaded', async (event) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  data = await response.json();
  document.body.innerHTML = `<div class="loader"></div>`;
  await timeout(3000);
  document.body.innerHTML = `
${prepareDropDownMenu()} 
${preparePost()}
`;
});

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function prepareDropDownMenu() {
  return `
<button class="dropbtn">Dropdown</button>
<div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
</div>
`
};

function preparePost() {
  const dataArray = data.map(element => {
    return `
<div class="main">
<p class="title">Title: ${element.title}</p>
<p>${element.body}</p>
</div>
`
  })
  return dataArray.join('\n');
};
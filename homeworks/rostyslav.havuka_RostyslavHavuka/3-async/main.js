let store = [];
let defaultData = [];
document.addEventListener('DOMContentLoaded', async (event) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  store = await response.json();
  defaultData = [...store];
  document.body.innerHTML = `<div class="loader"></div>`;

  await timeout(3000);
  document.body.innerHTML = `${prepareDropDownMenu()} ${prepareInput()} ${preparePost(store)}`;

  let select = document.getElementById('mySelect')
  let input = document.getElementById('searchInput')

  input.addEventListener('keydown', filterr)

function filterr() {
  const filterValues = (value) => {
    return store.filter(data => {
        return data.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }
  const filtredData = filterValues(input.value)
  document.getElementById('main').innerHTML = preparePost(filtredData);
}
  select.onchange = () => {
    let onSelect = document.getElementById("mySelect").value;
    switch (onSelect) {
      case 'default':
        cleanData()
        break;
      case 'az':
        sortData()
        break;
      case 'za':
        resortData()
        break;
    }
  }
});

function cleanData() {
 document.getElementById('main').innerHTML = preparePost(defaultData);
}

function sortData() {
  data = store.sort(function(a, b){
    var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
    if (nameA < nameB)
      return -1 
    if (nameA > nameB)
      return 1
  })
    document.getElementById('main').innerHTML = preparePost(data)
}

function resortData() {
  data = store.sort(function(a, b){
    var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
    if (nameA > nameB)
      return -1
    if (nameA < nameB)
      return 1
  })
    document.getElementById('main').innerHTML = preparePost(data)
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function prepareInput() {
  return `
  <input type="text" id="searchInput" placeholder="Search">  
  `
}

function prepareDropDownMenu() {
  return `
  <select id="mySelect">
  <option value="default">Default</option>
  <option value="az">A-z</option>
  <option value="za">Z-a</option>
  </select>
`
};


function preparePost(data) {
  const storeArray = `<div class="main" id="main">
  ${data.map(element => {
    return `
    <div class="post">
<p class="title">Title: ${element.title}</p>
<p>${element.body}</p>
</div>
`
  }).join('\n')}
  </div>`
  // console.log(store);
  return storeArray;
};
let store = [];
let defaultData = [];
document.addEventListener('DOMContentLoaded', async (event) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  store = await response.json();
  defaultData = [...store];
  document.body.innerHTML = `<div class="loader"></div>`;

  await timeout(3000);
  document.body.innerHTML = `${prepareDropDownMenu()} ${prepareInput()} ${renderPosts(store)}`;

  let select = document.getElementById('mySelect')
  let input = document.getElementById('searchInput')
  input.addEventListener('keydown', searchHandler)

  function searchHandler() {
    const selected = select.value;
    let inputValue = input.value;

    if (selected === 'default') {
      sortByDefault();
      const result = search(store, inputValue);
      renderPosts(defaultData);
    }
    if (selected === 'asc') {
      const result = search(store, inputValue);
      const filtrerResult = sortByAsc(result);
      renderPosts(filtrerResult)
    }
    if( selected === 'desc') {
      const result = search(store, inputValue);
      const filtrerResult = sortByDesc(result);
      renderPosts(filtrerResult)
    }
  }

function search(data, value) {
    return data.filter(data => {
        return data.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  // const filtredData = searchValues(input.value)
  // document.getElementById('main').innerHTML = renderPosts(filtredData);
}
  select.onchange = () => {
    let selected = select.value;
    switch (selected) {
      case 'default':
        cleanData()
        break;
      case 'asc':
        sortByAsc(store);
        break;
      case 'desc':
        sortByDesc(store)
    }
  }
});

function cleanData() {
 document.getElementById('main').innerHTML = renderPosts(defaultData);
}

// store
// defaultStore

// default sortByDefault(search())
// asc search(sortByASC)
// desc search(sortByDESC)

// function ascFilter() {
//   const searchValues = (value) => {
//     return data.search(data => {
//         return data.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
//     });
//   }
//   const filtredData = searchValues(input.value)

// console.log(sortByAsc(searchValues));

// }

function sortByDefault() {
  store = [...defaultData]
}

function sortByAsc(data) {
  data = data.sort(function(a, b){
    var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
    if (nameA < nameB)
      return -1 
    if (nameA > nameB)
      return 1
  })
    document.getElementById('main').innerHTML = renderPosts(data)
}

function sortByDesc(data) {
  data = data.sort(function(a, b){
    var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
    if (nameA > nameB)
      return -1
    if (nameA < nameB)
      return 1
  })
    document.getElementById('main').innerHTML = renderPosts(data)
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
  <option value="asc">A-z</option>
  <option value="desc">Z-a</option>
  </select>
`
};


function renderPosts(data) {
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
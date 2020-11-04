let data = [];

document.addEventListener('DOMContentLoaded', async (event) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  data = await response.json();
  document.body.innerHTML = `<div class="loader"></div>`;

  await timeout(3000);
  document.body.innerHTML = `${prepareDropDownMenu()} ${preparePost()} `;
  function renderPost() {
    preparePost
  }

  let select = document.getElementById('mySelect')

  select.onchange = () => {
    let onSelect = document.getElementById("mySelect").value;
    let computedData = data
    switch (onSelect) {
      case 'default':
        document.getElementById('main').innerHTML = preparePost(computedData)
        break;
      case 'az':
        data = data.sort(function(a, b){
          var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
          if (nameA < nameB)
            return -1
          if (nameA > nameB)
            return 1
        })
          document.getElementById('main').innerHTML = preparePost(data)
        break;
      case 'za':
        data = data.sort(function(a, b){
          var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
          if (nameA > nameB)
            return -1
          if (nameA < nameB)
            return 1
        })
          document.getElementById('main').innerHTML = preparePost(data)
        break;
    }
  }
});

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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


function preparePost() {
  const dataArray = `<div class="main" id="main">
  ${data.map(element => {
    return `
    <div class="post">
<p class="title">Title: ${element.title}</p>
<p>${element.body}</p>
</div>
`
  }).join('\n')}
  </div>`
  // console.log(data);
  return dataArray;
};
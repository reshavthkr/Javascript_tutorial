var url = 'https://jsonplaceholder.typicode.com/posts'
var dataArray = []
var app = document.querySelector('#app');

// async and await

async function fetchData() {
    let response = await fetch(url)
    let data = await response.json()
    dataArray = data
    // app.innerHTML = '<ul>' + dataArray.map((item) => {
    //     return 'li' + item.body + '</li>'
    // }).join('') + '</ul>';

    app.innerHTML = '<ul>' + dataArray.map(function (wizard) {
        return '<li>' + 'id:' + wizard.id + 'body :' + wizard.body + '</li>';
    }).join('') + '</ul>';
}

let fetchData2 = async () => {

}
fetchData()

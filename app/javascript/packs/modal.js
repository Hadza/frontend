document.addEventListener('DOMContentLoaded', init)

let productData = []

async function fetchData(){
    let url = "https://gist.githubusercontent.com/LuigiR0jas/debdf41add7704681d9f7c734f478ac2/raw/7e7e5ad88132640d659c3ec8e657d8e02af01aa7/crates.json"
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            productData = data.data
        })
        .catch(err => {
        alert('There was an error loading data' + err)
    })
}

function loadCategory(category) {
    let img = document.getElementById('category-img')
    let title = document.getElementById('category-title')
    let description = document.getElementById('category-description')
    let items = document.getElementById('items')

    img.src = category.picture
    title.innerText = category.name
    description.innerText = category.description

    let tea,name, picture, desc, rating

    items.textContent = ''

    category.content.forEach((item) => {
        tea = document.createElement('div')
        tea.classList.add('item-card')

        picture = document.createElement('img')
        picture.src = item.picture
        picture.classList.add('item-img')

        name = document.createElement('span')
        name.innerText = item.name
        name.classList.add('item-name')

        desc = document.createElement('span')
        desc.innerText = item.description
        desc.classList.add('item-desc')

        rating = document.createElement('span')
        rating.innerText = item.rating + '/5 ☆'
        rating.classList.add('item-rating')

        tea.appendChild(picture)
        tea.appendChild(name)
        tea.appendChild(desc)
        tea.appendChild(rating)
        items.appendChild(tea)
    })
}

function renderCategoryList(){
    let modalElement = document.getElementById('categories')
    let category, img, name, rating, div

    modalElement.textContent = ''

    productData.forEach((item, index) => {
        console.log(item)
        category = document.createElement('div')
        category.classList.add('category-card')
        category.id = item.crate_id

        img = document.createElement('img')
        img.src = item.picture
        img.classList.add('category-img-thumbnail')

        div = document.createElement('div')
        div.classList.add('category-card-info')

        name = document.createElement('span')
        name.classList.add('category-title')
        name.innerText = item.name

        rating = document.createElement('span')
        rating.classList.add('category-rating')
        rating.innerText = item.rating + ' ☆'

        div.appendChild(name)
        div.appendChild(rating)
        category.appendChild(img)
        category.appendChild(div)

        category.addEventListener('click', (e) => {
            loadCategory(item)
        })

        modalElement.appendChild(category)
    })

    loadCategory(productData[0])
}

function init () {
    let button = document.getElementById("learn-more")

    button.addEventListener('click', () => {
        fetchData()
            .then(() => {
                renderCategoryList()
            })
        modal.style.display = "block";
    })

    let modal = document.getElementById("modal");
    let span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
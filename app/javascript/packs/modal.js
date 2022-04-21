document.addEventListener('DOMContentLoaded', init)

let productData = []
let selectedCategoryIndex = 0

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

function renderCategoryList(){
    let modalElement = document.getElementById('categories')
    let category, img, name, rating, div

    productData.forEach((item, index) => {
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
        modalElement.appendChild(category)
    })
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

    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
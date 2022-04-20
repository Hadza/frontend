window.onload = function () {
    let elements = document.getElementsByClassName("arrow")

    for ( let i = 0 ; i < elements.length ; i++ ) {
        elements[i].addEventListener("click", () => {
            return elements[i].classList.toggle("toggle")
        })
    }
};



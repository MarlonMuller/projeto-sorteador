const btSortear = document.querySelector("#bt-sortear")


function sortear (min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return console.log( Math.floor(Math.random() * (max - min) + min));
}


btSortear.addEventListener("click", sortear)
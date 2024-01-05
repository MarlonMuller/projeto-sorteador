const btSortear = document.querySelector("#bt-sortear")


function sortear () {
    
    const min = Math.ceil(document.getElementById("firstNumber").value);
    const max = Math.floor(document.getElementById("lastNumber").value);
    const displayResult = document.getElementById("displayResult")
    const result = Math.floor(Math.random() * (max - min) + min);


    displayResult.innerHTML = `O número sorteado foi ${result}`;
}


btSortear.addEventListener("click", sortear)
const createDivs = function (numberOfDivs) {
    const arrayOfDivs = [];
    for(let i = 0; i < numberOfDivs; i++) {
        let div = document.createElement("div");
        arrayOfDivs.push(div);
    }
    return arrayOfDivs;
}

const addDivsToContainer = function(divs, container) {
    divs.forEach(div => {
        container.appendChild(div);
    });
}

const addMouseenterEventListener = function(elements = []) {
    elements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.classList.add("entered");
        });
    });
}

divContainer = document.querySelector(".container");
divs = createDivs(16 * 16);
addDivsToContainer(divs, divContainer);
addMouseenterEventListener(divs);


clearButton = document.querySelector(".header > button");
clearButton.addEventListener("click", () => {
    // divContainer.querySelectorAll("*").forEach(div => div.remove());
    while (divContainer.firstChild) {
        divContainer.firstChild.remove();
    }

    let numberOfSides = parseInt(prompt("How many squares per side on a new grid you want?"));
    if(numberOfSides > 0 && numberOfSides <= 100) {
        divs = createDivs(numberOfSides * numberOfSides);
        addDivsToContainer(divs, divContainer);
        addMouseenterEventListener(divs);
    }
});





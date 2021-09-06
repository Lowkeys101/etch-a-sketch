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
            let elementColor = element.style.backgroundColor;
            if(elementColor) {
                let rgbColors = elementColor.match(/\d+/g);
                element.style.backgroundColor = `rgb(${parseInt(parseInt(rgbColors[0])*0.9)}, ${parseInt(parseInt(rgbColors[1])*0.9)}, ${parseInt(parseInt(rgbColors[2])*0.9)})`;
                console.log(element.style.backgroundColor)
            } else {
                element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            }
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
        divContainer.style.gridTemplateColumns = `repeat(${numberOfSides}, 1fr)`;
        divContainer.style.gridTemplateRows = `repeat(${numberOfSides}, 1fr)`;
    }
});





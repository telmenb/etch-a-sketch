function gridInit(x) {
    //grid init
    grid = document.querySelector(".grid-container");
    grid.style.cssText = `grid-template-columns: repeat(${x}, ${32/x}rem)`;
    
    //squares init
    for (let i = 0; i < x*x; i++) {
        square = document.createElement("div");
        square.classList = "element";
        square.style.cssText = `height: ${32/x}rem; width: ${32/x}rem`;
        grid.append(square);
    }
}
function addHover() {
    //hover event
    elements = document.querySelectorAll(".element");
    elements.forEach(element => {
        element.addEventListener("mouseenter", event => {
            event.target.classList.add("painted");
        });
    });
}

//dimensions
let num = 16;
gridInit(num);
addHover();

//clear button
clear_button = document.querySelector("#clear-btn");
clear_button.addEventListener("click", () => elements.forEach(element => element.classList.remove("painted")));

//reset button
reset_button = document.querySelector("#reset-btn");
reset_button.addEventListener("click", () => {
    elements.forEach(element => element.remove());
    //TODO: sanitize user input-------------------------------------------------------------
    const x = parseInt(prompt("Enter new integer dimensions (0 < x < 101):", `${num}`), 10);
    num = x;
    //--------------------------------------------------------------------------------------
    gridInit(x);
    addHover();
});


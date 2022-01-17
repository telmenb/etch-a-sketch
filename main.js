const x = 10;

grid = document.querySelector(".grid-container");
grid.style.cssText = `grid-template-columns: repeat(${x}, ${32/x}rem); grid-template-rows: repeat(${x}, ${32/x}rem)`;

for (let i = 0; i < x*x; i++) {
    row = document.createElement("div");
    row.style.cssText = `height: ${32/x}rem; width: ${32/x}rem; border: 0.01rem solid black`;
    grid.append(row);
}

grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    row = document.createElement("div");
    // row.style.cssText = "display: flex; height: 1rem; width: 16rem";
    for (let j = 0; j < 16; j++) {
        cell = document.createElement("div");
        // cell.style.cssText = "height: 1rem; width: 1rem";
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
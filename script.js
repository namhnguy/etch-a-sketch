const grid = document.querySelector(".container");

for (i = 0; i < 256; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add('grid-item', `item-${i}`)
    grid.appendChild(gridItem);
}

grid.addEventListener('mouseover', function (e) {
    if (e.target.className === 'container') {
        return;
    }
    e.target.classList.add('change-color');
})

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    let newGrid = parseInt(prompt("Please enter new grid dimension (16-100)"));
    while (isNaN(newGrid) || newGrid > 100 || newGrid < 16) {
        newGrid = prompt("That is over max or not a number, please try again.");
    }
    
    for (i = 0; i < newGrid * newGrid; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add('grid-item', `item-${i}`)
        grid.appendChild(gridItem);
    }
    const gridItemSize = document.querySelectorAll(".grid-item");
    gridItemSize.forEach(item => {
        item.style.width = `${(960/newGrid) - 2}px`;
        item.style.height = `${(960/newGrid) - 2}px`;
    })
})
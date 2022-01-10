const grid = document.querySelector(".container");
let gridSize = 16;
let mouseIsDown = false;

for (i = 0; i < 256; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mousedown', function (e) {
        e.target.style.backgroundColor = 'black';
        mouseIsDown = true;
    })
    gridItem.addEventListener('mouseover', function (e) {
        if (mouseIsDown) {
            e.target.style.backgroundColor = 'black';
        }
    })
    gridItem.addEventListener('mouseup', function () {
        mouseIsDown = false;
    })
    gridItem.addEventListener('dragstart', (e) => {
        e.preventDefault();
    })
    gridItem.addEventListener('drop', (e) => {
        e.preventDefault();
    })
    grid.appendChild(gridItem);
}

const btn = document.querySelector('#btn-dim');
btn.addEventListener('click', () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    let newGrid = parseInt(prompt("Please enter new grid dimension (16-100)"));
    while (isNaN(newGrid) || newGrid > 100 || newGrid < 16) {
        newGrid = prompt("That is over max or not a number, please try again.");
    }
    gridSize = newGrid;

    grid.setAttribute('style', `grid-template-columns: repeat(${newGrid}, 2fr); grid-template-rows: repeat(${newGrid}, 2fr);`);
    for (i = 0; i < newGrid * newGrid; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mousedown', function (e) {
            e.target.style.backgroundColor = 'black';
            mouseIsDown = true;
        })
        gridItem.addEventListener('mouseover', function (e) {
            if (mouseIsDown) {
                e.target.style.backgroundColor = 'black';
            }
        })
        gridItem.addEventListener('mouseup', function () {
            mouseIsDown = false;
        })
        gridItem.addEventListener('dragstart', (e) => {
            e.preventDefault();
        })
        gridItem.addEventListener('drop', (e) => {
            e.preventDefault();
        })
        grid.appendChild(gridItem);
    }
})

const reset = document.querySelector('#btn-reset');
reset.addEventListener('click', function () {
    for (i = 0; i < gridSize * gridSize; i++) {
        grid.children[i].style.backgroundColor = "white";
    }
})
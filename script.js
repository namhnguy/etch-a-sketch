const grid = document.querySelector(".container");
let gridSize = 16;
let mouseIsDown = false;

function createDefaultGrid() {
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

const colorChooser = document.querySelector('#color-input');
colorChooser.addEventListener('input', function() {
    let colorPick = document.getElementById('color-input').value;
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.children[i].addEventListener('mousedown', function(e) {
            e.target.style.backgroundColor = colorPick;
            mouseIsDown = true;
        })
        grid.children[i].addEventListener('mouseover', function(e) {
            if (mouseIsDown) {
                e.target.style.backgroundColor = colorPick;
            }
        })
    }
})

const eraser = document.querySelector('#btn-eraser');
eraser.addEventListener('click', function() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.children[i].addEventListener('mousedown', function(e) {
            e.target.style.backgroundColor = 'white';
            mouseIsDown = true;
        })
        grid.children[i].addEventListener('mouseover', function(e) {
            if (mouseIsDown) {
                e.target.style.backgroundColor = 'white';
            }
        })
    }
})

const draw = document.querySelector('#btn-draw');
draw.addEventListener('click', function() {
    let colorPick = document.getElementById('color-input').value;
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.children[i].addEventListener('mousedown', function(e) {
            e.target.style.backgroundColor = colorPick;
            mouseIsDown = true;
        })
        grid.children[i].addEventListener('mouseover', function(e) {
            if (mouseIsDown) {
                e.target.style.backgroundColor = colorPick;
            }
        })
    }
})

createDefaultGrid();
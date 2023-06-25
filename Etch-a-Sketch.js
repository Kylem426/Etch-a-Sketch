const gridContainer = document.getElementById('gridContainer');
const btnClear = document.getElementById('clear');
const btnSize = document.getElementById('size');
const btnReset = document.getElementById('reset');
let trigger = false;
let defaultSize = 32;

function createGrid(defaultSize) {
    gridContainer.style.gridTemplateRows = `repeat(${defaultSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`;
    for (let i = 0; i < defaultSize * defaultSize; i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.addEventListener('mousedown', function(e){
        trigger = true;
        e.target.style.backgroundColor = `red`;
    });
      square.addEventListener('mouseup', function(){
        trigger = false;
    });
      square.addEventListener('mouseover', function(e){
        if (trigger === true){
            e.target.style.backgroundColor = `red`;
        };
    });
      gridContainer.appendChild(square);
    }
  } 

btnClear.onclick = () => {
  gridContainer.childNodes.forEach((child) => {
    child.style.backgroundColor = 'white';
  })
}

btnSize.onclick = () => {
  const gridNode = document.getElementById('gridContainer');
  while (gridNode.firstChild) {
    gridNode.removeChild(gridNode.lastChild);
  }
  let size = prompt("How many squares do you want per side?");
  createGrid(size);
}

btnReset.onclick = () => {
  const gridNode = document.getElementById('gridContainer');
  while (gridNode.firstChild) {
    gridNode.removeChild(gridNode.lastChild);
  }
  createGrid(defaultSize);
}

createGrid(defaultSize);
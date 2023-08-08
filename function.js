//initialise
createGrid();

//event listeners
window.addEventListener('mouseover', hoverHighlight);

const btn = document.querySelector(".resetButton");
btn.addEventListener("click", resetSketchpad);

//functions
function createGrid(gridSize = 4){
    for (i = 0; i < gridSize*gridSize; i++) { 
        const gridDiv = document.createElement("div");
        document.querySelector(".gridContainer").appendChild(gridDiv);
        gridDiv.setAttribute("id", `${i}`);
        gridDiv.style.setProperty("flex", `0 0 ${100/gridSize}%`);
    }
}

function resetSketchpad() {
    const gridContainerChildren = document.querySelectorAll(".gridContainer")[0].childNodes;
    while (gridContainerChildren.length > 0) {
        gridContainerChildren[0].remove();
    };

    let gridSize = prompt("How big grid size?");
    if (gridSize > 100) gridSize = 100;
    createGrid(gridSize);
};

function hoverHighlight(e) {
    if (!e.target.id) return;
    const currentGridDiv = document.getElementById(`${e.target.id}`);
    currentGridDiv.classList.add('hover');
};
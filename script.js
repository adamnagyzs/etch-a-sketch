const container = document.querySelector(".container");

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

const newGrid = document.getElementById("newGrid");
const containerSize = 640;

createGrid(16);

newGrid.addEventListener("click", () => createGrid());

function createGrid(numOfSides) {
  while (!numOfSides) {
    const input = prompt("Enter the number of sides of the new grid (1-100)");

    if (input === null) return;

    const value = Number(input);

    if (value >= 1 && value <= 100) {
      numOfSides = value;
    }
  }

  const cellSize = containerSize / numOfSides;
  container.innerHTML = "";

  for (let i = 0; i < numOfSides ** 2; i++) {
    const grid = document.createElement("div");
    grid.className = "grid";
    grid.style.width = `${cellSize}px`;
    grid.style.height = `${cellSize}px`;

    container.appendChild(grid);

    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    });
  }
}

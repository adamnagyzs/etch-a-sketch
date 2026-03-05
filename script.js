const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";
  container.appendChild(grid);
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  });
}

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

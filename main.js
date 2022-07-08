
let board = document.querySelector(".board");

board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
    let sq = document.createElement("div");
    sq.style.backgroundColor = "#fff";
    board.insertAdjacentElement("beforeend", sq);
}
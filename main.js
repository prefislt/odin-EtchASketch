let board = document.querySelector(".board");

function boardSize(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let pixels = size*size;

    for (let i = 0; i < size; i++) {
        let sq = document.createElement("div");
        sq.setAttribute("class", "box");
        board.insertAdjacentElement("beforeend", sq);
    }
}

boardSize(32);
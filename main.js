let board = document.querySelector(".board");
let click = false;

let drawColor = "pink";
let clearColor = "white";
let size = 32;

function boardSize(size) {
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let pixels = size * size;

	for (let i = 0; i < pixels; i++) {
		let sq = document.createElement("div");
		sq.setAttribute("class", "box");
		board.insertAdjacentElement("beforeend", sq);
	}
}

function boardDraw(color) {
	const boxes = document.querySelectorAll(".box");

	boxes.forEach((box) => {
		box.addEventListener("mouseover", () => {
			if (click) {
				box.style.backgroundColor = color;
			}
		});
	});
}

function boardClear(color) {
    const pixels = size*size;
    
	let box = document.querySelectorAll(".box");
	for (let i = 0; i < pixels; i++) {
		box[i].style.backgroundColor = color;
	}
}

// Toggle drawing
board.addEventListener("click", function () {
	click = !click;

	if (click) {
		// Border color change on toggle
		board.style.border = "5px solid black";
	} else {
		board.style.border = "5px solid gray";
	}
});

document.querySelector("#btnReset").addEventListener("click", () => {
    boardClear(clearColor);
});

window.onload = () => {
    boardSize(size);
    boardDraw(drawColor);
};
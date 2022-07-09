let board = document.querySelector(".board");
let click = false;
let toggle = false;

let drawColor = "pink";
let clearColor = "white";

let size = 32;

function boardSize(size) {
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let pixels = size * size;

	// Remove old board
	let boxes = document.querySelectorAll(".box");
	boxes.forEach((box) => {
		box.remove();
	});

	// Generate new board
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
	const pixels = size * size;

	let box = document.querySelectorAll(".box");
	for (let i = 0; i < pixels; i++) {
		box[i].style.backgroundColor = color;
	}
}

function setSize() {
	let inputSize = document.getElementById("inputSize");

	document.querySelector("#setSize").addEventListener("click", () => {
		sizeNum = Math.trunc(Number(inputSize.value));

		if (sizeNum >= 2 && sizeNum <= 100) {
			boardSize(sizeNum);
			boardDraw(drawColor);

			document.querySelector("#inputSize").setAttribute("placeholder", sizeNum);
			size = inputSize.value; // Save size value for other functions ex. boardClear
			inputSize.value = ""; // Clear value after button click
		}
	});
}

function toggleMode() {
    click = !click;

    if (click) {
        // Border color change on toggle
        board.style.border = "5px solid black";
    } else {
        board.style.border = "5px solid gray";
    }
}

function clickTrue() {
    click = true;
    board.style.border = "5px solid black";
}

function clickFalse() {
    click = false;
    board.style.border = "5px solid gray";
}

function drawToggle() {
    board.addEventListener("click", toggleMode)
}

function drawHold() {
	board.addEventListener("mousedown", clickTrue);
	board.addEventListener("mouseup", clickFalse);
}

function drawModes() {
    document.querySelector("#toggleMode").addEventListener("click", () => {
        toggle = !toggle;
    
        if (toggle == true) {
            document.querySelector("#toggleMode").innerText = "Toggle mode";
            board.removeEventListener("mousedown", clickTrue);
            board.removeEventListener("mouseup", clickFalse);
            drawToggle();
        }
        if (toggle == false) {
            document.querySelector("#toggleMode").innerText = "Hold mode";
            board.removeEventListener("click", toggleMode);
            drawHold();
        }
    });
}

function clearButton() {
    document.querySelector("#btnClear").addEventListener("click", () => {
        boardClear(clearColor);
    });
}

boardSize(size);
boardDraw(drawColor);
setSize();
drawHold();
drawModes();
clearButton();
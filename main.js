let board = document.querySelector(".board");

function boardSize(size) {
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let pixels = size * size;

	for (let i = 0; i < pixels; i++) {
		let sq = document.createElement("div");
		sq.setAttribute("class", "box");
		board.insertAdjacentElement("beforeend", sq);
	}

    // Reset button
    document.querySelector("#btnReset").addEventListener("click", function(e) { 
        let box = document.querySelectorAll(".box");
        for (let i = 0; i < pixels; i++) {
            box[i].style.backgroundColor = "white";
        }    
    })
}

function draw() {
	boardSize(32);

	const boxes = document.querySelectorAll(".box");

	boxes.forEach((box) => {
		box.addEventListener("mouseover", (e) => {
			box.style.backgroundColor = "pink";
		});
	});
}

draw();

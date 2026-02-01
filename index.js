const board = document.getElementById("board");
const pen = board.getContext("2d");

let isDrawing = false;

board.addEventListener("mousedown", (e) => {
    isDrawing = true;
    pen.beginPath();
    pen.moveTo(e.offsetX, e.offsetY);
});

board.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    pen.lineTo(e.offsetX, e.offsetY);
    pen.stroke();
});

board.addEventListener("mouseup", () => {
    isDrawing = false;
});

function clearBoard() {
    pen.clearRect(0, 0, board.width, board.height);
}

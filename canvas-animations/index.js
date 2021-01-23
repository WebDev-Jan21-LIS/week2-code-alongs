const canvas = document.getElementById('animations');
const context = canvas.getContext('2d');

function drawCanvas(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

let speed1 = 450;
let speed2 = 450;
let speed3 = 450;

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function updateCanvas() {
    speed1-=1;
    speed2-=2;
    speed3-=3;
    clearCanvas();

    drawCanvas(100, speed1, 50, 50, 'red');
    drawCanvas(200, speed2, 50, 50, 'blue');
    drawCanvas(300, speed3, 50, 50, 'green');

    //  setTimeout(() => {
    //      updateCanvas();
    // }, 30);
    requestAnimationFrame(updateCanvas); 
    //Call the th callback function aprox. 60 times per sec
}

updateCanvas();





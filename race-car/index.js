let currentGame;
let obstaclesFrequency = 0;
let animationId;
//Make the board invisible from the start
document.getElementById('game-board').style.display = 'none';
const raceCanvas = document.getElementById('race');
const context = raceCanvas.getContext('2d');

//Adding onclick event to start-button in order to 
//call startgame function
document.getElementById('start-button').onclick = () => {
    startGame();
};

document.onkeydown = e => {
    currentGame.car.moveCar(e.keyCode);
}
 
function startGame() {
    document.getElementById('game-board').style.display = 'block';
    //Instantiate new game
    currentGame = new Game();
    //Instantiate a new car
    currentCar = new Car();
    currentGame.car = currentCar;
    currentGame.car.drawCar();
    cancelAnimationFrame(animationId);
    updateCanvas();  
}


function detectCollision(obstacle) {
   return !((currentGame.car.x > obstacle.x + obstacle.width) ||
    (currentGame.car.x + currentGame.car.width < obstacle.x) ||
    (currentGame.car.y > obstacle.y + obstacle.height));
}


function updateCanvas() {
    context.clearRect(0, 0, raceCanvas.width, raceCanvas.height);
    currentGame.car.drawCar();
    obstaclesFrequency++;
    if (obstaclesFrequency % 100 === 1) {
        //Draw an obstacle
        let randomObstacleX = Math.floor(Math.random() * 450);
        let randomObstacleY = 0;
        let randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
        let randomObstacleHeight = Math.floor(Math.random() * 50) + 20;
        let newObstacle = new Obstacle(
            randomObstacleX, 
            randomObstacleY, 
            randomObstacleWidth, 
            randomObstacleHeight);

        currentGame.obstacles.push(newObstacle);
    }

    for(let i = 0; i<currentGame.obstacles.length; i++) {
        currentGame.obstacles[i].y += 1;
        // currentGame.obstacles[i] //=> Getting a instance
        //of an obstacle
        currentGame.obstacles[i].drawObstacle();

        if (detectCollision(currentGame.obstacles[i])) {
            alert('BOOOM!');
            obstaclesFrequency = 0;
            currentGame.score = 0;
            document.getElementById('score').innerHTML = 0;
            currentGame.obstacles = [];
            document.getElementById('game-board').style.display = 'none';
        }


        if (currentGame.obstacles.length > 0 && 
            currentGame.obstacles[i].y >= 600) {
                currentGame.obstacles.splice(i, 1);
                currentGame.score++;
                document.getElementById('score').innerHTML = currentGame.score;
            }
    }
    animationId = requestAnimationFrame(updateCanvas);
}




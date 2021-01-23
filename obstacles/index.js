const canvas = document.getElementById('obstacles');
const context = canvas.getContext('2d');

let obstacles = [];

const gameArea = {
    frames: 0,
    start: function() {
        this.interval = setInterval(updateGameArea, 20);
    },
    stop: function() {
        clearInterval(this.interval);
    },
    clear: function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    },
    score: function() {
        const points = Math.floor(this.frames / 5);
        context.font = '10px serif';
        context.fillStyle = 'black';
        context.fillText(`Score: ${points}`, 350, 50);
    }
    
}

function updateGameArea() {
    gameArea.clear();
    player.newPos();
    player.update();
    updateObstacles();
    checkGameOver();
    gameArea.score();
}

class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
    }

    update() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }

    crashWith(obstacle) {
      return !(this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right())
    }
}

const player = new Component(30, 30, 'red', 0, 110);

document.addEventListener('keydown', e => {
    switch(e.keyCode) {
        case 38: 
        player.speedY -= 1;
        break;
        case 40: 
        player.speedY += 1;
        break;
        case 37: 
        player.speedX -= 1;
        break;
        case 39: 
        player.speedX += 1;
        break;
    }
});

document.addEventListener('keyup', () => {
    player.speedX = 0;
    player.speedY = 0;
});


function updateObstacles() {
    for(let i = 0; i<obstacles.length; i++) {
        obstacles[i].x -= 1;
        obstacles[i].update();
    }

    gameArea.frames+=1;
    if (gameArea.frames % 120 === 0) {
        //push two new obstacles
        let minHeight = 20;
        let maxHeight = 200;
        let height = Math.floor(Math.random() * (maxHeight - minHeight +1) + minHeight);
        let minGap = 50;
        let maxGap = 200;
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

        //Create top obstacle
        let obstacleTop = new Component(10, 
            height, 
            'green', 
            canvas.width,
            0);

        obstacles.push(obstacleTop);

        //create bottom obstacle
        let obstacleBottom = new Component(10, 
            canvas.width - height - gap,
            'green',
            canvas.width,
            height + gap);

        obstacles.push(obstacleBottom);
    }
    console.log(obstacles);
}

function checkGameOver() {
   const crashed = obstacles.some((obstacle) => {
        return player.crashWith(obstacle);
    });

    if(crashed) {
        gameArea.stop();
    }
}

gameArea.start();


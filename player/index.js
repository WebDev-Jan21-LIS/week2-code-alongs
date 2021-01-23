const canvas = document.getElementById('animation');
const context = canvas.getContext('2d');

class Ghost {
    constructor() {
        this.x = 25;
        this.y = 25;

        const image = new Image();
        image.src = 'https://lh3.googleusercontent.com/proxy/qNj3JxjEtQO-pmnCgdt4iwrN9647ajrhVgwOSKo_j1fxNY3QYCcJ6SlRifyXQECI1lvc2g-YTqXX7xatohHPxYbSXpB1jnii6rVo1X7x-sdh8A';
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
    }

    moveUp() {
        this.y -= 25;
    }

    moveDown() {
        this.y += 25;
    }

    moveLeft() {
        this.x -= 25;
    }

    moveRight() {
        this.x += 25;
    }

    draw() {
        context.drawImage(this.image, this.x, this.y, 50, 50);
    }
}

const player = new Ghost();

document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 38: 
            player.moveUp();
        break;
        case 40: 
            player.moveDown();
        break;
        case 37: 
            player.moveLeft();
        break;
        case 39: 
            player.moveRight();
        break;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
});
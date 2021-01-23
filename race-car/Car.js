class Car {
    constructor() {
        this.x = 220;
        this.y = 520;
        this.width = 50;
        this.height = 50;
        this.img = './images/car.png';
    }

    drawCar() {
        const carImg = new Image();
        carImg.src = './images/car.png';
        context.drawImage(carImg, this.x, this.y, this.width, this.height);
    }

    moveCar(keyCode) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37:
                if (this.x > 20) {
                    this.x -= 10;
                }
            break;
            case 39:
                if (this.x < 430) {
                    this.x += 10;
                }
            break;
        }
    }
}
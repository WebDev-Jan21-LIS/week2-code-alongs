const canvas = document.getElementById('background');
const context = canvas.getContext('2d');

const image = new Image();
image.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';

const backgroundImage = {
    image: image,
    x: 0,
    speed: -1,
    move: function() {
        this.x += this.speed; //-1 -2 -3 
        this.x %= canvas.width; //-500%500=0 => -1 -2 -3
    },
    draw: function() {
        context.drawImage(this.image, this.x, 0);
        context.drawImage(this.image, this.x + canvas.width, 0);
    }
}

function updateCanvas() {
      backgroundImage.move();
      context.clearRect(0, 0, canvas.width, canvas.height);
      backgroundImage.draw();
      
      requestAnimationFrame(updateCanvas);
}

updateCanvas();
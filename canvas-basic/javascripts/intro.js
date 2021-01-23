const canvas = document.getElementById('example');
let context = canvas.getContext('2d');

//Rectangles
context.fillStyle = 'purple';
context.fillRect(260, 260, 30, 30);
//=>fillRect -> will draw a filled rectangle with a color

context.strokeStyle = '#C0C0C0';
context.strokeRect(50, 50, 50, 50);

context.strokeStyle = 'green';
context.strokeRect(70, 70, 50, 50);
//=>strokeRect -> Will draw a rectangle with no fill 

context.clearRect(265, 265, 20, 20);
//=>clearRect -> will clear a rectangle segment

//Paths -> A list of connected point segments (straight lines, arches, triangles)
//Line stroke
context.beginPath();
context.moveTo(100, 100);
context.lineTo(250, 50);
context.stroke();

context.moveTo(250, 250);
context.lineTo(250, 100);
context.stroke();
context.closePath();

context.strokeStyle = 'yellow';
context.moveTo(90, 90);
context.lineTo(100, 300);
context.stroke();

//Line fill
context.beginPath();
context.moveTo(75, 50);
context.lineTo(100, 75);
context.lineTo(100, 25);
context.fill(); //=>Don't need to close path when using fill

//Arcs
context.beginPath();
context.arc(150, 100, 50, 0, Math.PI * 2);
context.lineWidth = 20;
context.strokeStyle = 'green';
context.stroke();
context.closePath();

context.beginPath();
context.arc(150, 100, 30, 0, Math.PI * 2);
context.lineWidth = 10;
context.strokeStyle = 'red';
context.stroke();
context.closePath();

context.beginPath();
context.arc(150, 200, 30, 0, Math.PI, true);
context.lineWidth = 10;
context.strokeStyle = 'purple';
context.stroke();
context.closePath();

//Text
context.font = '48px serif';
context.fillStyle = 'blue';
context.fillText('Hello World', 10, 50);

context.lineWidth = 1;
context.font = '30px Arial';
context.strokeText('Hello World', 100, 100);

//Image
const cat = new Image();
cat.src = 'http://placekitten.com/g/100/100';
/*cat.onload = function() {
    context.clearRect(0, 0, 300, 300);
    context.drawImage(cat, 10, 10, 100, 100);
};*/
function draw(x) {
    context.clearRect(0, 0, 300, 300); //Clearing canvas
    //context.drawImage(cat, x, 0, 100, 100); //re-drawing image
    context.fillStyle = 'purple';
    context.fillRect(x, 0, 30, 30);
    x+=3;

    setTimeout(() => {
        draw(x); //=> recursion when the functio calls itself
    }, 30);
}

draw(0);






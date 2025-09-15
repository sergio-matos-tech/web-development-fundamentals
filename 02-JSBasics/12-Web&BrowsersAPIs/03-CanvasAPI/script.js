
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 150, 100);

// Draw a circle
ctx.beginPath();
ctx.arc(300, 100, 50, 0, Math.PI * 2, true);
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();

// Draw text
ctx.font = '30px Arial';
ctx.fillStyle = 'green';
ctx.fillText('Hello Canvas', 150, 250);

// Draw a line
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(450, 300);
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

// Draw a triangle
ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(150, 450);
ctx.lineTo(350, 450);
ctx.closePath();
ctx.fillStyle = 'purple';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();
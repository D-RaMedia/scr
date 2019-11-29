// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.fillStyle = "brown";
context.moveTo(600,400);
context.lineTo(600,700);
context.lineTo(900,700);
context.lineTo(900,400);
context.closePath();
context.stroke();
context.fill();




context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "gray";
context.fillStyle = "brown";
context.moveTo(600,400);
context.lineTo(900,400);
context.lineTo(750,200);
context.closePath();
context.stroke();
context.fill();



context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.fillStyle = "brown";
context.moveTo(400,320);
context.lineTo(400,620);
context.lineTo(600,700);
context.lineTo(600,400);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "gray";
context.fillStyle = "gray";
context.moveTo(400,320);
context.lineTo(600,400);
context.lineTo(750,200);
context.lineTo(550,120);
context.closePath();
context.stroke();
context.fill();


context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.moveTo(620,420);
context.lineTo(620,480);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.fillStyle = "blue";
context.moveTo(620,420);
context.lineTo(680,420);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.fillStyle = "blue";
context.moveTo(620,480);
context.lineTo(680,480);
context.lineTo(680,420);
context.lineTo(620,420);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.moveTo(620,480);
context.lineTo(680,480);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.moveTo(680,420);
context.lineTo(680,480);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.moveTo(650,420);
context.lineTo(650,480);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.moveTo(620,450);
context.lineTo(680,450);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.fillStyle = "blue";
context.moveTo(820,480);
context.lineTo(880,480);
context.lineTo(880,420);
context.lineTo(820,420);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.moveTo(820,480);
context.lineTo(880,480);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.moveTo(880,420);
context.lineTo(880,480);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.moveTo(850,420);
context.lineTo(850,480);
context.closePath();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "grey";
context.moveTo(820,450);
context.lineTo(880,450);
context.closePath();
context.stroke();

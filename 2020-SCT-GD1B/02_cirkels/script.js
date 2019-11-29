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
repeat();
function repeat () {
  setTimeout(function(){

    var greenColors = ["#900000", "#007900", "#000090", "#909000"];
    var rdx = Math.floor(Math.random() * 1536);
    var rdy = Math.floor(Math.random() * 754);
    var rdc = Math.floor(Math.random() * 5);
    var rds = Math.floor(Math.random() * 100);
context.beginPath();
context.lineWidth = "6.9";
context.fillStyle = greenColors[rdc];
context.arc(rdx,rdy,rds,0,Math.PI*2);
context.stroke();
context.fill();
repeat();
}, 100); }

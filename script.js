// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  // Här skriver du funktionen som ritar bilden
  //Huset, lådan
const s = 400;
c.linewidth = "5";
c.strokeStyle = "yellow";
c.rect(midX - 600, midY + 50, s, s-200);
c.stroke();
c.rect(midX -s+600, midY + 50, s, s-200);
c.stroke()

//Huset,taket
c.linewidth = "5";
c.strokeStyle = "red";
c.moveTo(midX - 600, midY+50);
c.lineTo(midX - 400, midY-100);
c.stroke();
c.moveTo(midX-400, midY-100);
c.lineTo(midX-200, midY+50);
c.stroke();
c.moveTo(midX -s+600, midY+50);
c.lineTo(midX-s+800, midY-100);
c.stroke()
c.moveTo(midX-s+800,midY-100);
c.lineTo(midX-s+1000,midY+50);
c.stroke();

//Trädet, stammen
const b = 100;
c.fillStyle = "brown";
c.fillRect(midX-b/2, midY + 50, b, b+50);

//Trädet, löv
const r = 150; // Cirkelns radie
c.fillStyle = "pink";
c.beginPath();
c.ellipse(midX, midY, 100, 150, Math.PI / 100, 0, 4* Math.PI); 
c.closePath();
c.fill();

}

drawPicture();

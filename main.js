
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle=blue;
ctx.lineWidth=2;
ctx.arc(250,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=yellow;
ctx.lineWidth=2;
ctx.arc(200,90,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=black;
ctx.lineWidth=2;
ctx.arc(250,100,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=green;
ctx.lineWidth=2;
ctx.arc(200,90,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=yellow;
ctx.lineWidth=2;
ctx.arc(250,100,40,0,2*Math.PI);
ctx.stroke();




window.addEventListener("load", first)
function first(){
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.rect(200, 200, 300, 300);
ctx.stroke();
}

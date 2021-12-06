let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight
let ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.lineCap = "round";
let painting = false
let last
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
//是否是触摸设备
let isTouchDevice = "ontouchstart" in document.documentElement;
if (isTouchDevice){
  canvas.ontouchmove = (e) => {
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill()
  }
}else {
  canvas.onmousedown = (e) =>{
    painting = true
    last = [e.clientX, e.clientY]
  }
  canvas.onmousemove = (e) => {
    if (painting === true){
      drawLine(last[0], last[1], e.clientX, e.clientY);
      last = [e.clientX, e.clientY]
    } else {}
  }
  canvas.onmouseup = () => {
    painting = false
  }
}

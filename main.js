canvas.onclick = (e) => {
  let div = document.createElement('div')
  div.className = "dot"
  div.style.left = e.clientX + 'px'
  div.style.top = e.clientY + 'px'

  console.log(div.className);
  canvas.appendChild(div)
}
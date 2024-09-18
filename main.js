const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=> {
    const xpos = event.offsetX
    const ypos = event.offsetY

    const spanEl = document.createElement("span")
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";
    bodyEl.appendChild(spanEl);
    const size = Math.random()*100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    setTimeout(() => {
        spanEl.remove();
    }, 3000);








});

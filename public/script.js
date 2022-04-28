const canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")

let position = {
    x : 0,
    y : 0,
}

const resize = () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}

const handleMouseMove = (e) => {
    position.x = e.offsetX
    position.y = e.offsetY
    ctx.lineTo(position.x, position.y)
    ctx.stroke()
    ctx.moveTo(position.x, position.y)
}

const init = () => {
    resize()
    let ctx = canvas.getContext("2d")
    ctx.strokeStyle = "white"
    ctx.lineWidth = 3;
    ctx.antiAlias = true;
    ctx.lineCap = "round";
    canvas.addEventListener("mousedown", (e) => {
        position.x = e.offsetX
        position.y = e.offsetY
        ctx.beginPath()
        ctx.moveTo(position.x, position.y)
        canvas.addEventListener("mousemove", handleMouseMove)
    })
    
    canvas.addEventListener("mouseup", (e) => {
        canvas.removeEventListener("mousemove", handleMouseMove)
    })
}

window.addEventListener("resize", init)
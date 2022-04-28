import React, { useEffect, useRef, useState } from 'react'
import Timer from './../Timer/index';

function Canvas({tool}) {

    const canvasRef = useRef(null)
    const canvasContainerRef = useRef(null)
    var ctx = null
    let timer = null

    let position = {
        x : 0,
        y : 0,
    }
    
    const handleMouseMove = (e) => {
        position.x = e.offsetX
        position.y = e.offsetY
        if(ctx){
            ctx.lineTo(position.x, position.y)
            ctx.stroke()
            ctx.moveTo(position.x, position.y)
        }
    }

    const handleMouseDown = (e) => {
        position.x = e.offsetX
        position.y = e.offsetY
        // console.log(tool)
        if(ctx){
            ctx.beginPath()
            ctx.moveTo(position.x, position.y)
            if(tool === "draw"){
                ctx.lineWidth = Math.min(canvasRef.current.width, canvasRef.current.height) / 200
                ctx.strokeStyle = "black"
            }
            else if(tool === "erase"){
                ctx.lineWidth = 10
                ctx.strokeStyle = "white"
            }
        }
        canvasRef.current.addEventListener("mousemove", handleMouseMove)
    }
    
    const handleMouseUp = (e) => {
        position.x = e.offsetX
        position.y = e.offsetY
        canvasRef.current.removeEventListener("mousemove", handleMouseMove)
    }
    
    const handleResize = () => {
        canvasRef.current.height = 0
        canvasRef.current.width = 0
        clearTimeout(timer)
        timer = setTimeout(resize, 200)
    }

    const resize = () => {
        let container = canvasContainerRef.current
        canvasRef.current.height = container.clientHeight
        canvasRef.current.width = container.clientWidth
        if(ctx){
            ctx.lineWidth = Math.min(canvasRef.current.width, canvasRef.current.height) / 200
        }
    }

    useEffect(() => {
        ctx = canvasRef.current.getContext("2d")
        resize()
        if(ctx){
            ctx.antiAlias = true;
            ctx.lineCap = "round";
        }
        canvasRef.current.addEventListener("mousedown", handleMouseDown)
        canvasRef.current.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            canvasRef.current.removeEventListener("mousedown", handleMouseDown)
            canvasRef.current.removeEventListener("mouseup", handleMouseUp)
        }
    }, [tool])

  return (
    <div className= "canvas" ref = {canvasContainerRef} >
        <canvas id='canvas' className = {tool} ref = {canvasRef} ></canvas>
    </div>
  )
}

export default Canvas
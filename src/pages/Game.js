import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import pencil from '../assets/pencil.png'
import eraser from '../assets/eraser.png'
import Delete from "../assets/delete.png"
import man from '../assets/man.png'
import Modal from '../components/Modal'
import Timer from './../components/Timer/index';
import Canvas from '../components/Canvas'


function Game() {

    const [showModal, setShowModal] = useState(false)
    const [tool, setTool] = useState('draw')

    // let tool = "draw";

    const handleDelete = () => {
        setTool("delete")
        // ctx = canvasRef.current.getContext("2d")
        // canvasRef.current.className = "draw"
        // if(ctx){
        //     console.log(ctx)
        //     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        // }
    }

    const handleDraw = () => {
        setTool("draw");
        // ctx = canvasRef.current.getContext("2d")
        // canvasRef.current.className = "draw";
    }

    const handleErase = () => {
        setTool("erase");
        // ctx = canvasRef.current.getContext("2d")
        // canvasRef.current.className = "erase";
    }

    const handleModalClick = () =>{
        setShowModal(!showModal)
    }

    return (
        <section className='game'>
           <Header name='Mind Palace'/>
           <div className='game-board'>
               <Canvas tool = {tool}/>
               <div className='options'>
                   <Timer/>
                   <div className='menu'>
                       <div className = {tool === "draw"? "active" : ""} ><img src={pencil} alt="draw" onClick = {handleDraw}/></div>
                       <div className = {tool === "delete"? "active" : ""} ><img src={Delete} alt="redo" onClick = {handleDelete} /></div>
                   </div>
                   <div className='leaderboard'>
                       <h1>Leaderboard</h1>
                       <ul>
                           <li><img alt="avatar" src={man}/>Shapemaster007</li>
                           <li><img alt="avatar" src={man}/>Shapemaster007</li>
                           <li><img alt="avatar" src={man}/>Shapemaster007</li>
                           <li><img alt="avatar" src={man}/>Shapemaster007</li>
                           <li><img alt="avatar" src={man}/>Shapemaster007</li>  
                           
                       </ul>
                   </div>
                  <Button txt="Submit" font_size={3} handleModalClick={handleModalClick} />
                   {showModal && <Modal handleModalClick ={handleModalClick}/>}
               </div>
           </div>
        </section>
    )
}

export default React.memo(Game)

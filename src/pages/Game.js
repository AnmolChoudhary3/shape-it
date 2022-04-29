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

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const convertImageData = (data) => {
        let converted_data = []
        for (let i = 0; i < data.length; i += 4) {
            if(data[i+3] === 255){
                converted_data.push(1)
            }
            else{
                converted_data.push(0)
            }
        }
        return converted_data
    }

    const getCanvas32 = () => {
        const canvas = document.querySelector("#canvas")
        const ctx = canvas.getContext("2d")
        const oc = document.createElement('canvas');
        const octx = oc.getContext('2d');
        oc.width = 32
        oc.height = 32
        octx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 32, 32)
        ctx.drawImage(oc, 0, 0, 32, 32)
        let data = octx.getImageData(0, 0, 32, 32).data
        data = convertImageData(data)
        console.log(data)
        postData('http://127.0.0.1:5000/getResult', { data })
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleDelete = () => {
        setTool("delete")
        setTimeout(() => {
            setTool("draw")
        }, 300)
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

    // const handleErase = () => {
    //     setTool("erase");
    //     // ctx = canvasRef.current.getContext("2d")
    //     // canvasRef.current.className = "erase";
    // }

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
                  <Button txt="Submit" font_size={3} handleModalClick={getCanvas32} />
                   {showModal && <Modal handleModalClick ={handleModalClick}/>}
               </div>
           </div>
        </section>
    )
}

export default React.memo(Game)

import React, { useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import pencil from '../assets/pencil.png'
import eraser from '../assets/eraser.png'
import undo from '../assets/undo.png'
import redo from '../assets/redo.png'
import man from '../assets/man.png'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'


function Game() {

    const [showModal, setShowModal] = useState(false)

    const handleModalClick = () =>{
        setShowModal(!showModal)
    }

    return (
        <section className='game'>
           <Header name='Mind Palace'/>
           <div className='game-board'>
               <canvas className='canvas'></canvas>
               <div className='options'>
                   <div className='timer'>1:20</div>
                   <div className='menu'>
                       <img src={pencil}/>
                       <img src={eraser}/>
                       <img src={undo}/>
                       <img src={redo}/>
                   </div>
                   <div className='leaderboard'>
                       <h1>Leaderboard</h1>
                       <ul>
                           <li><img src={man}/>Shapemaster007</li>
                           <li><img src={man}/>Shapemaster007</li>
                           <li><img src={man}/>Shapemaster007</li>
                           <li><img src={man}/>Shapemaster007</li>
                           <li><img src={man}/>Shapemaster007</li>  
                           
                       </ul>
                   </div>
                  <Button txt="Submit"  font_size={3} handleModalClick={handleModalClick} />
                   {showModal && <Modal handleModalClick ={handleModalClick}/>}
               </div>
           </div>
        </section>
    )
}

export default Game

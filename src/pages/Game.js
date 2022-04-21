import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'

function Game() {
    return (
        <section className='game'>
           <Header name='Mind Palace'/>
           <div className='game-board'>
               <canvas className='canvas'></canvas>
               <div className='options'>
                   <div className='timer'>1:20</div>
                   <Button txt="Submit" font_size={3}/>
               </div>
           </div>
        </section>
    )
}

export default Game

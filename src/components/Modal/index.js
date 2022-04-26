import React from 'react'
import './index.css'
import ranking from '../../assets/ranking.png'
import cancel from '../../assets/cancel.png'

function Modal() {
    return (
        <div className='modal-container'>
            <div class="modal">

                <img className='cancel-img' src={cancel}/>
                <h1 className='cookie-font'>Game Over</h1>
                <img className='ranking-img' src={ranking}/>
            </div>
        </div>
    )
}

export default Modal

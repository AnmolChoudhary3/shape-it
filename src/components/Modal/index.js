import React from 'react'
import './index.css'
import ranking from '../../assets/ranking.png'
import cancel from '../../assets/cancel.png'
import man from '../../assets/man.png'
import { Link } from 'react-router-dom'

function Modal({handleModalClick}) {


    return (
        <div className='modal-container'>
            <div className="modal">
                <img className='cancel-img' src={cancel} onClick={handleModalClick}/>
                <h1 className='cookie-font'>Game Over</h1>
                <img className='ranking-img' src={ranking}/>
                <div className='your-rank-wrapper'>
                    <div className='your-rank'>
                        <img className='your-rank-avatar' src={man}/>
                        <div className='rank'>
                            <p>Animesh, you secured</p>
                            <h2>15th place</h2>
                        </div>
                    </div>
                    <Link to='/result'> <div className='full-result-button'>Full Result</div> </Link>
                    
                </div>
            </div>
        </div>
    )
}   

export default Modal

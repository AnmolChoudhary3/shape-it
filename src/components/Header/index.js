import React from 'react'
import './index.css'
import teamwork from '../../assets/teamwork.png'

function Header({name}) {
    return (
        <header className='header cookie-font'>
            <h1>{name}</h1>
            <div className='header-info'>
                <img src={teamwork} />
                <div class="player-wrapper">
                    <h2>40</h2>
                    <p>Players</p>
                </div>
            </div>

        </header>
    )
}

export default Header

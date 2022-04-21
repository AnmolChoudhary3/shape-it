import React from 'react'
import Button from '../components/Button'
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <main className='landing'>
            <div class="landing-wrapper">
                <h1 className='cookie-font landing-heading'>Shape It</h1>
                <Link to='/game'><Button txt="Play" font_size={5}/></Link>
                <div className='landing-option-wrapper'>
                    <p>Create Room</p>
                    <p>Practice</p>
                </div>
            </div>
            
        </main>
    )
}

export default Landing

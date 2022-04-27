import React from 'react'
import './index.css'


function Button({txt, font_size, handleModalClick}) {
    return (
        // <div className='button' data-attribute={c}>
        <div className='button' onClick={handleModalClick} style = {{fontSize: `${font_size}rem`}}>
        
            <p>{txt}</p>
        </div>
    )
}

export default Button

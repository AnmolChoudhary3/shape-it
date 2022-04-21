import React from 'react'
import './index.css'


function Button({txt, font_size}) {
    return (
        // <div className='button' data-attribute={c}>
        <div className='button' style = {{fontSize: `${font_size}rem`}}>
        
            <p>{txt}</p>
        </div>
    )
}

export default Button

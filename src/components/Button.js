import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <Link to={props.link}>               
            <button className={`btn ${props.cls}`} onClick={onClick}>
                {props.text}
            </button>
        </Link>
    )
}

export default Button

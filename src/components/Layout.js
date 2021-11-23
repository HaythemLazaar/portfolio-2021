import React from 'react'
import "./Layout.css"

function Layout(props) {
    return (
        <div className="bg-dark">
            <p>{props.text}</p>
        </div>
    )
}

export default Layout

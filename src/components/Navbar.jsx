import React from 'react'

function Navbar(){
    return (
        <nav>
             <div className="logo">
            <h1 className="animate__animated animate__heartBeat">LineUp</h1>
        </div>
        <div className="menu">
            <a href="#" target="_blank">HOME</a>
            <a href="#" target="_blank">ABOUT</a>
            <a href="#" target="_blank">SERVICES</a>
            <a href="#" target="_blank">CONTACT</a>
        </div>
        </nav>
    )
}

export default Navbar;
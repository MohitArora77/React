import React from 'react'
import style from "./navbar.module.css"

function Navbar() {
  return (
    <nav id={style.navbar}>
        <div>Navbar</div>
        <ul>
            <li>Login</li>
            <li>Sign Up</li>
        </ul>
    </nav>
  )
}

export default Navbar
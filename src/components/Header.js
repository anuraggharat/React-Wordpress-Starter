import React from 'react'
import Github from '../assets/github.png'


export default function Header() {
    return (
        <header>
            <nav>
                <div className="nav-logo">
                <h2>React-Wordpress</h2>
                </div>
                <div className="nav=list">
                    <img src={Github} className="nav-img" height="50px" width="50px" />
                </div>
            </nav>
        </header>
    )
}

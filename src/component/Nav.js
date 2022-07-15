import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom"


function Nav(){
    return(
        <header>
            <div>
                <h1><Link to="/">Home</Link></h1>
                <ul className="nav">
                    <li><Link to="/list01">sample01</Link></li>
                    <li><Link to="/list02">sample02</Link></li>
                    <li><Link to="/list03">sample03</Link></li>
                </ul>
            </div>
        </header>
    )
}


export default Nav
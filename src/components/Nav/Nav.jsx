import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

export default function Nav() {
    const navStyle ={
        color: 'white',
        textDecoration: 'none',
    };

    return(

        <Navbar className="color-nav">
        <Link style={navStyle}  to= '/Home'>  
        <a class="navbar-brand" href="#" >Waitlistify</a>
        </Link>  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <Link style={navStyle}  to= '/Home'>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home </a>
                    </li>
                </Link>
                <Link style={navStyle}  to= '/Classes'>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Classes</a>
                    </li>
                </Link>
                <Link style={navStyle}  to= '/Stats'>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Stats</a>
                    </li>
                </Link>
                <Link style={navStyle}  to= '/Profile'>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                    </li>
                </Link>

            </ul>
        </div>
        </Navbar>

    )
}
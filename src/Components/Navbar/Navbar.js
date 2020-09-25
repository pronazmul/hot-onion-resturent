import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../Images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
                
const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-white bg-white">
                <Link className="navbar-brand" href="#">
                    <img height='50' src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto font-weight-bolder">
                        <li className="nav-item">
                            <Link className="nav-link font-width-bold mt-1 text-secondary" href="#"><FontAwesomeIcon icon={faCartPlus}/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3 text-secondary font-width-bold" href="#">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3 font-width-bold btn text-light rounded-button px-3" href="#">Resister</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
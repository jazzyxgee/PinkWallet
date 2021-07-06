import React, { useState, useEffect }  from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaPaw } from 'react-icons/fa';

import './Navbar.css';

function Navbar(){

    /*State Hooks for hamburger style menu*/ 
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Link exact to="/" className="nav-logo">
                        <FaPaw className='navbar-icon' />
                        PuppyWallet
                    </Link>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                to="/services"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                to="/products"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                to="/sign-in"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>
        </>       
    )
}

export default Navbar;
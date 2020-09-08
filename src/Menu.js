import React from 'react'
import './css/Menu.css';

import Logo from './Logo';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" exact to="/"><Logo /></NavLink>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/About">About Us</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Services">Services</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Projects">Projects</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/News">News</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Contact">Contact Us</NavLink></li>
                    <li className="nav-item searchBlock"><a className="nav-link"><i className="fa fa-search"></i></a>
                        <form className="form-search">
                            <input type="text" placeholder="Search:" />
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;
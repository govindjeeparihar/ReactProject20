import React from 'react';
import './css/Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>


            <div className="up-footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-sm-6">
                            <div className="footer-widget text-widget">
                                <h3>we are <span>Shtepia.</span></h3>
                                <span>hello@stepia.com</span>
                                <span>+(123) 456 7890</span>
                                <p><span>Working Hours: </span> 8:00 - 18:00</p>
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        

                        <div className="col-md-4 col-sm-6">
                            <div className="footer-widget posts-widget">
                                <h3>Footer Links</h3>
                                <ul className="footer-links">
                                    <li><NavLink exact to="/">Home</NavLink></li>
                                    <li><NavLink to="/About">About Us</NavLink></li>
                                    <li><NavLink to="/Services">Services</NavLink></li>
                                    <li><NavLink to="/Projects">Projects</NavLink></li>
                                    <li><NavLink to="/News">News</NavLink></li>
                                    <li><NavLink to="/Contact">Contact Us</NavLink></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="footer-widget newsletter-widget">
                                <h3>Newsletter</h3>
                                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>
                                <form className="newletter-form">
                                    <input type="text" name="your-email" id="your-email" placeholder="email" />
                                    <input type="submit" id="submit_it" value="go" />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <div className="copyright">
                <div className="container">
                    <p className="m-0">© Copyright 2018. "Stepia" by Nunforest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
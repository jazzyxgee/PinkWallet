import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import{
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
}from 'react-icons/fa';
import { FaPaw } from 'react-icons/fa';

function Footer(){

    return(
        <footer>
            
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>PuppyWallet</h2>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link to='/sign-in'>Sign In</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/products'>Products</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Support</h2>
                        <Link to='/sign-up'>Support Center</Link>
                        <Link to='/'>Customer Service</Link>
                    </div>
                </div>
            </div>

            <div className = 'social-media'>
                <div className='social-media-wrap'>
                    
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <FaPaw className='navbar-icon' />
                            PuppyWallet
                        </Link>
                    </div>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to={
                                '//www.hitokombucha.com'
                            }
                            target='_blank'
                            aria-label='Facebook'>
                            <FaFacebook />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={'//www.instagram.com/hi2kombucha/'}
                            target='_blank'
                            aria-label='Instagram'>
                            <FaInstagram />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={
                                '//youtu.be/ZGgeKfqYt7o'
                            }
                            target='_blank'
                            aria-label='Youtube'>
                            <FaYoutube />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={'//twitter.com/'}
                            target='_blank'
                            aria-label='Twitter'>
                            <FaTwitter />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={'//www.linkedin.com/in/jasmine-g-ab07a418b/'}
                            target='_blank'
                            aria-label='LinkedIn'>
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}
export default Footer;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './Pricing.css';

function Pricing(){
    
      return (

          <div className='container'>

                <h1 className = 'top-heading'>Pricing</h1>

                <div className='pricing'>
                    <div className='plan'>
                        <h2>Free</h2>
                        <div class="price">$0/monthly</div>
                        <ul className = 'features free'>
                            <li>Unlimited Transactions</li>
                            <li>24/7 Customer Support</li>
                        </ul>
                        <Link to='/sign-up'>
                            <Button buttonSize='btn--wide' buttonStyle = 'btn--outline' buttonColor='primary'>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                    <div className='plan popular'>
                        <div className = 'most-popular-title'>Most Popular</div>
                        <h2>Pro</h2>
                        <div class="price">$5/monthly</div>
                        <ul className = 'features'>
                            <li>Unlimited Transactions</li>
                            <li>Virtual Assistant</li>
                            <li>Zero Fees</li>
                            <li>Free Pink Wallet</li>
                        </ul>
                        <Link to='/sign-up'>
                            <Button buttonSize='btn--wide' buttonStyle = 'btn--outline' buttonColor='primary'>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                    <div className='plan'>
                        <h2>Lavish</h2>
                        <div class="price">$15/monthly</div>
                        <ul className = 'features'>
                            <li>Unlimited Transactions</li>
                            <li>Virtual Assistant</li>
                            <li>Zero Fees</li>
                            <li>Free Pink Wallet</li>
                            <li>Free Yearly Member Event</li>
                        </ul>
                        <Link to='/sign-up'>
                            <Button buttonSize='btn--wide' buttonStyle = 'btn--outline' buttonColor='primary'>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </div>



          </div>
      );
}

export default Pricing;
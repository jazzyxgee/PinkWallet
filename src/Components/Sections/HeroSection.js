import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './HeroSection.css';

function HeroSection({
    lightBg,
    buttonLabel,
    topLine,
    lightText,
    headline,
    lightTextDesc,
    description,
    img,
    alt,
    imgStart

}){

    return (

        <div className={lightBg ? 'hero-section' : 'hero-section darkBg'}>

            <div className='flex-container' style = {{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>

                <div className='flex-item'>

                    <div className='top-line'>{topLine}</div>
                    <h1 className={lightText ? 'heading' : 'heading dark'}>
                        {headline}
                    </h1>
                    
                    <p className={lightTextDesc ? 'hero-description': 'hero-description dark'}>
                        {description}
                    </p>
                    <div className ='btn'>
                        <Link to='/sign-up'>
                            <Button buttonSize='btn--wide' buttonColor='maroon'>
                                {buttonLabel}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='flex-item'>

                    <img src={img} alt={alt} className='hero-img' />
                    
                </div>

            </div>
            
        </div>
    
        
    );
}

export default HeroSection;
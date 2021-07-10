import React from 'react';
import HeroSection from '../../Sections/HeroSection';
import CryptoSection from '../../Sections/CryptoSection';
import {ObjTwo, ObjThree} from './Data';


function Services() {
    return (
      <>
        <HeroSection {...ObjTwo} />
        <CryptoSection  {...ObjThree}/>
      </>
    );
}
  
export default Services;
import React from 'react';
import HeroSection from '../../Sections/HeroSection';
import CryptoSection from '../../Sections/CryptoSection';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import {ObjTwo, ObjThree} from './Data';


function Services() {
    return (
      <>
        <Navbar />
        <HeroSection {...ObjTwo} />
        <CryptoSection  {...ObjThree} />
        <Footer />
      </>
    );
}
  
export default Services;
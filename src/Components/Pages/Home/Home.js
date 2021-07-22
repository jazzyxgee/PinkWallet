import React from 'react';
import HeroSection from '../../Sections/HeroSection';
import CryptoSection from '../../Sections/CryptoSection';
import Pricing from '../../Sections/Pricing';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import { ObjOne, ObjTwo, ObjThree} from './Data';


function Home() {
    return (
      <>
        <Navbar /> 
        <HeroSection {...ObjOne} />
        <HeroSection {...ObjTwo} />
        <CryptoSection  {...ObjThree} />
        <Pricing />
        <Footer />
      </>
    );
}
  
export default Home;
import React from 'react';
import HeroSection from '../../Sections/HeroSection';
import CryptoSection from '../../Sections/CryptoSection';
import { ObjOne, ObjTwo, ObjThree, ObjFour } from './Data';


function Home() {
    return (
      <>
        <HeroSection {...ObjOne} />
        <HeroSection {...ObjTwo} />
        <CryptoSection  {...ObjThree}/>
      </>
    );
}
  
export default Home;
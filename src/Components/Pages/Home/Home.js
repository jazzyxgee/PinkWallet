import React from 'react';
import HeroSection from '../../Sections/HeroSection';
import CryptoSection from '../../Sections/CryptoSection';
import Pricing from '../../Sections/Pricing';
import { ObjOne, ObjTwo, ObjThree} from './Data';


function Home() {
    return (
      <>
        <HeroSection {...ObjOne} />
        <HeroSection {...ObjTwo} />
        <CryptoSection  {...ObjThree}/>
        <Pricing />
      </>
    );
}
  
export default Home;
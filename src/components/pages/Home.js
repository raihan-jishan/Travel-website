import React from 'react';
//  import Other componets from react 
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import Services from './Services';

const Home = () => {
  return (
    <div>
        <HeroSection /> 
        <Cards />
        <Services /> 
        <Footer /> 
    </div>
  )
}

export default Home
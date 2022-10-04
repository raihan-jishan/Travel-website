import React from 'react';
//  import Other componets from react 
import Cards from '../Cards';
import Footer from  '../Footer/Footer'
import HeroSection from '../HeroSection'
import Product from './Product';
import Services from './Services';

const Home = () => {
  return (
    <div>
        <HeroSection /> 
        <Cards />
        <Services /> 
        <Product /> 
        
    </div>
  )
}

export default Home
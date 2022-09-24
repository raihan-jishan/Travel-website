import React from 'react';
import '../styles/Card.css';
//  icon customization 
import '../styles/Iconcustomize.css';
import CardItem from './Carditem';
import ShortCard from './ShortCard';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Amazing Destinations <i className="fa-solid fa-down-long"></i></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              SameSite='None' 
              text='Explore the un stopable Jungle. With confidence and comfort'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src="https://media.istockphoto.com/photos/rear-of-car-driving-on-highway-in-the-forest-with-mountain-on-gloomy-picture-id1365407803?b=1&k=20&m=1365407803&s=170667a&w=0&h=aZ7vE4M5eJ1MHy_dd2zCNuG2OygsUPAoLtMXyjkXc5E="
              text='Travel through the better way in youself'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="https://drive.google.com/uc?export=view&id=1yIMWJdS9W4BS5KJL4Nkf572NyB-07EaG"
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src="https://drive.google.com/uc?export=view&id=1DcgBDzYcfsHsrk1URTyGg7VlIJ9Tcbj6"
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
              />
            <CardItem
              src="https://drive.google.com/uc?export=view&id=1da2Ims0qjEEuyX-zFC1brSuHD2rcbUsd"
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />

    {/*  other */}
 
          </ul>
        </div>
      </div>
    {/*  customize  */}

      <ShortCard /> 




    </div>
  );
}

export default Cards;
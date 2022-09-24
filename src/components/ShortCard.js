import React from 'react';
import '../styles/Card.css';
//  icon customization 
import CardItem from './Carditem';

export default function ShortCard(){
    return(
        <>
            <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              SameSite='None' 
              text='Explore the deep road & lovely destinations'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              text='Explore the River by boat & fell nature'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="https://images.unsplash.com/photo-1431057259500-78dd318a0a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              text='Fell cloud of the nature'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src="https://images.unsplash.com/photo-1415650328328-1909c4ceabdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              text='Experience of the beautiful waterfol'
              label='Adventure'
              path='/products'
              />
            <CardItem
              src="https://images.unsplash.com/photo-1482148454461-aaedae4b30bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              text="Expreince the embrance type natural tree "
              label='Adrenaline'
              path='/sign-up'
            />
               
    {/*  other */}
 
          </ul>
        </div>
      </div>
        </>
    )
}

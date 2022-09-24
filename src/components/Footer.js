import React from 'react';
// react scroll to top 
import ScrollToTop from "react-scroll-to-top";
//  import module style 
import classes from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <div>
      <div className={classes.warningBody}>
        <p className={classes.Sorry}>Sorry, for bad user expreince <i className="fa-solid fa-face-sad-tear"></i></p>
        <h2>This is test &  beta version of this webpage, In few weaks it is full functional</h2>
      </div>
      <div className={classes.upComingFeautures}>
        <ul>
            <li>Payment method <i className="fa-solid fa-money-bill"></i></li>
            <li>Order room just clicking <i className="fa-regular fa-hand"></i></li>
            <li>See order status <i className="fa-solid fa-cart-shopping"></i></li>
            <li>Found product page !</li>
            <li>
                find best ui and faster speed and more updates ! <i className="fa-solid fa-code"></i>
            </li>
        </ul>
      </div>
      <div style={{ marginTop: "150vh" }} />
      <ScrollToTop smooth />
    </div>
  )
}
export default Footer;
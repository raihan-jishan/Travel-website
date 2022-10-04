/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
// react scroll to top 
import ScrollToTop from "react-scroll-to-top";
//  import module style 
import classes from '../../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={classes.footer} style={{marginTop:'60px'}}>
  	 <div className={classes.container}>
  	 	<div className={classes.row}>
  	 		<div className={classes.footerCol}>
  	 			<h4>LOGO</h4>
  	 			<ul>
  	 				<li><a href="#"><Link to='/home'>Home</Link></a></li>
  	 				<li><a href="#"><Link to={'/service'}>our services</Link></a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={classes.footerCol}>
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={classes.footerCol}>
  	 			<h4>About business</h4>
  	 			<ul>
  	 				<li><a href="#">host your place</a></li>
  	 				<li><a href="#">work with us</a></li>
  	 				<li><a href="#">payment guides</a></li>
  	 				<li><a href="#">fees etc..</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={classes.footerCol}>
  	 			<h4>follow us</h4>
  	 			<div className={classes.socialLinks}>
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
     <ScrollToTop smooth /> 
  </footer>
  )
}
export default Footer;
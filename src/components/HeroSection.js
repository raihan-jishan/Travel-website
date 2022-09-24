//  import button 
import {Button} from './Button';
import '../styles/HeroSection.css';
export default function HeroSection() {
    return(
       <div className="hero-container">
         <h1>ADVENTURE AWAITS</h1>
         <p>Dont stop, Just goOn! </p>
        <div className="hero-btns">
            <Button className='btns'
            buttonStyle='btn-outline'
            buttonSize='btn--large'
            >Get Started </Button>
            {/* 2 */}
            <Button className='btns'
            buttonStyle='btn-primary'
            buttonSize='btn--large'
            >WATCH ONOTHER <i className="fa-solid fa-circle-play" />  </Button>
        </div>

        </div>
    )
}
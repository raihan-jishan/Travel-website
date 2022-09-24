// import Link from react router dom 
import { Link } from 'react-router-dom';
// import gloval style from ../ button 
import '../styles/Button.css';
// const styles 
const STYLES = ['btn--primary', 'btn--outline']
//sizes
const SIZES = ['btn--medium', 'btn-large' ];
export const Button = ({children, type, onClick, buttonStyle, buttonSize  }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle
     : STYLES[0]

     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
     //return function 
     return(
        <>
        <Link to='/sign-up' className='btnMobile'>
            <button
            className={`btn ${checkButtonSize} ${checkButtonSize}`}
            type={type}
            >
                {children}
            </button>


        </Link>
        </>
     )
}
    
//  module css
import style from './Loginpage.module.css';
//  image 
import Image from  './assets/Login.svg';
//  short title page
import Title from './PageTitle/Title';
import Other from './PageTitle/Other';
export default function AuthenticationPage() {
    return(
        <>
        <Title /> 
        <div className={style.Login}>
        <img src={Image} alt='svg for website' /> 
        <Other /> 
        </div>
        </>
    )
}
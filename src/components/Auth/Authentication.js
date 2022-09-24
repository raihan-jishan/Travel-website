//  import authentication provider
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationPage from "./AuthenticationPage";
// import style
import './dashboard.css'
export default function Authentication(){
    //  handleClick function 
    const handleClick = () => {
        alert('You gonna Log out from goOn !')
    }
    // authentication
    const { loginWithRedirect, logout } = useAuth0();
    return(
        <div className="dashBoard">
         <AuthenticationPage /> 
         <div className="Buttons">
         <button onClick={() => loginWithRedirect()} className='basicButton In'>Log In <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
         {/*  log out */}
         <button onClick={() => logout({ returnTo: window.location.origin })}
         className="basicButton Out">
      Log Out <i className="fa-solid fa-delete-left"  onClick={handleClick}></i>
    </button>
    </div>
    </div>
    )
}
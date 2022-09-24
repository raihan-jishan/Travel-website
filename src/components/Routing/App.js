//  import element from react router dom 
import { Route, Routes, Navigate } from 'react-router-dom';
//  import react components 
import Navbar  from '../Navbar';
import Home from '../pages/Home';
import Services from '../pages/Services';
// import Authentication 
import Authentication from '../Auth/Authentication';
// import other components 

// import css file
export default function App(){
  return(
    <div>
    <Navbar /> 
    <Routes>
    <Route path='/home' element={<Home />  } />
    {/*  service */}
    <Route path='/services' element={<Services />  } />



    {/* login sign up  */}
    <Route path='/login' element={<Authentication />} />

{/*  navigate */}
<Route
       path="*"
       element={<Navigate to="/home" replace />}
   />
    </Routes>
    
    </div>
  )
}
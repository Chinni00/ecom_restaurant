
import {NavLink, useNavigate} from 'react-router-dom'
import { useContext } from "react"
import AuthContext from "../auth-context"


const Navbar = () => {

  const navigate = useNavigate()
  const authCtx = useContext(AuthContext);
  const logoutHandler =()=>{
    authCtx.logout()
    navigate('/')
  }

  return (
    
    <div className="container-fluid text-white bg-dark d-flex justify-content-around align-items-center p-1  " style={{height:'50px'}} >
    <NavLink to='/' className="text-white text-decoration-none"  >HOME</NavLink>
   {authCtx.isLogedIn && <NavLink to='/store' className="text-white text-decoration-none">STORE</NavLink>}
    <NavLink to='/about' className="text-white text-decoration-none">ABOUT</NavLink>
   { !authCtx.isLogedIn && <NavLink to='/login' className="text-white text-decoration-none" >LOGIN</NavLink>}
   
    <NavLink to='/contact-us' className="text-white text-decoration-none">Contact Us</NavLink>
    {authCtx.isLogedIn && <button className="btn text-white" onClick={logoutHandler}>LOGOUT</button>}
     
    </div>
    
  )
}

export default Navbar
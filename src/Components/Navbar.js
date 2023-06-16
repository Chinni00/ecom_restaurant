import About from "./About"
import Home from "./Home"
import Store from "./Store"
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    
    <div className="container-fluid text-white bg-dark d-flex justify-content-around align-items-center p-1  " style={{height:'50px'}} >
    <Link to='/' className="text-white text-decoration-none"  >HOME</Link>
    <Link to='/store' className="text-white text-decoration-none">STORE</Link>
    <Link to='/about' className="text-white text-decoration-none">ABOUT</Link>
     
    </div>
    
  )
}

export default Navbar
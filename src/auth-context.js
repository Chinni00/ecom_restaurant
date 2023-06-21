import { createContext, useState } from "react";



const AuthContext = createContext({
  token: "",
  email:'',
  isLogedIn: false,
  login: (token,email) => {},
  logout: () => {},
});

export const  AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken);
  const [userName,setUserName] = useState('');
 


  const userIsLoggedIn = !!token
  const loginHandler=(token,email)=>{
    setToken(token)
    setUserName(email)
   
    localStorage.setItem('token',token)
    localStorage.setItem(email,'')
     
    // automatically logout after 5minutes
    setTimeout(()=>{
      localStorage.removeItem('token')
    },300000)
  }
  const logoutHandler=()=>{
    setToken(null)
    setUserName('')
    localStorage.removeItem('token')
    
   
    
  }
  const contextValue = {
    token:token,
    email:userName,
    isLogedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler
  }
  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;

import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import AuthContext from "../auth-context";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()
  const authCtx = useContext(AuthContext)

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthMode = (event) => {
    event.preventDefault();
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    // validation(optional currently im not validating)
    setIsLoading(true)
    let url;
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdm3yCyWFlKfRrBkIs-9sAiOPfEOxn99s'
    }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdm3yCyWFlKfRrBkIs-9sAiOPfEOxn99s'
    }
    fetch(url,{
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>{
      setIsLoading(false)
      if(res.ok){
        return res.json()
      }else{
       return res.json().then(data => {
               let errorMessage = 'Authentication failure'
               if(data && data.error && data.error.message){
                errorMessage = data.error.message
               }
               
               throw new Error(errorMessage)
        } )
      }
    }).then(data =>{
      
      authCtx.login(data.idToken)
      navigate('/store')
    }).catch(err=>{
      alert(err.message)
    })
  }

  return (
    <center className="">
      <Navbar />
      <h1 className="mt-5">{isLogin ? "Login" : "Sign Up"}</h1>
      <div className="card w-75 mt-5 p-5 shadow-1">
        <form onSubmit={submitHandler}>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1 text-left">Email address</label>
            <input
              type="email"
              ref={emailInputRef}
              className="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted mt-2">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group mt-2">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              ref={passwordInputRef}
              className="form-control mt-2"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-2 btn-md ">
            {isLogin ? "Login" : "Create account"}
            {isLoading && !isLogin ? "...." : ""}
            {isLoading && isLogin ? '...':''}
          </button>
          <br></br>
          <a href="#"
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={switchAuthMode}
          >
            {isLogin ? "Create a new account" : "Login with existing account"}
          </a>
        </form>
      </div>
    </center>
  );
};

export default Login;

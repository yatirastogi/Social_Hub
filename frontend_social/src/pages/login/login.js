import { useContext, useEffect, useRef } from "react";
import "./login.css";
//import { loginCall } from "../../apicalls";
//import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
    const [state,dispatch]=useContext(AuthContext)
  const email = useRef();
  const password = useRef();
  const username = useRef();
  username.current=""


    


  const handleClick = (e) => {
    e.preventDefault();
  // console.log(email.current.value);
   axios.post(`/auth/login`,{email:email.current.value,
    password:password.current.value}).then
   (res => {
    const persons = res.data.username;
    if(persons)
    {
        username.current=persons;
        //console.log(username.current);
        dispatch({type:'UPDATE_NAME',payload:username.current})
        window.location.href = "/viewpost";

    }
    else{
        alert("Invalid Id or Password")
        email.current.value=""
        password.current.value=""
    }

})

  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialHub</h3>
          <span className="loginDesc">
            Explore the world around you!
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox"  >
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
           
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" onClick={handleClick}>
            
                Log In
           
            </button>
           
            <span className="loginForgot">Forgot Password?</span>
           
           <center> <Link to='/create'><button className="loginRegisterButton">Create a New Account</button></Link></center>
        
          </form>
        </div>
      </div>
    </div>
  );
}
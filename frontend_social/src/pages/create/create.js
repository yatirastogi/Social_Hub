import axios from "axios";
import { useRef,useContext } from "react";

import "./create.css";
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
    import { useNavigate } from 'react-router-dom';
    import { AuthContext } from '../../context/AuthContext';
export default function Create(props) {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const [state,dispatch]=useContext(AuthContext)
  console.log("hio"+localStorage.getItem('Name') )

  const RouteChange=async(e)=> {
    window.location.href = "/login";
    
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        
      };
      try {
        await axios.post("/auth/register", user)
        .then(res => {
          

          if(res.data.done==1)
          window.location.href="/login"

          else{
            alert(res.data.data)
            username.current.value=""
            email.current.value=""
            password.current.value=""
            passwordAgain.current.value=""

          }
         // setUser(res.data.username)
        })

     
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialHub</h3>
          <span className="loginDesc">
           Create your account now to explore SocialHub! 
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button  onClick={RouteChange} className="loginRegisterButton2">Log into Account</button>
     
          </form>
        </div>
      </div>
    </div>
  );
}

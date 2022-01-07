import axios from "axios";
import { useRef,useContext } from "react";

import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
    import { useNavigate } from 'react-router-dom';





export default function Update(props) {
  const username = useRef();
  const email = useRef();
  const city = useRef();
  const desciption = useRef();

  const usern=localStorage.getItem('Name') 

  
    
  
  const handleClick = async (e) => {
    e.preventDefault();
    


    axios.put(`/user/`+usern)
         
    .then(res => {
       console.log(res.data);
     
    })
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" >
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
         
            <input
              placeholder="Description"
              required
              ref={desciption}
              className="loginInput"
              type="text"
              minLength="6"
            />
            <input
              placeholder="City"
              required
              ref={city}
              className="loginInput"
              type="text"
            />
           

            <button color="primary" className="px-4"
                 onClick={handleClick}
                  >
                  Update
                </button>
          </form>
        </div>
      </div>
    </div>
  );
  }
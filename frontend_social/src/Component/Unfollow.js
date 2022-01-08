import React,{ useState } from 'react';

import axios from "axios";
import { useRef,useContext } from "react";


function Unfollow(props) {
    const [user, setUser] = useState([]);
    const his_username = useRef();

    const my_username=localStorage.getItem('Name');

const handleClick=(e)=>{
    if(!my_username){alert("first login")}
    else{

    //console.log(username.current.value)
    axios.put(`/user/`+his_username.current.value+"/"+my_username+"/unfollow")
    .then(res => {
     alert(res.data);
     // setUser(res.data.username)
    })

    }
}
  return (<div>

      <h4>Search for users</h4>



<form className="loginBox" >
            <input
              placeholder="Username"
              required
              ref={his_username}
              className="loginInput"/></form>



<button className="loginButton" type="submit" onClick={handleClick}>
            
            "Follow"
       
        </button>
  </div>
  
  
  
  )
}

export default Unfollow
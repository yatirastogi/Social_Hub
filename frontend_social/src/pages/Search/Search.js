import React,{ useState } from 'react';

import axios from "axios";
import { useRef,useContext } from "react";


function Search(props) {
    const [user, setUser] = useState([]);
    const username = useRef();

const search=(e)=>{

    console.log(username.current.value)
    axios.get(`/user/`+username.current.value)
    .then(res => {
      console.log(res.data);
     // setUser(res.data.username)
    })


}


   


    



  return (<div>

      <h4>Search for users</h4>



<form className="loginBox" >
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput" onChange={search}/></form>
  </div>)
}

export default Search
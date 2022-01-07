import React,{ useEffect, useState } from 'react';

import axios from "axios";
import { render } from '@testing-library/react';
import Profiledisplay from '../../Component/Profiledisplay';



function Profile(props) {
    const [user, setUser] = useState([]);
    
const username=localStorage.getItem('Name');

useEffect(()=>{
if(username)
{
    axios.get(`/user/`+username)
    .then(res => {
      const item=res.data;
    
      if(item!=null){
        // a[i]=follow;
        // i++;
         //console.log(item)
         render( <Profiledisplay email={item['email']}  username={ item['username']} followers={item['followers']} following={item['following']} coverpic={item['coverpic']} profilepic={item['profilepic']}></Profiledisplay>)


     }})

}
else{
  alert("Login First")
  window.location.href="/login";
}
})

  return (<div>{}</div>)
}

export default Profile
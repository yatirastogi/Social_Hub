import React,{ useEffect, useState } from 'react';

import axios from "axios";
import Createpost from './Createpost';
import Feed from '../Component/Feed';
import { render } from '@testing-library/react';
function ViewPost(props) {
    const [user, setUser] = useState([]);
    
const a=[]

const username=localStorage.getItem('Name');


const useer={username:username}

useEffect(()=>{
var i=0;


if(username)

{
    axios.post('post/timeline/all',useer)
    .then(res => {
        
        
        res.data.map((item)=>{
        
        if(item!=null){
         
           // a[i]=follow;
           // i++;
            //console.log(item)
            render( <Feed  postId={item['_id']}  username={ item['username']} desc={item['desc']}likes={item['likes']} pic={item['img']}></Feed>)


        }})
       
    })
    
               

}
else{
    alert("Login Firsr")
}

    

})

  return (<div><div><Createpost/></div>
  
  </div>)
}

export default ViewPost
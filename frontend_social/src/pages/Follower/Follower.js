import React,{ useState,useEffect } from 'react';
import Show from './Show'
import axios from "axios";
import { render } from '@testing-library/react';



function Follower(props) {
    var a=[];
    const [user, setUser] = useState([]);
    console.log("hio"+localStorage.getItem('Name') )
    var dd=[];
const username=localStorage.getItem('Name');
useEffect(() => {
    var i=0;
       
         axios.get(`/user/`+username)
         
        .then(res => {
           console.log(res.data)
          res.data.followers.map((follow)=>{
            a[i]=follow;
            i++;
            
    })
  if(i==0){
    render( <h2>No Followers</h2>)
  }
    a.map((item)=>{
        
 render( <Show username={item}></Show>)
      })
        
        })
    })
      

       



    


  return (<><h3 style={{margin:"3% 4%",fontSize:"40px"}}>Followers:</h3> </>
    )
}

export default Follower
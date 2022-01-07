import React,{ useState,useEffect } from 'react';
import Show from './Show'
import axios from "axios";
import { render } from '@testing-library/react';



function Following(props) {
    var a=[];
    const [user, setUser] = useState([]);
    console.log("hio"+localStorage.getItem('Name') )
    var dd=[];
const username=localStorage.getItem('Name');
useEffect(() => {
    var i=0;
       
         axios.get(`/user/`+username)
         
        .then(res => {
           
          res.data.following.map((follow)=>{
            a[i]=follow;
            i++;
            
    })
   
    a.map((item)=>{
        
 render( <Show username={item}></Show>)
      })
        
        })
    })
      

       



    


  return (<> <h3 style={{margin:"3% 4%",fontSize:"40px"}}>Following:</h3> </>
    )
}

export default Following
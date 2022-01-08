import React,{ useState,useEffect } from 'react';

import axios from "axios";
import Searchdisplay from "./Searchdisplay"
import Card from "react-bootstrap/Card";
import Search from '../pages/Search/Search';

import { render } from '@testing-library/react';
//import { display } from '@mui/system';


function Searchresult(props) {

//console.log("eee")
    useEffect(()=>{
      //  e.preventDefault()

        const params = new URLSearchParams(window.location.search)
   const username=params.get('username')

    if(username)
{
    axios.get(`/user/search/`+username)
    .then(res => {
        const items=res.data;
     console.log(items);
     items.map((item)=>{

        if(item!=undefined && item!=null){
      
            render( <Searchdisplay email={item['email']}  username={ item['username']} followers={item['followers']} following={item['following']} coverpic={item['coverpic']} profilepic={item['profilepic']}/>)
        
        
             }

     })
    
     
     })

}

    

   



})

    return(
        <>

        </>
    )

}
export default Searchresult

// if(user){
//     //console.log(user)
//    const { _id,password, updatedAt, ...other } = user._doc;//to get all properties except updated at and password
//     res.json(other);
//     }
//     else{
//       res.json("No match")
//     }
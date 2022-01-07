import React,{ useState,useEffect } from 'react';

import axios from "axios";
import Searchdisplay from "./Searchdisplay"
import Card from "react-bootstrap/Card";
import Search from '../pages/Search/Search';

import { render } from '@testing-library/react';
//import { display } from '@mui/system';


function Searchresult(props) {

console.log("eee")
    useEffect(()=>{
      //  e.preventDefault()

        const params = new URLSearchParams(window.location.search)
   const username=params.get('username')

    if(username)
{
    axios.get(`/user/`+username)
    .then(res => {
        const item=res.data;
     console.log(item);
     if(item!=undefined || item!=null){
      
    render( <Searchdisplay email={item['email']}  username={ item['username']} followers={item['followers']} following={item['following']} coverpic={item['coverpic']} profilepic={item['profilepic']}/>)


     }
     })

}

    

   



})

    return(
        <>

        </>
    )

}
export default Searchresult


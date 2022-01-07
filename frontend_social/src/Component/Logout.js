import React,{ useState,useEffect } from 'react';




function Logout(props) {
   
useEffect(() => {
  
    
    localStorage.removeItem('Name');
    console.log("hio"+localStorage.getItem('Name') )
        
    



    const timer = setTimeout(() => {
     window.location.href="/login"
    }, 1000);
    })
   
    
      

       



    


  return (<><h1>You've been logged out</h1></>
    )
}

export default Logout
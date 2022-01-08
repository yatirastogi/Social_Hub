import "./Profiledisp.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { render } from "@testing-library/react";

export default function Searchdisplay(props) {
  const his_username =props.username;


  const my_username=localStorage.getItem('Name');
  const handleClick=(e)=>{
    if(!my_username){alert("first login")}
    else{

    //console.log(username.current.value)
    axios.put(`/user/`+his_username+"/"+my_username+"/follow")
    .then(res => {
      alert(res.data);
     // setUser(res.data.username)
    })

    }
}





const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 // const [user, setUser] = useState({});
  //const username = useParams().username;

 if(!props.username)
 render(<div>Not FOUND</div>)
 else{
   render( <>   <div className="card" style={{width: "20rem",margin:"5%"}}>


   <img style={{height:"10rem"}}className="card-img-top" src={PF+""+props.profilepic} alt="Card image cap"/>
   <div className="card-body">
     <h5 className="card-title">{props.email}</h5>
     <p className="card-text">{props.username}</p>
     <p className="card-text">{props.followers.length}</p>
     <button href="#" onClick={handleClick} className="btn btn-primary">Follow</button>
   </div>
 </div></>)
 }

  return (
     
    <>
   
    </>
  );
}
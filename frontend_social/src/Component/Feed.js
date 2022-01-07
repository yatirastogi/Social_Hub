import React,{ useState,useEffect } from 'react';

import axios from "axios";

import { AiFillLike } from "react-icons/ai";
import Card from "react-bootstrap/Card";
//import { display } from '@mui/system';


function Feed(props) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER+props.pic;

    const [user, setUser] = useState([]);
    const [desc, setDesc] = useState([]);
    const [date, setDate] = useState([]);
    const [likes, setlikes] = useState([]);

    const my_username=localStorage.getItem('Name');


    const handleClick=(e)=>{
        e.preventDefault();
        if(!my_username){alert("first login")}
        else{
        axios.put(`/post/`+props.postId+"/like/"+my_username)
        .then(res => {
          console.log(res.data);
          window.location.reload()
        })
    
        }
    }

    return(
        <><center style={{marginTop:"40px"}}>
      <div className="card" style={{width: "42rem",margin:"50px"}}>
  <img className="card-img-top" src={PF} alt="Card image cap"/>
  <div className="card-body">
    <h5 style={{display:"none"}} className="card-title">{props.postId}</h5>
    <h5 className="card-title">BY : {props.username}</h5>
    <p className="card-text">{props.desc}</p>
    <p className="card-text"><AiFillLike style={{fontSize:"50px",paddingTop:"2%"}}/><span style={{fontSize:"30px"}}>{props.likes.length}</span></p>
    <button onClick={handleClick}href="#" className="btn btn-primary">Like/Unlike</button>
  </div>
</div>
</center>
        </>
    )

}
export default Feed


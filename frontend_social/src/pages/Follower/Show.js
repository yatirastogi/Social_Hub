import React,{ useState,useEffect } from 'react';

import axios from "axios";

import Card from "react-bootstrap/Card";


function Show(props) {
  
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const [email, setEmail] = useState([]);
    useEffect(() => {

      
        axios.get(`/user/`+props.username)
    .then(res => {
      setEmail(res.data.email)
      setProfile(res.data.profilepic)
    })
    })
    const my_username=localStorage.getItem('Name');
    const handleClick=(e)=>{
        e.preventDefault();
        if(!my_username){alert("first login")}
        else{
        axios.put(`/user/`+props.username+"/"+my_username+"/unfollow")
        .then(res => {
          alert(res.data);
        })
    
        }
    }

    return(
        <>
      <div className="card" style={{width: "20rem",marginLeft:"10%",marginBottom:"2%"}}>
  <img className="card-img-top" style={{height:"10rem"}}src={PF+""+profile} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.username}</h5>
    <p className="card-text">{email}</p>
    <button onClick={handleClick} href="#" class="btn btn-primary">Unfollow</button>
  </div>
</div>
        </>
    )

}
export default Show


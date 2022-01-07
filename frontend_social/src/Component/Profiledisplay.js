import "./Profiledisp.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profiledisplay(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 console.log(PF+""+props.profilepic)
 // const [user, setUser] = useState({});
  //const username = useParams().username;
const followinglist=(e)=>{
e.preventDefault();
window.location.href="/following"
}
const followerlist=(e)=>{
  e.preventDefault();
  window.location.href="/follower"
  }


  const changeCover=(e)=>{
    e.preventDefault()
    window.location.href="/changecover"
  }

  const changeprofile=(e)=>{
    e.preventDefault()
    window.location.href="/changeprofile"
  }
  return (
    <>

      <div className="profile">
       
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img onClick={changeCover}
                className="profileCoverImg"
               src={PF+"cover/"+props.coverpic}
                alt=""
              />
              <img
                className="profileUserImg"  onClick={changeprofile}
                src={PF+""+props.profilepic}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{props.username}</h4>
              <span className="profileInfoDesc">{props.email}</span>
            </div>
          </div>
          <div className="profileRightBottom">
          <h4 onClick={followerlist} className="profileInfoName2">Followers: {props.followers.length}</h4> 
          <h4 onClick={followinglist} className="profileInfoName">Following: {props.following.length}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
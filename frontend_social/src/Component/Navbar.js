import { render } from "@testing-library/react";
import react from "react";
import { Link } from 'react-router-dom';
import Searchresult from "./Searchresult";
import axios from "axios";
import { useRef,useContext } from "react";

function Navbar()
{
    const username = useRef();
    const my_username=localStorage.getItem('Name');

    
const search=(e)=>{
    e.preventDefault()
    window.location.href="/search/?username="+username.current.value


    console.log(username.current.value)
   


}

    render()
    
        return(


            <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top ">
  {!my_username && <a class="navbar-brand" href="#">SocialHub</a>}
  {my_username &&  <a class="navbar-brand" href="/profile">{my_username}</a>}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
   

     
     
    </ul>

    <div class="form-inline my-2 my-lg-0">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item active">
    {my_username && <a class="nav-link" href="/viewpost">Home</a>}
      </li>
  <li class="nav-item">
  {!my_username && <a class="nav-link" href="/login">Login</a>}
      </li>
      <li class="nav-item">
      {my_username && <a class="nav-link" href="/profile">Profile</a>}
      </li>
      <li class="nav-item">
     {my_username && <a class="nav-link" href="/logout">Logout</a>}
      </li>

      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search"  ref={username}   placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0"  onClick={search}>Search</button>
    </form>
      </ul>
    </div>
  </div>
</nav>

        )
    
}

export default Navbar
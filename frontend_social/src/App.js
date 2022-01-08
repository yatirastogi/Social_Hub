import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route,Redirect } from 'react-router-dom'
import Login from "./pages/login/login";
import Follower from "./pages/Follower/Follower";
import Following from "./pages/Follower/Following";
import Createpost from './pages/Createpost';
import Follow from "./Component/Follow"
import ViewPost from './pages/ViewPost';
import Navbar from './Component/Navbar'
import Search from "./pages/Search/Search"
import { useContext } from "react";
import Create from './pages/create/create';
import { AuthContext } from './context/AuthContext';
import Logout from './Component/Logout';
import Profile from './pages/Profile/Profile';
import Searchresult from './Component/Searchresult';
import ChangeCover from "./pages/Profile/ChangeCover"
import ChangeProfile from './pages/Profile/ChangeProfile';

//const { user } = useContext(AuthContext);


function App() {
  const [state,dispatch]=useContext(AuthContext)
  console.log("hi"+state.username)
  if(state.username){localStorage.setItem('Name', state.username);}
  const name=localStorage.getItem('Name')
  console.log(name)
  return (<>
    <BrowserRouter>
  <Navbar/>
     
        <Routes>
          {name &&  <Route  path='/' element={<Login/>}></Route>}
          {!name &&  <Route  path='/' element={<Create/>}></Route>}

          <Route path='/login' element={<Login />}></Route>
        
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/changecover' element={<ChangeCover />}></Route>
          <Route path='/changeprofile' element={<ChangeProfile/>}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/search' element={<Searchresult />}></Route>
          <Route path='/viewpost' element={<ViewPost />}></Route>
          <Route path="/follower" element={<Follower/>}></Route>
          <Route path="/following" element={<Following/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/createpost" element={<Createpost/>}></Route>
          
        </Routes>    
        
    </BrowserRouter></>
    
  );
}

export default App;
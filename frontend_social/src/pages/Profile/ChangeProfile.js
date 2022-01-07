import axios from "axios";
import { useRef,useContext ,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload} from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
    import { useNavigate } from 'react-router-dom';
export default function ChangeProfile(props) {

  const [file, setFile] = useState(null);


  const username=localStorage.getItem('Name') 


  const handleClick = async (e) => {
    
    e.preventDefault();
   


    if(file){

      const data = new FormData();
      const fileName =file.name;
      data.append("name", fileName);
      data.append("file", file);
     
     
      try {
        await axios.put("editprofile/"+username+"/"+fileName,data) .then(res => {
            console.log(res.data)})
      } catch (err) {}
    }

    
  };

  return (
    <form className="loginBox">
    
     <div style={{backgroundColor:"#C6C6C6"}}class="jumbotron">
  <p class="display-4 loginLogo">What's on your mind?</p>
  
        
            <label htmlFor="file">
              <span >Upload Photo  <FontAwesomeIcon icon={faUpload} /></span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          
            

        
      
  
  <p style={{marginTop:"6%"}} class="lead">
   
  <button color="primary" className="btn btn-primary px-4"
                 onClick={handleClick}
                  >
                  POST
                </button>
  </p>
</div>
          
          
 
   </form>
  );
}

import React,{useState} from 'react'    // to use state
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom"  // to redirect pagess
import axios from "axios" // to connect to backend
import "../styles/landingcss.css"

const Learnersignup = ()=>{
    const [signup,setsignup] = useState(false);
    const [learnername,setlearnername] = useState("");
    const [learneremail,setlearneremail] = useState("");
    const [learnerpassword,setlearnerpassword] = useState("");
    
    
    const onSignup =async (e)=>{
        e.preventDefault();
        console.log("hii")
        console.log(learnerpassword,learnername,learneremail);
        const body = {
            name : learnername,
            email : learneremail,
            password: learnerpassword,
        }
       const response = await axios.post("http://localhost:5000/api/learner", body)
       console.log(response)
       if(response.data.token){
       setsignup(true); 
       }
        
    }
    if(signup){
       return  <Redirect to="/learner-login"/> 
           
    }

    return (
    <div>

        {signup && <div style={{backgroundColor : "yellow", padding: "10px"}}>You are signed up successfully   </div>}
        <div>
        <h1 className="learner_signup_head">Signup</h1>
        <h4 className="learner_signup_head learner_head"><span>learner</span></h4>
    </div>
    

    <form onSubmit={onSignup}>

        <div className="container">
            <label for="uname"><b>Learner Name</b></label>
            <input type="text" placeholder="Enter Learner Name" value={learnername} onChange={(e)=>setlearnername(e.target.value)}  required></input>

            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" value={learneremail} onChange={(e)=>setlearneremail(e.target.value)} required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" value={learnerpassword} onChange={(e)=>setlearnerpassword(e.target.value)} required></input>
                
            <button type="submit" >SIGNUP</button>
          {/* <Link to="/learner-login"><button type="submit" >SIGNUP</button></Link> */}
            
        </div>

    </form>
    </div>
    )
}

export default Learnersignup;
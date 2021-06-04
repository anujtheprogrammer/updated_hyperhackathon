import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom"
import axios from "axios"
import "../styles/landingcss.css"

const Mentorsignup = ()=>{
    const [signup,setsignup] = useState(false);
    const [mentorname,setmentorname] = useState("");
    const [mentoremail,setmentoremail] = useState("");
    const [mentorpassword,setmentorpassword] = useState("");

    const onSignup = async (e)=>{
        e.preventDefault();
        console.log("hii")
        console.log(mentorpassword,mentorname,mentoremail);
        const body = {
            name : mentorname,
            email : mentoremail,
            password: mentorpassword
        }
        const response = await axios.post("http://localhost:5000/api/mentor", body)
       console.log(response)
       if(response.data.token){
       setsignup(true); 
       } 
    }
    if(signup){
            return <Redirect to="/mentor-login"/>
    }

    return (<div>
        <div>
        <h1 className="mentor_signup_head">Signup</h1>
        <h4 className="mentor_signup_head mentor_head"><span>mentor</span></h4>
    </div>
    

    <form onSubmit={onSignup}>
        <div className="container">
            <label for="uname"><b>mentor Name</b></label>
            <input type="text" placeholder="Enter mentor Name" value={mentorname} onChange={(e)=>setmentorname(e.target.value)}  required></input>

            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" value={mentoremail} onChange={(e)=>setmentoremail(e.target.value)} required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" value={mentorpassword} onChange={(e)=>setmentorpassword(e.target.value)} required></input>
                
            <button type="submit" >SIGNUP</button>
            {/* <Link to="/mentor-login"><button type="submit" >SIGNUP</button></Link> */}
            
        </div>

    </form>
    </div>
    )
}

export default Mentorsignup;
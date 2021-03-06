import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom"
import axios from "axios"
import "../styles/landingcss.css"

const Recruitersignup = ()=>{
    const [signup,setsignup] = useState(false);
    const [recruitername,setrecruitername] = useState("");
    const [recruiteremail,setrecruiteremail] = useState("");
    const [recruiterpassword,setrecruiterpassword] = useState("");

    const onSignup = async (e)=>{
        e.preventDefault();
        console.log("hii")
        console.log(recruiterpassword,recruitername,recruiteremail);
        const body = {
            name : recruitername,
            email : recruiteremail,
            password: recruiterpassword
        }
        const response = await axios.post("http://localhost:5000/api/mentor", body)
       console.log(response)
       if(response.data.token){
       setsignup(true); 
       }     
    }
    if(signup){
            return <Redirect to="/recruiter-login"/>
    }

    return (<div>
        <div className="tochangecenter">
        <h1 className="recruiter_signup_head">Signup</h1>
        <h4 className="recruiter_signup_head recruiter_head"><span>recruiter</span></h4>
    </div>
    

    <form onSubmit={onSignup}>


        <div className="container">
            <label for="uname"><b>recruiter Name</b></label>
            <input type="text" placeholder="Enter recruiter Name" value={recruitername} onChange={(e)=>setrecruitername(e.target.value)} required></input>

            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" value={recruiteremail} onChange={(e)=>setrecruiteremail(e.target.value)} required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" value={recruiterpassword} onChange={(e)=>setrecruiterpassword(e.target.value)} required></input>
                
            <button type="submit" >SIGNUP</button>
            {/* <Link to="/recruiter-login"><button type="submit" >SIGNUP</button></Link> */}
            
        </div>

    </form>
    </div>
    )
}

export default Recruitersignup;
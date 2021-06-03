import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom"
import axios from "axios";
import "../styles/landingcss.css"

const Recruiterlogin = ()=>{

    const [login,setlogin] = useState(false);
    const [recruiteremail,setrecruiteremail] = useState("");
    const [recruiterpassword,setrecruiterpassword] = useState("");

    const history = useHistory();
    const onlogin = async (e)=>{
        e.preventDefault();
        console.log("hii")
        console.log(recruiterpassword,recruiteremail);
        const body ={
            email: recruiteremail,
            password: recruiterpassword
        }

        const response = await axios.post("http://localhost:5000/api/auth", body)
        console.log(response)
        if(response.data.token){
            localStorage.setItem("Token", response.data.token)
            setlogin(true);   
        } 
    }
    if(login){
        history.push('/oppurtunity');
    }

    return (<div>
        <div>
        <h1 className="recruiter_signup_head">Login</h1>
        <h4 className="recruiter_signup_head recruiter_head"><span>recruiter</span></h4>
    </div>
    

    <form onSubmit={onlogin}>

        <div className="container">
            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" value={recruiteremail} onChange={(e)=>setrecruiteremail(e.target.value)} required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" value={recruiterpassword} onChange={(e)=>setrecruiterpassword(e.target.value)} required></input>
                
            <Link to="/recruiterlandpage"><button type="submit">Login</button></Link>
            
        </div>

    </form>
    </div>
    )
}

export default Recruiterlogin;
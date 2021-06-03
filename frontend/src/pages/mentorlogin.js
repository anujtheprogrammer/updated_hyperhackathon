import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom"
import axios from "axios";
import "../styles/landingcss.css"

const Mentorlogin = ()=>{
    const [login,setlogin] = useState(false);
    const [mentoremail,setmentoremail] = useState("");
    const [mentorpassword,setmentorpassword] = useState("");
    //const [error, setError] =useState('')

    const history = useHistory();
    const onlogin =async (e)=>{
        e.preventDefault();
        console.log("hii")
        console.log(mentorpassword,mentoremail);
        const body ={
            email: mentoremail,
            password: mentorpassword
        }

        const response = await axios.post("http://localhost:5000/api/auth", body)
        console.log(response)
        if(response.data.token){
            localStorage.setItem("Token", response.data.token)
            setlogin(true);   
        }    

        else {
           alert("Either Email or password is wrong")
        }
    }
    if(login){
        history.push('/oppurtunity');
    }

    return (<div>
      
        <div>
        <h1 className="mentor_signup_head">Login</h1>
        <h4 className="mentor_signup_head mentor_head"><span>mentor</span></h4>
    </div>
    

    <form onSubmit={onlogin}>
        <div className="container">
            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" value={mentoremail} onChange={(e)=>setmentoremail(e.target.value)} required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" value={mentorpassword} onChange={(e)=>setmentorpassword(e.target.value)} required></input>
                
            <Link to="/mentorlandpage"><button type="submit">Login</button></Link>
            
        </div>

    </form>
    </div>
    )
}

export default Mentorlogin;
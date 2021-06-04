import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom"
import axios from "axios";
import "../styles/landingcss.css"

const Learnerlogin = ()=>{
    const [login,setlogin] = useState(false);
    const [learneremail,setlearneremail] = useState("");
    const [learnerpassword,setlearnerpassword] = useState("");

    const history = useHistory();
    const onlogin =async (e)=>{
        e.preventDefault();
        console.log("hii")
        console.log(learnerpassword,learneremail);
        const body ={
            email: learneremail,
            password: learnerpassword
        }

        const response = await axios.post("http://localhost:5000/api/auth", body)
        console.log(response)
        if(response.data.token){
            localStorage.setItem("learner-token", response.data.token)
            localStorage.setItem("learner-name", response.data.name)
            localStorage.setItem("learner-email", response.data.email)
            setlogin(true);   
        }
         
    }
    if(login){
        history.push('/learnerprofile');
    }


    return (<div>
        <div className="tochangecenter">
        <h1 className="learner_login_head">Login</h1>
        <h4 className="learner_login_head learner_head"><span>learner</span></h4>
    </div>
    

    <form onSubmit={onlogin}>

        <div className="container">
            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" value={learneremail} onChange={(e)=>setlearneremail(e.target.value)} required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" value={learnerpassword} onChange={(e)=>setlearnerpassword(e.target.value)} required></input>
                
            <button type="submit">Login</button>
            {/* <Link to="/learnerprofile"><button type="submit">Login</button></Link> */}
            
        </div>

    </form>
    </div>
    )
}

export default Learnerlogin;
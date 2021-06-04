import React,{useState}from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"
import "../styles/landingcss.css"

const Addpost = ()=>{
    const [name,setName] = useState("")
    const [post,setPost] = useState("")
    const [location,setLocation] = useState("")
    const [about_company,setAbout_company] = useState("")
    const [responsibility,setResponsibility] = useState("")
    const [requirements,setRequirements] = useState("")

    const history = useHistory();

    const handleUpdatePost =async (e) => {
        e.preventDefault()
        const body =  {
            name,
            post,
            location,
            about_company,
            responsibility,
            requirements,
     }
     
     const response = await axios.post("http://localhost:5000/api/addpost", body )
     console.log(response)
     if(response.data){
       history.push('/recruiterlandpage');
    }
     }

    return (<div>
        <div>
        <h1 className="learner_signup_head">Add a vacancy available in your company</h1>
    </div>
    

    <form onSubmit={handleUpdatePost} >

        <div className="container">
            <label for="uname"><b>Post</b></label>
            <input type="text" placeholder="Post for which vacancy is available" value={post} onChange={(e)=>setPost(e.target.value)} required></input>

            <label for="psw"><b>Company Name</b></label>
            <input type="text" placeholder="Enter Company name" value={name} onChange={(e)=>setName(e.target.value)}  required></input>

            <label for="psw"><b>Company Location</b></label>
            <input type="text" placeholder="Enter Company Location" value={location} onChange={(e)=>setLocation(e.target.value)}  required></input>
                
            <label for="uname"><b>About your company</b></label>
            <input type="text" placeholder="Enter About Company" value={about_company} onChange={(e)=>setAbout_company(e.target.value)}  required></input>

            <label for="uname"><b>Company's Responsibilities</b></label>
            <input type="text" placeholder="Enter Responsibilities" value={responsibility} onChange={(e)=>setResponsibility(e.target.value)}  required></input>

            <label for="psw"><b>Company's Requirements </b></label>
            <input type="text" placeholder="Enter Company's Requirements" value={requirements} onChange={(e)=>setRequirements(e.target.value)}  required></input>

            <button type="submit">ADD</button>
            
        </div>

    </form>

    </div>
    )
}

export default Addpost;
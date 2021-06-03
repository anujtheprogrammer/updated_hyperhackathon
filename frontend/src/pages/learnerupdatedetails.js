import React, {useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import "../styles/landingcss.css"

const Learnerupdatedetails = ()=>{
    const [number, setNumber] = useState("")
    const [location, setLocation] = useState("")
    const [education, setEducation] = useState("")
    const [github, setGithub] = useState("")
    const [experience, setExperience] = useState("")
    const [skills, setSkills] = useState("")

    const handleUpdateProfile =async (e) => {
        e.preventDefault()
        const body =  {
         contact_number : number,
         github ,
         education,
         experience,
         techstack : skills,
         location,
     }
     const token = localStorage.getItem("learner-token")
     console.log(body, token)
     
     const headers ={
         "Content-Type" : "application/json",
        "x-auth-token" : token
     }

     const response = await axios.post("http://localhost:5000/api/profile", body , {
       headers: headers
     })
     console.log(response)
     }

    return (<div>
        <div>
        <h1 className="learner_signup_head">Update your personal Details</h1>
    </div>

    <form onSubmit={handleUpdateProfile}>
        
        <div className="container">
        <label for="uname"><b>Learner Name</b></label>
            <input type="text" placeholder="Enter Github Profile link"  value={github} onChange={(e) => setGithub(e.target.value)} required></input>

            <label for="uname"><b>Contact number</b></label>
            <input type="text" placeholder="Enter Contact number" value={number} onChange={(e) => setNumber(e.target.value)} required></input>

            <label for="psw"><b>Technical skills</b></label>
            <input type="text" placeholder="Enter Technical skills separated by commas"  value={skills} onChange={(e) => setSkills(e.target.value)} required></input>
                
            <label for="uname"><b>Experince</b></label>
            <input type="text" placeholder="Enter Experince (latest)"  value={experience} onChange={(e) => setExperience(e.target.value)} required></input>

            <label for="uname"><b>Education</b></label>
            <input type="text" placeholder="Enter Education (latest)"  value={education} onChange={(e) => setEducation(e.target.value)} required></input>

            <label for="uname"><b>Location</b></label>
            <input type="text" placeholder="Enter Location"  value={location} onChange={(e) => setLocation(e.target.value)} required></input>

            <label for="uname"><b>Github Profile</b></label>
            <input type="text" placeholder="Enter Github Profile link"  value={github} onChange={(e) => setGithub(e.target.value)} required></input>

            <Link to="/learnerprofile"><button type="submit">UPDATE</button></Link>

        </div>

    </form>

    </div>
    )
}

export default Learnerupdatedetails;
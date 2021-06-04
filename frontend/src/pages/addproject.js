import React,{useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"
import "../styles/landingcss.css"

const Addproject = ()=>{
    const [project, setProject] = useState("")
    const [technologies, setTechnologies] = useState("")
    const [projectDesc, setProjectDesc] = useState("")
    const [github, setGithub] = useState("")

    const history = useHistory();
    const handleUpdateProject =async (e) => {
        e.preventDefault()
        const body =  {
            project_name: project,
            tech_skill: technologies,
            project_description: projectDesc,
     }
     const token = localStorage.getItem("learner-token")
     console.log(body, token)
     
     const headers ={
         "Content-Type" : "application/json",
        "x-auth-token" : token
     }

     const response = await axios.post("http://localhost:5000/api/addproject", body , {
       headers: headers
     })
     console.log(response)
     if(response.data.user){
       history.push('/learnerprofile');
    }
     }

    return (<div>
        <div>
        <h1 className="learner_signup_head">Add project to your Profile</h1>
    </div>
    

    <form onSubmit ={handleUpdateProject}>

        <div className="container">
            <label for="uname"><b>Project Name</b></label>
            <input type="text" placeholder="What is your project name? tell us" value={project} onChange={(e)=>setProject(e.target.value)} required></input>

            <label for="psw"><b>Technologies Used</b></label>
            <input type="text" placeholder="Write the Technologies used in your project separated by commas" value={technologies} onChange={(e)=>setTechnologies(e.target.value)} required></input>
                
            <label for="uname"><b>Project Description</b></label>
            <input type="text" placeholder="Project Description please" value={projectDesc} onChange={(e)=>setProjectDesc(e.target.value)} required></input>

            <button type="submit">ADD</button>
            
        </div>

    </form>

    </div>
    )
}

export default Addproject;
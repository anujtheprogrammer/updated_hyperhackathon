import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import "../styles/style1.css"

const Learnerprofile = ()=>{
    //const [lname, setLname] = useState("")
    const [number, setNumber] = useState("number")
    const [location, setLocation] = useState("location")
    const [education, setEducation] = useState("education")
    const [github, setGithub] = useState("github")
    const [experience, setExperience] = useState("experience")
    const [skills, setSkills] = useState("skills")
    const [projectarray, setProjectarray] = useState([])
    // const [pname, setPname] = useState("Project Name")
    // const [ptech, setPtech] = useState("Project tech stack")
    // const [pdesc, setPdesc] = useState("Project description")


    useEffect(async ()=>{
        const token = localStorage.getItem("learner-token")
     console.log( token)
     
     const headers ={
         "Content-Type" : "application/json",
         "x-auth-token" : token
     }

     const response = await axios.get("http://localhost:5000/api/profile/me" , {
       headers: headers
     })
     console.log(response)
     if(response.data.user){
        setNumber(response.data.contact_number)
        setLocation(response.data.location)
        setEducation(response.data.education)
        setGithub(response.data.github)
        setExperience(response.data.experience)
        setSkills(response.data.techstack)
     }

     const proresponse = await axios.get("http://localhost:5000/api/addproject" , {
       headers: headers
     })
     console.log(proresponse)
     if(proresponse.data){
         console.log(proresponse.data)
        setProjectarray(proresponse.data)
     }
    },[]);

    return (
    
    <div>
        <div class="picandinfo">
            <div class="learnerimage">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
            </div>
            <div class="socialinfo">    
                <div class="learnerbaseinfo">
                    {localStorage.getItem('learner-email')}
                </div>
                <div class="learnerbaseinfo">
                    {number}
                </div>
                <div class="learnerbaseinfo">
                    {github} 
                </div>
            </div>
        </div>
        <div class="infobarr">
        <div class="learnerbasedowninfo">
                {localStorage.getItem('learner-name')}
            </div>
            <div class="learnerbasedowninfo">
                {education}
            </div>
            <div class="learnerbasedowninfo">
                {experience}
            </div>
            <div class="learnerbasedowninfo">
                {skills}
            </div>
            <div class="learnerbasedowninfo">
                {location}
            </div>
            <div class="gotooppurtunity">
            <Link to="/oppurtunity"><button id="buttonofedit">Oppurtunity</button></Link>
            </div>
            <div class="addprojectandinfo">
            <Link to="/learnerupdatedetails"><button id="buttonofedit">Edit Infomation</button></Link>
            </div>
            <div class="addprojectandinfo">
            <Link to="/addproject"><button id="buttonofedit">Add project</button></Link>
        </div>
        <div class="addprojectandinfo">
            <Link to="/"><button id="buttonofedit">LogOut</button></Link>
            </div>
        </div>
        {   
            
           projectarray && projectarray.map(project=>{
                console.log(project);
            return (<div class="projectbarr">
            <div class="projectapplybar">
                Rating
            </div>
            <div class="projectnamebar">
                <h5>{project.project_name}</h5>
            </div> 
            <div class="projectdetailsbar">
                <h5>{project.tech_skill}</h5>
                <h5>{project.project_description}</h5>
            </div>
            </div>)
        })
            
        }
        

    </div>
    )
}

export default Learnerprofile;
import React, {useEffect,useState} from 'react'
import axios from 'axios'
import "../styles/recstyle.css"
import {Link} from 'react-router-dom'

const Mentorlanding = ()=>{
    const [profilearray, setProfilearray] = useState([])

    useEffect(async()=>{
        const response = await axios.get("http://localhost:5000/api/learner")
        console.log(response)
        if(response.data){
            setProfilearray(response.data);
        }
    },[])


    return(
        <div>
         <div class="recruiterlogout">
            <Link to="/"><button id="buttonofedit">LogOut</button></Link>
    </div>   
    <div class="center">{localStorage.getItem("mentor-name")}</div>
    <div class="containerrecland">
    {   
        profilearray && profilearray.map(profile=>{
            return  <div class="insidestars"> 
            <div class="naam">{profile.lname}</div>
            <div class="profile">{profile.techstack}</div>
        </div>
        })     
        }
    </div>
        </div>
    )
};

export default Mentorlanding;
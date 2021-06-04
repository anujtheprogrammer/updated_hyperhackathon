import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import "../styles/recstyle.css"

const Recruiterlandpage = ()=>{
    const [profilearray, setProfilearray] = useState([])

    useEffect(async()=>{
        const response = await axios.get("http://localhost:5000/api/learner")
        console.log(response)
        if(response.data){
            setProfilearray(response.data);
        }
    },[])

    return (

    <div>
      
    <div className="center">{localStorage.getItem("recruiter-name")}</div>
    <div className="buttonpost">
        <Link to="/addpost"><button type="submit" >Add New Job</button></Link>
    </div>
    
    <div className="containerrecland">
        {   
        profilearray && profilearray.map(profile=>{
            return  <div className="insidestars" key={profile}> 
            <div className="naam">{profile.lname}</div>
            <div className="starofper">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> 
                </div>
            <div className="profile">{profile.techstack}</div>
        </div>
        })     
        }
    </div>
    </div>
    )
}

export default Recruiterlandpage;
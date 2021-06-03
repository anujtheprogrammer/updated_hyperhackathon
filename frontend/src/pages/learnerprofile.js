import React from 'react'
import {Link} from "react-router-dom";
import "../styles/style1.css"

const Learnerprofile = ()=>{
    return (<div>
        <div class="picandinfo">
            <div class="learnerimage">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
            </div>
            <div class="socialinfo">    
                <div class="learnerbaseinfo">
                    Email
                </div>
                <div class="learnerbaseinfo">
                    Contact Number
                </div>
                <div class="learnerbaseinfo">
                    Github 
                </div>
            </div>
        </div>
        <div class="infobarr">
        <div class="learnerbasedowninfo">
                Name
            </div>
            <div class="learnerbasedowninfo">
                Education
            </div>
            <div class="learnerbasedowninfo">
                Experience
            </div>
            <div class="learnerbasedowninfo">
                Tech stack
            </div>
            <div class="learnerbasedowninfo">
                Location
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
        </div>
        <div class="projectbarr">
            <div class="projectapplybar">
                Rating
            </div>
            <div class="projectnamebar">
                <h5>Name</h5>
            </div> 
            <div class="projectdetailsbar">
                <h5>tech stack</h5>
                <h5>About project</h5>
            </div>
        </div>

    </div>
    )
}

export default Learnerprofile;
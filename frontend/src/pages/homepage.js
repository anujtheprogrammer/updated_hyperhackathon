import React from 'react'
import {Link} from "react-router-dom";
import "../styles/landingcss.css"
import learnerImage from '../images/learner.jpg'
import mentorImage from '../images/mentor.jpg'
import recruiterImage from '../images/recruiter.jpg'

const Home = ()=>{
    return (<div>
        <div className="grid-container">
        <div className="item1">
            <div className="navbar">
                <a href="#" className="active">Home</a>
              </div>
        </div>

        <div className="item2">
            <h4>About Hyperverge</h4>
            <p>HyperVerge is a collective idea of those who dare to push the limits of their capabilities to deliver powerful, cutting edge technology & products that can revolutionize and transform the way of living.</p>
        </div>

        <div className="item3">
            <div className="card" style={{marginLeft: "15%"}}>
                <img src={learnerImage} alt="Avatar" style={{width:"100%"}}></img>
                <div className="container">
                  <span>learner</span>
                  <h5><Link to="/learner-signup"><b>Signup</b></Link></h5>
                  <h5><Link to="/learner-login"><b>Login</b></Link></h5>
                </div>
              </div>
              <div className="card">
                <img src={mentorImage} alt="Avatar" style={{width:"100%"}}></img>
                <div className="container">
                    <span className="mentor_span">Mentor</span>
                    <h5><Link to="/mentor-signup"><b>Signup</b></Link></h5>
                    <h5><Link to="/mentor-login"><b>Login</b></Link></h5>
                  </div>
              </div>
              <div className="card">
                <img src={recruiterImage} alt="Avatar" style={{width:"100%"}}></img>
                <div className="container">
                    <span className="recruiter_span">Recruiter</span>
                    <h5><Link to="/recruiter-signup"><b>Signup</b></Link></h5>
                    <h5><Link to="/recruiter-login"><b>Login</b></Link></h5>
                  </div>
              </div>
        </div>
    </div>
    </div>
    )
}

export default Home;
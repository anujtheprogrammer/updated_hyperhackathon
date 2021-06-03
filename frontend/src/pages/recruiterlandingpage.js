import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/recstyle.css"

const Recruiterlandpage = ()=>{

    return (
    <div>
      
    <div className="center">recruiter name</div>
    <div className="buttonpost">
        <Link to="/addpost"><button type="submit" >Add New Job</button></Link>
    </div>
    
    <div className="containerrecland">
        <div className="insidestars"> 
            <div className="naam">name1</div>
            <div className="starofper">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span> 
            </div>
            <div className="profile">mentor</div>
        </div>
        <div className="insidestars"> 
            <div className="naam">name1</div>
            <div className="starofper">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> 
                </div>
            <div className="profile">mentor</div>
        </div>
        <div className="insidestars"> 
            <div className="naam">name1</div>
            <div className="starofper">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> 
                </div>
            <div className="profile">mentor</div>
        </div>
        <div className="insidestars"> 
            <div className="naam">name1</div>
            <div className="starofper">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> 
                </div>
            <div className="profile">mentor</div>
        </div>
    </div>
    </div>
    )
}

export default Recruiterlandpage;
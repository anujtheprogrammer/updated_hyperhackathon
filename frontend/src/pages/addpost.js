import React from 'react'
import "../styles/landingcss.css"

const Addpost = ()=>{
    return (<div>
        <div>
        <h1 className="learner_signup_head">Add a vacancy available in your company</h1>
    </div>
    

    <form action="/action_page.php" method="post">

        <div className="container">
            <label for="uname"><b>Post</b></label>
            <input type="text" placeholder="Post for which vacancy is available" name="uname" required></input>

            <label for="psw"><b>Company Name</b></label>
            <input type="password" placeholder="Enter Company name" name="psw" required></input>

            <label for="psw"><b>Company Location</b></label>
            <input type="password" placeholder="Enter Company Location" name="psw" required></input>
                
            <label for="uname"><b>About your company</b></label>
            <input type="text" placeholder="Enter About Company" name="uname" required></input>

            <label for="uname"><b>Company's Responsibilities</b></label>
            <input type="text" placeholder="Enter Responsibilities" name="uname" required></input>

            <label for="psw"><b>Company's Requirements </b></label>
            <input type="password" placeholder="Enter Company's Requirements" name="psw" required></input>

            <button type="submit">ADD</button>
            
        </div>

    </form>

    </div>
    )
}

export default Addpost;
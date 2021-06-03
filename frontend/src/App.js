import React from 'react'
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './pages/homepage'
import Learnerlogin from './pages/learnerlogin'
import Mentorlogin from './pages/mentorlogin'
import Recruiterlogin from './pages/recruiterlogin'
import Learnersignup from './pages/learnersignup'
import Mentorsignup from './pages/mentorsignup'
import Recruitersignup from './pages/recruitersignup'
import Addpost from './pages/addpost'
import Addproject from './pages/addproject'
import Learnerupdatedetails from './pages/learnerupdatedetails'
import Learnerprofile from './pages/learnerprofile'
import Oppurtunity from './pages/oppurtunity'
import Recruiterlandpage from './pages/recruiterlandingpage'
import Mentorlandpage from './pages/mentorlandpage'


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/learner-login">
            <Learnerlogin />
          </Route>
          <Route path="/learner-signup">
            <Learnersignup />
          </Route>
          <Route path="/mentor-signup">
            <Mentorsignup />
          </Route>
          <Route path="/mentor-login">
            <Mentorlogin />
          </Route>
          <Route path="/recruiter-signup">
            <Recruitersignup />
          </Route>
          <Route path="/recruiter-login">
            <Recruiterlogin />
          </Route>
          <Route path="/addpost">
            <Addpost />
          </Route>
          <Route path="/addproject">
            <Addproject />
          </Route>
          <Route path="/learnerupdatedetails">
            <Learnerupdatedetails />
          </Route>
          <Route path="/learnerprofile">
            <Learnerprofile />
          </Route>
          <Route path="/oppurtunity">
            <Oppurtunity />
          </Route>
          <Route path="/recruiterlandpage">
            <Recruiterlandpage/>
          </Route>
          <Route path="/mentorlandpage">
            <Mentorlandpage/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

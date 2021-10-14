
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route,Switch } from "react-router";
import Home from './Home'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Gallery from './Gallery'
import Achievements from './Achievements'
import Contact from './Contact'

import Navbar from "./Navbar";
import Footer from "./Footer";


const App =()=>{
  return(
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/skill" component={Skill}/>
    <Route exact path="/project" component={Project}/>
    <Route exact path="/achievement" component={Achievements}/>
    <Route exact path="/gallery" component={Gallery}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/"/>
    
    </Switch>
    <Footer/>
    
    
    </>
  );

};
export default App
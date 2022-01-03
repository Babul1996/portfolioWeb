import React from 'react'
import './Home.css';
import web from '../src/image/PHOTO.jpg'
import resume from '../src/photo/Resume.pdf';



const Home = () => {
  
    return (
        <>
        <div className="poster">
        <div className="container">
        <div id="uni">
          <div className="div70">
               <h1>Hi I'm Babul Kumar.</h1>
               <h2>I'm a Front End Devloper</h2>
               <a href={resume} download="pic">
              <button className="btn btns" type="button" >Download CV</button>
              </a>
           </div>
           
           <div className="div30">
               <img src={web} className="photo" alt="self"/>
               
           </div>
           
          </div>
        </div>
        
           
            
        </div>
        </>
    );
};

export default Home


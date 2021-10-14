import React from 'react'
import './Home.css';
import web from '../src/image/PHOTO.jpg'



const Home = () => {
  
    return (
        <>
        <div className="poster">
        <div className="container">
        <div id="uni">
          <div className="div70">
               <h1>Hi I'm Babul Gupta.</h1>
               <h2>I'm a Front End Devloper</h2>
               <button className="btn btn-primary" type="button">Download CV</button>
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


import React from "react";
import "./About.css";
import about from "../src/image/PHOTO.jpg";

const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row my-4">
              <h2 className="text-center">About</h2>
                <div className="col-md-10 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h3 className="my-3">I'm Babul Kumar and I'm a Front End Devloper</h3>
                  <p>
                    Being a web developer or programmer, you must have to start
                    your journey very soon and in same way i initiated this
                    process when i did my bachelor of computers from Thakur
                    Prasad College (T.P. College Madhepura). After that i
                    continued my journey by pursuing MCA from LNCT college
                    Bhopal to achieve the art of mastery in this dynamic field.
                    However, this process is still on and learning never stops.
                    Currently I am focusing to polish my skills & to better
                    myself in every aspect.
                  </p>
                </div>
                <div className="col-lg-2 odrer-1 order-lg-2 header-img">
                <img src={about} className="img-fluid" alt="pic"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;



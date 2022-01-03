import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="skill">
              <h2>Skill</h2>
            </div>
            

            <div className="div40">
              <h3>My creative skills & experiences.</h3>
              <p>
                Creativity is the ability to think about a task or a problem in
                a new or different way, or the ability to use the imagination to
                generate new ideas. Creativity enables you to solve complex
                problems or find interesting ways to approach tasks. If you are
                creative, you look at things from a unique perspective. You can
                find patterns and make connections to find opportunities. There
                is some risk involved with being creative, but you can show you
                are self-motivated to try things that have not been done before.
              </p>
            </div>
            
            <div className="div60 ps-2">
            <h3>HTML</h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{width: "80%"}}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >80%</div>
              </div>
              <h3>CSS</h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{width: "70%"}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >70%</div>
              </div>
              <h4>Bootstrap</h4>
              <div class="progress">
              
                <div
               
                  class="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{width: "60%"}}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >60%</div>
              </div>
              <h3>Java Script</h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-warning"
                  role="progressbar"
                  style={{width: "50%"}}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >50%</div>
              </div>
              <h3>ReactJS</h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-danger"
                  role="progressbar"
                  style={{width: "40%"}}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >40%</div>
              </div>
              <h3>Tailwind CSS</h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-dark"
                  role="progressbar"
                  style={{width: "30%"}}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >30%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;

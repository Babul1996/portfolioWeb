import React from "react";
import Card from "./Card";
import Sdata from "./Sdata"



const Project = () => {
  return (
    <>
      <div className="my-4 pro">
        <h3 className="text-center">Project</h3>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            {Sdata.map((val, ind)=>{
              return <Card key={ind}
              title={val.title}
              dic={val.dic}
                link={val.link}
              />
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

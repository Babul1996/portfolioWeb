import React from "react";
import './Card.css';


const Card = (props) => {
  return (
    <>
     
              <div className="col-md-4 col-10 mx-auto">
                <div className="card mb-5 bg-white rounded">
                 
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                      {props.dic}
                    </p>
                   
                  </div>
                </div>
              </div>
         
    </>
  );
};

export default Card;

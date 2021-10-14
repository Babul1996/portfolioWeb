import React from 'react'

const Acard = (props) => {
    return (
        <>
     
              <div className="col-md-4 col-10 mx-auto">
                <div className="card shadow-sm  mb-5 bg-white rounded">
                <img src={props.imgsrc} class="card-img-top" alt="..."/>
                 
                </div>
              </div>
         
    </>
    )
}

export default Acard

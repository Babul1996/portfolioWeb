import React from 'react'
import Gdata from './Gdata';
import Acard from './Acard';



const Gallery = (props) => {
    return (
    
      <>
      <div className="my-4 pro">
      <h3 className="text-center">Gallery</h3>
    </div>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
        {Gdata.map((val,ind)=>{
            return <Acard key={ind}
                imgsrc={val.imgsrc}
            />
        })}
          </div>
        </div>
      </div>
    </div>
     </>   
         
    
    )
}

export default Gallery

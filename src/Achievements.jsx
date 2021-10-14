import React from 'react'
import Acard from './Acard';
import Achive from './Achive';

const Achievements = () => {
    
    return (
       <>
        <div className="my-4 pro">
        <h3 className="text-center">Achievements</h3>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row  gy-3">
          {Achive.map((val,ind)=>{
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

export default Achievements

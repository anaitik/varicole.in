import React from 'react'
import { useState } from 'react'

const Accordian = (value) => {
  const [show,setshow]=useState(false);
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={()=>setshow(!show)}>
            {value.title}
          </button>
        </h2>
        {show && <div>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>{value.description}</p>
              <a href={value.url}> read full article</a>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Accordian
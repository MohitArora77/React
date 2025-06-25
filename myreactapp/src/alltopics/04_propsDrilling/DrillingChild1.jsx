import React from 'react'
import DrillingChild2 from './DrillingChild2'

const DrillingChild1 = (x) => {
    console.log(x); // {prop1 : [{..},{..},..]} // data for dbData will be present in prop1
    
  return (
    <div>DrillingChild1
        {/* Value inside the prop1  */}
        <DrillingChild2 prop2={x.prop1} ></DrillingChild2>
    </div>
  )
}

export default DrillingChild1
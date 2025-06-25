import React from 'react'

const Child1 = (x) => {
    console.log(x);
    // {prop1 : "Hello Child",prop2:[]}}
    // {propData : {data1:"Hello Child",data2:[]}}
    
  return (
    <div>
        <h1>Child1</h1>
        
         {/* To show on the UI (XML) */}
        <p>{x.prop1}</p> 
        {/* <p>{x.prop2}</p>  */}
    </div>
  )
}

export default Child1
import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    let data1 ="Hello Child"
    let data2 =[10,20,30,40];
  return (
    <div>
        <h1>Parent</h1>
        {/* prop1 will become a key which contains value of data1 */}
        {/* prop1 is property name and data1 is property value */}
        {/* propName= {propValue} inside the tag */ }

        <Child1 prop1={data1} prop2={data2}></Child1>
        <Child2 propData={{data1 ,data2}}></Child2>

        {/* <Child1 prop2="Bye Child"></Child1> */}

      
    </div>
  )
}

export default Parent
import React from 'react'

const DrillingChild2 = (x) => {
    console.log(x); 
    // {prop2 : [{..},{..},..]} // datta of the prop1 will be in prop2
    // To add uniqueness we add a key which contains a unique attribute
    
  return (
    <div>
        <p>DrillingChild2</p>
        {x.prop2.map((ele)=>{
            console.log(ele.text);
            return <li key={ele.id}>{ele.text}</li>;
        })};
    </div>
  );
};

export default DrillingChild2
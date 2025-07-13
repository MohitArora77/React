import React from 'react'
import HOC from './HOC';
const ChildY = (props) => {
    console.log(props);
    
  return (
    <div>ChildY</div>
  )
}

export default HOC(ChildY)

// HOC(Childy) -> callback function will be exported to ParentX from HOC
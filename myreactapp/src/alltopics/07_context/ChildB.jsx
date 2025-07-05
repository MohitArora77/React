import React, { useContext } from 'react'
import { store } from './Parent'
import { AuthContext } from './Context';

const ChildB = () => {
    let val = useContext(store); 
    let AuthData = useContext(AuthContext)
    
    // To use the context (context consume)
    // Conditional Rendering
    if (AuthData()){
        return <h1>Welcome User</h1>
    }

  return (
    <div>ChildB {val}</div>
  )
}

export default ChildB
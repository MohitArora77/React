import React from 'react'

const HOC = (Comp) => {  
    // Comp contains ChildY
    let data = "Hello"
  return () => {
    return <Comp data={data}></Comp>
    // data prop will be provided to Comp (ChildY) from HOC
  }
}

export default HOC
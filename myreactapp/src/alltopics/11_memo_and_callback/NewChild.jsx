import React from 'react'

const NewChild = (props) => {
    // console.log("Child rendered");
    
  return (
    <div>NewChild</div>
  )
}

export default React.memo(NewChild)

// Able to skip the re-rendering if there are no props present in the child component
// But if the props are present then memo will not be able to skip re-rendering

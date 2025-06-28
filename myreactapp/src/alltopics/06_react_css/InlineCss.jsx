import React from 'react'

const InlineCss = () => {
    // inline CSS in form of object (expressions)
  return (
    <div>
        <h1 style ={{
            color:"red",
            backgroundColor:"Blue",
            width:"200px",
            padding:"20px",
            margin:"20px"
        }}>InlineCSS</h1>  
        <button id="mybtn">Global CSS</button>
    </div>
  )
}

export default InlineCss
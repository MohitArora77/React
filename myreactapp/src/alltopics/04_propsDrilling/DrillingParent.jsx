import React from 'react'
import DrillingChild1 from './DrillingChild1'

const DrillingParent = () => {
    let dbData=[
        {id: 1 , text:"React"},
        {id: 2 , text:"JavaScript"},
        {id: 3 , text:"CSS"},
        {id: 4 , text:"HTML"},
    ]

  return (
    <div>
        <h1>DrillingParent</h1>
        <DrillingChild1 prop1={dbData}></DrillingChild1>
    </div>
  )
}

export default DrillingParent
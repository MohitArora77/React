import React from 'react'
import { useReducer } from 'react'

let initialState = 0
function reducerfunc(prevState, action) {
    switch (action) {
        case "increment":
            return prevState + 1
        case "decrement":
            return prevState - 1
        case "reset":
            return 0
    }
}

const Reducer = () => {

    let [state, dispatch] = useReducer(reducerfunc, initialState)

    return (
        <div>
            <h1>Reducer</h1>
            <h2>Count {state}</h2>
            <button onClick={() => dispatch("increment")}>Increment</button><br/>
            <button onClick={() => dispatch("decrement")}>Decrement</button><br/>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}

export default Reducer
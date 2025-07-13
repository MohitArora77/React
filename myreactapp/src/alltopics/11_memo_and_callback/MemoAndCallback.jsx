import React, { useState } from 'react'
import { useMemo } from 'react'
import NewChild from './NewChild'
const MemoAndCallback = () => {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)

    // function multiple(){

    //     return add*5
    //     // let mul = add*5
    //     // return mul
    // }\

    // It return a Memoized Value
    let multiply = useMemo(() => {
        console.log("multiply");
        return add * 5
    }, [add])

    function greet(){
        console.log("Welcome");
        
    }

    return (
        <div>MemoAndCallback
            <br />
            <br />
            <h2>Addition {add} </h2>
            <button className='bg-amber-400' onClick={() => setAdd(add + 1)}>Increment</button>

            <br />
            <br />

            <h2>Substraction {minus} </h2>
            <button className='bg-amber-400' onClick={() => setMinus(minus - 1)}>Decrement</button>

            <br />
            <br />

            <h2>Multiplication {multiply} </h2>
            {/* <NewChild props={greet} /> */}
            <NewChild/>

        </div>
    )
}

export default MemoAndCallback
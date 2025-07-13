import React, { useEffect, useState } from 'react'

const LifeCycleInFBC = () => {

    const [count, setCount] = useState(0);
    const [initialRender, setInitialRender] = useState(true)
    const [prevCount, setPrevCount] = useState(0)

    // useEffect(call back function, dependency array)

    // Component Mounted and UnMounted :
    useEffect(() => {
        console.log("Component Mounted");

        // If dependency array is empty then render will run infinitly
        // let intervalID = setInterval(()=>{
        //     console.log("API_CALLED");},2000)

        // For Component Unmounted
        return () => {  // Cleanup  Function : to stop unecessory code.
            // clearInterval(intervalID);
            console.log("Component Unmounted");

        };
    }, []); // empty -> Mounting phase 


    // Component Updated :
    useEffect(() => {
        if (initialRender) { // initally it was true 
            // To stop the execution on initial rendering of component updated
            setInitialRender(false)
            return;
        }
        console.log("Component Updated");
    }, [count]);

    // getSnapShotBeforeUpdate() : able to show the previous or before state of the UI 
    useEffect(() => {
        return () => {
            console.log("Prev state was", count);
            setPrevCount(count)
        };
    }, [count]);


    return (
        <div className='items-center justify-center m-10'>LifeCycleInFBC - useEffect Hook
            <h1>Previous Count was {prevCount} </h1>
            <h1>Count is {count}</h1>
            <button className='bg-amber-600 border-2' on onClick={() => setCount(count + 1)}>Update Count</button>
        </div>
    )
}

export default LifeCycleInFBC
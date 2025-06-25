import { useState } from "react";


const StatesInFbc =()=>{
// console.log(useState()); // [undefined,f]

 let [state,setState] = useState("Hello Everyone");
 let [count,setCount] = useState(0)
// default value of state is undefined
// default value of setstate is function -> setstate function is used to update the state
  const updateState =()=> setState("Bye Everyone");
  const reverseState=() => setState("Hello Everyone")
  const incre =() => setCount(count+1)
  const decre =() => {
    if (count>0){
        setCount(count-1)
    }
};
  const reset =() => setCount(0)
    return(
        <div>
              {/* To use the state and show in UI we need to store the variable in {}   */}
            <h1>States in Fbc {state}</h1>
            <button onClick={updateState}>Click to update</button>
            <button onClick={reverseState}>Click to Reverse</button>
            <h1>Counter: {count}</h1>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
};

export default StatesInFbc

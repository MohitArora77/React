import React from "react";
import { useRef } from "react";

const UncontrolledForms = () => {

    // In Uncontrolled we use useRef() -> return object
    let emailRef = useRef(""); // {current : ""} // initally undefined {current : ud} // current element
    let passwordRef = useRef(""); // {current : ""} 

    const formSubmit =(e) =>{
        e.preventDefault();
        let user ={
            email : emailRef.current.value,
            password : passwordRef.current.value
        };
        console.log(user);
        // console.log(emailRef); -> inside emailref -> object current key -> value key 
        // console.log(passwordRef); -> inside passwordref -> object current key -> value key 
        
    }
  return (
    <div>
      <h1>UncontrolledForms1</h1>
      <form>
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          ref={emailRef} 
        />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <br />
        <button onClick={formSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForms;

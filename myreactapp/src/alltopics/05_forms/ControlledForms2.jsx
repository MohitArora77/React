// Able to handle data in a form using single usestate

import React from "react";
import { useState } from "react";

const ControlledForms2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Function craeted for both email and Password

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({...formData, [name]: value });
    // Create a splite for both name and value to be included
    // ...formData -> {email:"" , password :""}
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formData);
    
  }
  return (
    <div>
      <h1>ControlledForms1</h1>
      <form>
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          name="password"
          id="password"
          value={formData.password} // To show the value on the UI
          onChange={handleChange} // Event
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;

import React from "react"
import { useState } from "react"

const ControlledForms1 = ()=>{

    // The controlled forms will be done using usestate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("") 

    // Functions created for the change when we enter values 
    const HandleEmail = (e)=>{
        setEmail(e.target.value)
    } 
    const HandlePassword = (e) =>{
        setPassword(e.target.value)
    }

    // function after submitting the details
    const formSubmit = (e) =>{
        e.preventDefault()
        // console.log(email,password) // able to show deatils in console but in string format
        console.log({email,password}) // able to show deatils in console as Object
    }
    return (
        <div>
            <h1>ControlledForms1</h1>
            <form>
                <label htmlFor="email">Email :</label>
                <input type="text" name="email" id="email" value={email} onChange={HandleEmail}/>
                <br/>
                <label htmlFor="password">Password :</label>
                <input type="text" name="password" id="password" value={password} onChange={HandlePassword}/>
                <br/>    
                <button onClick={formSubmit}>Submit</button>
            </form>
            </div>

    )

}

export default ControlledForms1
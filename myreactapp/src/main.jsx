import {createRoot} from "react-dom/client" // createRoot -> to create a root to send element in browers DOM

import App from "./App" // import App.jsx Component
import "./index.css"
import Context from "./alltopics/07_context/Context";

const div= document.getElementById("root")

// createRoot(div).render(<h1></h1><h2></h2>) // nedd a parent tag withour parent tag it will not work
// createRoot(div).render(App()) 
// createRoot(div).render(<App></App>) // Using XML 
createRoot(div).render(
<Context>
<App/> 
</Context>)
{/*  Using XML  */}

// By Method Chaining after taking the data render the data on browser using .render() -> render help the data to show on UI
// Till render -> react and then XML
// Component is a function
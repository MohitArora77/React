// Using Named function
// function App(){
//     return <h1>I am App Component</h1>
// }
// export default App // To Export Entire function  to main.jsx

// using Arrow Function
// Only using arrow function without XML return --> Arrow Function
// Using arrow function with using XML return --> Component

// import Navbar from "./components/Navbar";
// import Fbc from "./alltopics/01_typesofcomponent/Fbc";
// import Cbc from "./alltopics/01_typesofcomponent/Cbc";
// import StatesInFbc from "./alltopics/02_states/StatesInFbc";
import StatesInCbc from "./alltopics/02_states/StatesInCbc";
import Parent from "./alltopics/03_props/Parent";
import DrillingParent from "./alltopics/04_propsDrilling/DrillingParent";
import ControlledForms1 from "./alltopics/05_forms/ControlledForms1";
import ControlledForms2 from "./alltopics/05_forms/ControlledForms2";
import UncontrolledForms from "./alltopics/05_forms/UncontrolledForms";
import InlineCss from "./alltopics/06_react_css/InlineCss";
import Navbar from "./alltopics/06_react_css/Navbar";
import Card from "./alltopics/06_react_css/Card";
import ParentContext from "./alltopics/07_context/Parent"
import LifeCycleInCBC from "./alltopics/08_lifecycle/LifeCycleInCBC";

const App=()=>{
    return(
        <div>
        {/* <Navbar/> */}
            {/* <h1>Hello</h1>
            <h2>React JS</h2>
            <Fbc/>
            <Cbc/>
            <StatesInFbc></StatesInFbc> */}
            {/* <StatesInCbc></StatesInCbc> */}
            {/* <Parent/> */}
            {/* <DrillingParent></DrillingParent> */}
            {/* <ControlledForms1></ControlledForms1> */}
            {/* <ControlledForms2></ControlledForms2> */}
            {/* <UncontrolledForms/> */}
            {/* <InlineCss/> */}
            {/* <Navbar/> */}
            {/* <Card/> */}
            {/* <ParentContext/> */}
            <LifeCycleInCBC/>
        </div>
    );
}; 
// Component 
export default App
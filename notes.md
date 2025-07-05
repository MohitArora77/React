br# React.js :
> It is a library of javascript. (A library is a collection of pre-define codes.)
> To create Single page Application we use React.

# Next.js :
> It is a framework (A framework collection of library)


# Features of React.js :
1) Single Page Application
2) Declarative (It Tells -> What to do?)
3) Component Based Architecture( Dividing webpage into different Components is known as CBA. Component are building block of webpage) 
4) Virtual DOM

<!-- Components -->
> Components are building block of WebPages.

<!-- Components are of 2 types -->

1) Class Based Component :
> In Class Based we use JS Classes.
> Statefull Component
> NO Hooks
> Life Cycle Methods
> It Contains of 'This' Keyword
> Render

2) Function Based Component
> In Function Based we use JS Function.
> Stateless Component
> TO make Function Based Statefull we use - HOOKS
> No Life Cycle Methods
> It does not Contains of 'This' Keyword
> No render

# Web page application are of 2 type:

1) MultiPage Application.
> It Contains Multiple HTML,CSS,JavaScript pages.
> It is slower than Single page Application.
> ex: Amazon.
> Can't use Cache Storage.

2) SinglePage Application
> It contains Single HTML Page. -> Using React JS
> They are more faster than MultiPage Application
> ex: Chai DOCS, FindCoder.
> can use Cache Storage.
> Have Cache Storage

<!-- Create react app and vite are the way to install node,react -->
<!--Structure  -->
# Node Modules Folder :
> Pre-defined code are present here.

# Public folder:
> contains all those files which required Globally.

# Src: 
> Source folder , code will be done here.
> Except main.jsx(java Script Xml/js can be fine)
> Main Code

# Gitignore

# Single Html file  
> no change need to be done here
> important id=root
# Package.json
> It is the directory of the project.

# Package-lock.json
> Metadata of Package.json

# project -> project name -> npm run dev

* note : 
To write tag in XML 
 1) <br></br>
 2) <br/>

# States 
> A container used to store the data in a Component

# Hooks
> In-build Function
> useState is a Hook

# ES7 + React/redux/react-native snippets
-> rafce (React Arrow function component export)
-> rcc (for Class Based Component)
# CBC is statefull 

# All topics :
types of component
states
props
propsDrilling
Forms
React CSS
Context
lifecycle
reducer
routing
Memo 
HOF

# Props -> Properties
> To send the data from one function to other function
> To send the data from child to parent
> It is not like inheritence
> To create a prop -> propname ={propvalue} with in the tag


# For Props
# For Props Drilling
* For Nested child 
parent -> Child1 -> Child2 (Props Drilling)


# FORMS

> In react there are 2 forms 
i) Controlled Forms
> By using  useState -> return Array
ii) Uncontrolled Forms
> By using useRef -> return Object
> Current Key is Undefined {current : undefined}

# React works on 2 DOM :
i) Real DOM (Browser's DOM)
> Create Browser
> Uncontrollable form

ii) Virtual DOM
> Create React
> Controllable Form

1) Whenever we create a project the Real DOM (browser DOM) will be created.
2) Multiple Virtual DOM will be created when we want to update the real DOM for Controlled Forms.
3) React with the help of Diffing Algo is used to check the difference between Old VDOM and New VDOM and the updated state and previous updated state of Virtual DOM will be taken for comparison.
4) Then the difference between them will be find and the real DOM will be updated or patched based on those differnce ,its called Patching.

Complete Process is called Reconciliation and this works on Controlled Forms. That's why we generally used Controlled forms bcz in Uncontrolled form the Real DOM will be directly updated. 

# React CSS

> Types
1) Inline 
> style ={{property:value,property:value}}
> Use expression 
> second letter 1st letter will be capital
2) Global (created inside src folder)
> global CSS will be import in main.jsx
> id="idname"
> tailwind css import in Global CSS
3) Module (filename.module.css)
> Don't use element selector always take id or class
> id = {style.idname or classname} -> for it to run on specific file
> use combinator selectors
> to import -> import style from "./filename.module.css"


# Context 
> A context is like store room
> In which any child can able to access the propety of parent directly from the parent 

> steps to create context
1) context create
step-1 :
> React provide method called createContext , so import
> called be called outside the component
> Store will be created in parent
2) context provide
step-2 :
> The store contains a key provider.
> Provider have in-built value
3) context consume
step-3 :
> usecontext to provide the context(Store) in which we
> usecontext() accept a context object
> Export the store from parent and import were we want to use the context 

# Life Cycle :
> 3 Phase :
1) Mounting (component on UI)
> componentDidMount(){}
2) Updating (component get updated)
> componentDidUpdate(){}
3) Unmounting (component removed from UI)
> componentWillUnmount(){}
> Work in Class Based Component
import React from 'react'
import References from '../../pages/References'
import Blog from '../../pages/Blog'
import Learn from '../../pages/Learn'
import Home from '../../pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
// createBrowser Router is a function which return Object stored in a variable
// createBrowserRouter accepts Array as argument
// There are multiple route so everything will be inside Array
// RouterProvider will be able to provide the routes for navigation
// In-build props in RouterProvider -> router={objectname}


let myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, 
        children: [
            // children will be able to render the 
            // children return objects
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/learn",
                element: <Learn />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/references",
                element: <References />,
            }]

    }])

const Routing2 = () => {
    return (
        <div>
            <RouterProvider router={myRoutes} />
        </div>
    )
}

export default Routing2


// a problem Might Occur that we not able to render the Navbar component on the UI , so to solve that problem we 
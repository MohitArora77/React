import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar/> {/* able to render the Navbar on UI  */}
        <Outlet/> {/* able to show the children route on UI  */}
    </div>
  )
}

export default Layout

// Layout.jsx is used to render the Layout for the UI because if we don't use layout we will not be able to render the components(Navbar) on the UI


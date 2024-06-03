import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Topbar from './Components/Navbar/Topbar'

const Layout = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout
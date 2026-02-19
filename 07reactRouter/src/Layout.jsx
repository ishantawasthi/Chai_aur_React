import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home'

import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
    
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout

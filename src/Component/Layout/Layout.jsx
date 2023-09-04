import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import img from "../Home/gettyimages-1414385989-1024x1024.jpg"
import { Helmet } from 'react-helmet'

export default function Layout() {
  return (
    <>
     <Navbar/>
    <Outlet></Outlet>
    <Helmet>
            
            <link rel="icon" type="image/png" href={img} />
          </Helmet>
    </>
  )
}

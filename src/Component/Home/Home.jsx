import React from 'react'
import style from "./Home.module.scss"
import img from "./gettyimages-1414385989-1024x1024.jpg"
export default function Home() {
  
  return (
    <>
  
    <div className={`${style.bg}`}>
        <div className="d-flex justify-content-center align-items-center vh-100 w-100">
            
            <div className="text-light text-center">
            <h3 className='my-3 w-50 mx-auto'>Welcome to TheMealDB</h3>
            <p className='w-50 mx-auto fw-bold'>
            Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.

            </p>
            <img src={`${img}`} alt="" style={{"width":"10%"}} className=' rounded-circle'/>
            </div>
          
            
        </div>
    {/* <h1 className='text-light text-center'>Home</h1> */}

    </div>
    
    </>
  )
}

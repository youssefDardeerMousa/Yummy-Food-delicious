import React from 'react'
import img from "./gettyimages-1414385989-1024x1024.jpg"
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
  <div className="offcanvas offcanvas-start " style={{"width":"200px"}}  tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <div className="d-flex">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Yummy</h5>
    <img src={img} style={{"width":"30px" , "borderRadius":"50%"}} className='mt-1 mx-2' alt=""  />
    </div>
   
    <i type="button" className="btn-close text-reset border-0" data-bs-dismiss="offcanvas" aria-label="Close"></i>
  </div>
  <div className="offcanvas-body">
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    
    
      <ul className="navbar-nav flex-column mx-auto mb-2 mb-lg-0">
        <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
          <Link className="nav-link fw-bold " aria-current="page" to="/Search" >Search</Link>
        </li>
        
        <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
          <Link className="nav-link fw-bold" to={"/Categories"}>Categories</Link>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
          <Link className="nav-link fw-bold" to={"/Area"} >Area</Link>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close">
          <Link className="nav-link fw-bold" to={"/Ingredients"}>Ingredients</Link>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close" >
          <Link className="nav-link fw-bold" to={"/Contact"}>Contact Us</Link>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close" >
          <Link className="nav-link fw-bold" to={"/Home"}>Home</Link>
        </li>
      </ul>
      
    
  </div>
</nav>
    </div>

  </div>

  <div  className="bg-light position-fixed top-0 bottom-0 left-0 right-0 px-3">
    <img src={img} style={{ width: "40px", borderRadius: "50%" }} className="mt-2" alt="" />
</div>


<i className=" fas fa-bars ms-4 fs-3 text-dark  position-fixed bottom-50 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>



    
    </>
  )
}

// Categories.js

import React, { useEffect, useState } from 'react';
import style from "./cat.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { categoryapi } from '../../Redux/Category';
import { Link } from 'react-router-dom';

export default function Categories() {
  let [loading, setLoading] = useState(true);
  let[data,setdata]=useState([])
  let dispatch = useDispatch();

  async function fetchData() {
      setLoading(false);
      let response=await dispatch(categoryapi());
      setLoading(true);
      // console.log(response.payload.categories);
      setdata(response.payload.categories)
  }

  useEffect(() => {
      fetchData();
  }, []);
//col_md_4
  return (
      <>
          <div className={`${style.bg}`}>
            {loading ? (
              <div className='text-center'>
                <div className="container">
                    <div className="row">
                      {data.map((item) => (
                        
                        <div key={item.idCategory} className={`col-md-4 col-sm-12  my-3 ${style.col_md_4}`} Key={item.idCategory}>
                          <Link className='text-decoration-none' to={`/StrCategory/${item.strCategory}`}>
                            
                          <div className="img">
                           <img  src={item.strCategoryThumb}  style={{"borderRadius":"50%" ,"width":"200px","height":"200px","objectFit":"cover"}} alt="" />

                           </div>
                            <div className={`text-center  mx-auto  bg-light ${style.bg_light}`} style={{"width" :"300px"}}>
                                <h3 className='text-dark'>{item.strCategory}</h3>
                                <p className='text-dark fw-bold'>{item.strCategoryDescription.split("").slice(0,100).join("")}</p>
                            </div>
                          </Link>
                          
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            ) : <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
              
             <i className="fas fa-spin fa-spinner fs-1 text-light"></i> 
              </div>}
          </div>
      </>
  );
}

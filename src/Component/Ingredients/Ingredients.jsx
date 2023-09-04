// Categories.js

import React, { useEffect, useState } from 'react';
import style from "./Inte.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IngredientsApi } from '../../Redux/Ingredients';

export default function Categories() {
  let [loading, setLoading] = useState(true);
  let[data,setdata]=useState([])
  let dispatch = useDispatch();

  async function fetchData() {
      setLoading(false);
      let response=await dispatch(IngredientsApi());
      setLoading(true);
      // console.log(response.payload.categories);
      setdata(response.payload);
      console.log(response.payload);
  }

  useEffect(() => {
      fetchData();
  }, []);
//col_md_4
  return (
      <>
      {loading? <>
        <div className="container">
          <div className="row">
            {data.map((item)=>{
              return <>
              <Link className='text-decoration-none col-lg-3 col-md-4 col-sm-12 my-3 text-center ' to={`/Ingredient/${item.strIngredient}`}>
              <div key={item.idIngredient} className="">
              <i className="fa-solid fa-drumstick-bite fs-1 text-light "></i>
              <h3 className='text-light  my-2'>{item.strIngredient}</h3>
              </div>
              </Link>
             
              
              </>
            })}
          </div>
        </div>
      </> : <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
              
              <i className="fas fa-spin fa-spinner fs-1 text-light"></i> 
               </div> }
        
      </>
  );
}

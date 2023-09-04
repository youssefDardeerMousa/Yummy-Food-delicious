// Categories.js

import React, { useEffect, useState } from 'react';
import style from "./area.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AreaApi } from '../../Redux/AreaData';
import { Helmet } from 'react-helmet';

export default function Categories() {
  let [loading, setLoading] = useState(true);
  let[data,setdata]=useState([])
  let dispatch = useDispatch();

  async function fetchData() {
      setLoading(false);
      let response=await dispatch(AreaApi());
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
      {loading?<>
        <div className="container">
            <div className="row">
              {data.map((item)=>{
                return <div className="col-md-3 col-sm-12 text-center my-3">
                  <Link className='text-decoration-none' to={`/AreaFood/${item.strArea}`}>
                  <i className="fas fa-house fs-1 fw-bold text-success"></i>
                  <h2 className="text-light ">{item.strArea}</h2>
                  </Link>
                 
                </div>
              })}
            </div>
          </div>
      </>: <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
              
              <i className="fas fa-spin fa-spinner fs-1 text-light"></i> 
               </div>}
               <Helmet>
            <title>Area</title>
            
          </Helmet>
      </>
  );
}

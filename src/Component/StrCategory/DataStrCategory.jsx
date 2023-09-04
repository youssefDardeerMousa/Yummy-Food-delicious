import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { StrCategoryapi } from '../../Redux/StrCategory';
import style from "./Style.module.scss";
import { Helmet } from 'react-helmet';
import img from "../Home/gettyimages-1414385989-1024x1024.jpg"
export default function DataStrCategory() {
  let { FoodName } = useParams();
  let dispatch = useDispatch();
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);

  async function getData() {
    setLoading(false)
    let response = await dispatch(StrCategoryapi(FoodName));
    setdata(response.payload);
    setLoading(true)
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data); // Now you can access the data directly

  return (
    <>
      <div className={`${style.bg}`}>
            {loading ? (
              <div className='text-center'>
                <div className="container">
                    <div className="row">
                      {data.map((item) => (
                        
                        <div key={item.idMeal} className={`col-md-4 col-sm-12  my-3 ${style.col_md_4}`}>
                          <Link className='text-decoration-none' to={`/Details/${item.idMeal}`}>
                            
                          <div  className="img">
                           <img  src={item.strMealThumb}  style={{"borderRadius":"50%" ,"width":"200px","height":"200px","objectFit":"cover"}} alt="" />

                           </div>
                            <div className={`text-center  mx-auto  bg-light ${style.bg_light}`} style={{"width" :"200px"}}>
                                <h3 className='text-dark'>{item.strMeal}</h3>
                                
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
          <Helmet>
            <title>Categories Food</title>
            <link rel="icon" type="image/png" href={img} />
          </Helmet>
    </>
  );
}

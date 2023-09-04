import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getIngredientsApi } from '../../Redux/GetIngrediencw';
import style from "./style.module.scss"
export default function GetIngredie() {
    let { GetIngredient } = useParams();
    console.log(GetIngredient);
  let dispatch = useDispatch();
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);

  async function getData() {
    setLoading(false)
    let response = await dispatch(getIngredientsApi(GetIngredient));
    setdata(response.payload);
    setLoading(true)
    console.log(response);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
              <div className='text-center'>
                <div className="container">
                    <div className="row">
                      {data.map((item) => (
                        
                        <div key={item.idMeal} className={`col-md-4 col-sm-12  my-3 ${style.col_md_4} `}>
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
    
    </>
  )
}

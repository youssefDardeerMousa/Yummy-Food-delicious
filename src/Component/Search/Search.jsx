import React, { useState } from 'react';
import style from './search.module.scss';
import { useDispatch } from 'react-redux';
import { SearchbyNameapi } from '../../Redux/SearchName';
import { Link } from 'react-router-dom';
import { SearchbyLetterapi } from '../../Redux/SearchLetter';
import { Helmet } from 'react-helmet';
import img from "../Home/gettyimages-1414385989-1024x1024.jpg"

export default function Search() {
  let dispatch = useDispatch();
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);
  let [value1, setvalue1] = useState([]);

 
  return (
    <>
    <div className={``}>
      <div className="container">
        <div className="d-flex justify-content-center w-75 mx-auto my-3">
          <input
            type="text"
            className={`form-control mx-3 ${style.bg} ${style.formcontrol}`}
            placeholder="Name"
            onChange={async(x)=>{setLoading(false);let response=await dispatch(SearchbyNameapi(x.target.value)) ;setvalue1(response.payload);console.log(response.payload
              );setLoading(true)}}
          />
          <input
            type="text"
            className={`form-control mx-3 ${style.bg} ${style.formcontrol}`}
            placeholder="letter"
            maxLength={1}
            onChange={async(x)=>{setLoading(false);let response=await dispatch(SearchbyLetterapi(x.target.value)) ;setvalue1(response.payload);console.log(response.payload
              );setLoading(true)}}
          />
        </div>
      </div>
      <div className={`${style.bg}`}>
            {loading ? (
              <div className='text-center'>
                <div className="container">
                    <div className="row">
                      {value1?.map((item) => (
                        
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
    </div>

    <Helmet>
            <title>Search</title>
            <link rel="icon" type="image/png" href={img} />
          </Helmet>
    </>
    
    
  );
}

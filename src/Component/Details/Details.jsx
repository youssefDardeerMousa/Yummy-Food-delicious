import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { StrDetailsapi } from '../../Redux/FoodDetails';

export default function DataStrCategory() {
  let { id } = useParams();
  console.log(id);
  let dispatch = useDispatch();
  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);

  async function getData() {
    setLoading(false)
    let response = await dispatch(StrDetailsapi(id));
    setdata(response.payload);
    setLoading(true)
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data); // strArea Now you can access the data directly

  return (
    <>

    {loading?<div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <img src={`${data[0]?.strMealThumb}`} className='w-100 my-3 ps-5' alt=""  />

            </div>
            <div className="col-md-6 col-sm-12">
                
              <div className=" text-light text-center my-5 ps-5 ms-3">
                
              <h4 className='text-light text-center'>Category :{data[0]?.strCategory}</h4>
                    <h4 className='text-light text-center'>Area :{data[0]?.strArea} </h4>
              <h4 className='text-center text-light'>Description</h4>
                { data[0]?.strInstructions.split("").slice(0,1000).join("")}
                <h5>Ingredients</h5>
                <div className="d-flex ">
    <div className="g-1 mx-auto ">
        <ul className="list-group ">
            <li className='list-group-item fw-bold bg-dark text-light'> 1: {data[0]?.strIngredient1!=""?data[0]?.strIngredient1:"water 5ml"}</li>
            <li className='list-group-item fw-bold bg-dark text-light'> 2: {data[0]?.strIngredient2!=""?data[0]?.strIngredient2:"water 5l"}</li>
            <li className='list-group-item fw-bold bg-dark text-light'> 3: {data[0]?.strIngredient3!=""?data[0]?.strIngredient3:"water 5ml"}</li>
            <li className='list-group-item fw-bold bg-dark text-light'> 4: {data[0]?.strIngredient3!=""?data[0]?.strIngredient3:"water 5ml"}</li>

        </ul>
    </div>
    <div className="g-2  mx-auto ">
        <ul className="list-group">
            <li className='list-group-item fw-bold bg-dark text-light'> 5: {data[0]?.strIngredient4!=""?data[0]?.strIngredient4:"water 5ml"}</li>
            <li className='list-group-item fw-bold bg-dark text-light'> 6: {data[0]?.strIngredient5!=""?data[0]?.strIngredient5:"water 5ml"}</li>
            <li className='list-group-item fw-bold bg-dark text-light'> 7: {data[0]?.strIngredient6!=""?data[0]?.strIngredient6:"water 5ml"}</li>
            <li className='list-group-item fw-bold bg-dark text-light'> 8: {data[0]?.strIngredient7!=""?data[0]?.strIngredient7:"water 5ml"}</li>

        </ul>
    </div>
</div>

                <div className="text-center text-light">
                    <h4 className='my-3'>Links</h4>
                    <Link to={`${data[0]?.strYoutube}`} target='_blank'>
                    <button className="btn btn-danger mx-2" >Youtube</button>
                    </Link>
                    <Link to={`${data[0]?.strSource}`} target='_blank'>
                    <button className="btn btn-success" >Source</button>
                    </Link>
                </div>
                </div>  
                
            </div>
        </div>
     </div> : <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
              
              <i className="fas fa-spin fa-spinner fs-1 text-light"></i> 
               </div>}
     
    </>
  );
}

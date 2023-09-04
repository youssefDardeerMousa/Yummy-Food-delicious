import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Search from './Component/Search/Search'
import Categories from './Component/Categories/Categories'
import Area from './Component/Area/Area'
import Ingredients from './Component/Ingredients/Ingredients'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import DataStrCategory from './Component/StrCategory/DataStrCategory'
import Details from './Component/Details/Details'
import Areafood from './Component/Areafood/Areafood'
import GetIngredie from './Component/GetIngredie/GetIngredie'
import Yummy_Food_delicious from './Component/Yummy_Food_delicious/Yummy_Food_delicious'

export default function App() {
//Yummy_Food_delicious
  let router=createBrowserRouter([
   { path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"/Home",element:<Home/>},
    {path:"/Yummy_Food_delicious",element:<Yummy_Food_delicious/>},
      {path:"/Search",element:<Search/>},
      {path:"/StrCategory/:FoodName",element:<DataStrCategory/>},
      {path:"/Details/:id",element:<Details/>},
      {path:"/AreaFood/:food",element:<Areafood/>},
      {path:"/Ingredient/:GetIngredient",element:<GetIngredie/>},

     { path:"/Categories",element:<Categories/>},
      {path:"/Area",element:<Area/>},
      {path:"/Ingredients",element:<Ingredients/>},
     { path:"/Contact",element:<Contact/>}
    ]}
  ]);
 
  
  return (
    <>
     <Provider store={store}>
     <RouterProvider router={router}/>
   </Provider>
   
    </>
  )
}

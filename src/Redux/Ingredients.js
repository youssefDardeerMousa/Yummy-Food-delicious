import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={data:[]}
export let IngredientsApi = createAsyncThunk("Ingredients", async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
      return response.data.meals; // Only returning the necessary data
    } catch (error) {
      throw error;
    }
  });
  

let IngredientsSlice=createSlice({
    name:"Ingredients",
    initialState,
    extraReducers:(build)=>{
        build.addCase(IngredientsApi.fulfilled,(state,action)=>{
           state.data=action.data
        })
    }
})

export let Ingredientsreducer=IngredientsSlice.reducer

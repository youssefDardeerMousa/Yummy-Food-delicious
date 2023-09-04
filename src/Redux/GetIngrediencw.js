import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={data:[]}
export let getIngredientsApi = createAsyncThunk("getIngredients", async (x) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`);
      return response.data.meals; // Only returning the necessary data
    } catch (error) {
      throw error;
    }
  });
  

let IngredientsSlice=createSlice({
    name:"getIngredients",
    initialState,
    extraReducers:(build)=>{
        build.addCase(getIngredientsApi.fulfilled,(state,action)=>{
           state.data=action.data
        })
    }
})

export let getIngredientsreducer=IngredientsSlice.reducer

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={data:[]}
export let AreaFoodapi = createAsyncThunk("AreaFood", async (food) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${food}`);
      return response.data.meals; // Only returning the necessary data
    } catch (error) {
      throw error;
    }
  });
  

let AreaFoodSlice=createSlice({
    name:"AreaFood",
    initialState,
    extraReducers:(build)=>{
        build.addCase(AreaFoodapi.fulfilled,(state,action)=>{
           state.data=action.data
        })
    }
})

export let AreaFoodreducer=AreaFoodSlice.reducer

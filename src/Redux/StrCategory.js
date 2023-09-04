import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={data:[]}
export let StrCategoryapi = createAsyncThunk("strCategory", async (food) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`);
      return response.data.meals; // Only returning the necessary data
    } catch (error) {
      throw error;
    }
  });
  

let CategorySlice=createSlice({
    name:"StrCategory",
    initialState,
    extraReducers:(build)=>{
        build.addCase(StrCategoryapi.fulfilled,(state,action)=>{
           state.data=action.data
        })
    }
})

export let StrCategoryreducer=CategorySlice.reducer

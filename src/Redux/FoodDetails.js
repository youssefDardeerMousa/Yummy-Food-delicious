import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={data:[]}
export let StrDetailsapi = createAsyncThunk("strDetails", async (id) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      return response.data.meals; // Only returning the necessary data
    } catch (error) {
      throw error;
    }
  });
  

let DetailsSlice=createSlice({
    name:"StrDetails",
    initialState,
    extraReducers:(build)=>{
        build.addCase(StrDetailsapi.fulfilled,(state,action)=>{
           state.data=action.data
        })
    }
})

export let StrDetailsreducer=DetailsSlice.reducer

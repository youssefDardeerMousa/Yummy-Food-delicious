import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={data:[]}
export let AreaApi = createAsyncThunk("Area", async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
      return response.data.meals; // Only returning the necessary data
    } catch (error) {
      throw error;
    }
  });
  

let DetailsSlice=createSlice({
    name:"Area",
    initialState,
    extraReducers:(build)=>{
        build.addCase(AreaApi.fulfilled,(state,action)=>{
           state.data=action.data
        })
    }
})

export let Areareducer=DetailsSlice.reducer

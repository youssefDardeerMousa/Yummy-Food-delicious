import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={data:[]}
export let SearchbyNameapi = createAsyncThunk("SearchbyName", async (food) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
      return response.data.meals; // Only returning the necessary data
    } catch (error) {
      throw error;
    }
  });
  

let SearchbyNameSlice=createSlice({
    name:"SearchbyName",
    initialState,
    extraReducers:(build)=>{
        build.addCase(SearchbyNameapi.fulfilled,(state,action)=>{
           state.data=action.data
        })
    }
})

export let SearchbyNamereducer=SearchbyNameSlice.reducer

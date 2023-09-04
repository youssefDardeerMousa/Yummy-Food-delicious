import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={data:[]}
export let SearchbyLetterapi = createAsyncThunk("SearchbyLetter", async (food) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${food}`);
      return response.data.meals; // Only returning the necessary data
    } catch (error) {
      throw error;
    }
  });
  

let SearchbyLetterSlice=createSlice({
    name:"SearchbyLetter",
    initialState,
    extraReducers:(build)=>{
        build.addCase(SearchbyLetterapi.fulfilled,(state,action)=>{
           state.data=action.data
        })
    }
})

export let SearchbyLetterreducer=SearchbyLetterSlice.reducer

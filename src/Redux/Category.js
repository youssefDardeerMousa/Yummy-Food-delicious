import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let myinitialState={data:[]};
export let categoryapi = createAsyncThunk("categories", async () => {
    try {
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
     
        return response.data


    } catch (error) {
        throw error;
    }
});

let categorySlice = createSlice({
    name: "Categories",
    initialState:myinitialState,
    reducers: {
        change: (x) => {
            x.loading = "true";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(categoryapi.fulfilled, (state, action) => {
            state.data = action.payload; // Use action.payload directly
        });
    }
});

export let categoryReducer=categorySlice.reducer;
export let {change}=categorySlice.actions
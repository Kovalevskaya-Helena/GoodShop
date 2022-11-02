import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from '../../constants'
import { Api,Category,Good } from "api";


const api= new Api ();
const POPULAR_CATEGORIES='popularCategories';

export interface PopularCategoriesState {
  popularCategories:{ category: Category; items: Good[] }[];
  loadStatus: LOAD_STATUSES;
}

const initialState: PopularCategoriesState = {
  popularCategories:[],
  loadStatus:LOAD_STATUSES.UNKNOWN
};

const fetchPopularCategories=createAsyncThunk(`${POPULAR_CATEGORIES}/fetchPopularCategories`, api.getPopularCategories);
export const actions = {
  fetchPopularCategories
};

export const {reducer}=createSlice({
  name:`${POPULAR_CATEGORIES}`,
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchPopularCategories.pending,(state)=>{
       state.loadStatus = LOAD_STATUSES.LOADING;
    })
    builder.addCase(fetchPopularCategories.rejected,(state)=>{
       state.loadStatus = LOAD_STATUSES.ERROR;
    })
    builder.addCase(fetchPopularCategories.fulfilled,(state,action)=>{
      state.popularCategories = action.payload;
       state.loadStatus = LOAD_STATUSES.LOADED;
    })

  }

})



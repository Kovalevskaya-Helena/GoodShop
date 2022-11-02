import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from '../../constants'
import { Api,Category} from "api";

const api= new Api ();
const CATEGORIES='categories'

export interface CategoriesState {
  categories:{categories:Category[]};
  loadStatus: LOAD_STATUSES;
}

const initialState: CategoriesState = {
  categories:{
    categories:[],
  },
  loadStatus:LOAD_STATUSES.UNKNOWN
};

const fetchCategories=createAsyncThunk(`${CATEGORIES}/fetchCategories`, api.getCategories);
export const actions = {
  fetchCategories
};


export const {reducer}=createSlice({
  name:`${CATEGORIES}`,
  initialState, 
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchCategories.pending,(state)=>{
       state.loadStatus = LOAD_STATUSES.LOADING;
    })
    builder.addCase(fetchCategories.rejected,(state)=>{
       state.loadStatus = LOAD_STATUSES.ERROR;
    })
    builder.addCase(fetchCategories.fulfilled,(state,action)=>{
      state.categories = action.payload;
       state.loadStatus = LOAD_STATUSES.LOADED;
    })

  }

})



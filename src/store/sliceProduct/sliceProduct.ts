import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from '../../constants'
import { Good,Api } from "api";

const api= new Api ();
const GOOD ='good';

export interface GoodState {
  good:{ items: Good[], total:number };
  loadStatus: LOAD_STATUSES;
}

const initialState: GoodState = {
  good: {
    items:[],
    total:0
  },

  loadStatus:LOAD_STATUSES.UNKNOWN
};

const fetchProduct=createAsyncThunk(`${GOOD}/fetchProduct`, (ids: string) => api.getGoods({ ids }));

export const actions = {
  fetchProduct
};

export const {reducer}=createSlice({
  name:`${GOOD}`,
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchProduct.pending,(state)=>{
       state.loadStatus = LOAD_STATUSES.LOADING;
    })
    builder.addCase(fetchProduct.rejected,(state)=>{
       state.loadStatus = LOAD_STATUSES.ERROR;
    })
    builder.addCase(fetchProduct.fulfilled,(state,action)=>{
      state.good = action.payload;
       state.loadStatus = LOAD_STATUSES.LOADED;
    })

  }

})



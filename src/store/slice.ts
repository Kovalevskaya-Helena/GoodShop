import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from '../constants'
import { Good,Api } from "api/api";


const api= new Api ();

export interface State {
  goods:{ items: Good[]; total: number };
  loadStatus: LOAD_STATUSES;
}
const initialState: State = {
  goods:{
    items:[
      {categoryTypeId:'',
  id:'',
  img:'',
  label:'',
  price:NaN,}
    ],
 total:NaN
  
  },
  loadStatus:LOAD_STATUSES.UNKNOWN
};


const fetchGood=createAsyncThunk("Good/fetchGood", api.getGoodsByCategory);


export const {reducer}=createSlice({
  name:'good',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchGood.pending,(state)=>{
       state.loadStatus = LOAD_STATUSES.LOADING;
    })
    builder.addCase(fetchGood.rejected,(state)=>{
       state.loadStatus = LOAD_STATUSES.ERROR;
    })
    builder.addCase(fetchGood.fulfilled,(state,action)=>{
      state.goods = action.payload;
       state.loadStatus = LOAD_STATUSES.LOADED;
    })

  }

})

export const actions = {
  fetchGood
};

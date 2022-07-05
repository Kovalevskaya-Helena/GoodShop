import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from '../../constants'
import { Api,Good } from "api";
import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';



const api= new Api ();
const GOODS='goods'

export interface GoodsState {
  goods:{items: Good[],total:number };
  loadStatus: LOAD_STATUSES;
}

const initialState: GoodsState = {
  goods:{
    items:[],
 total:0
  
  },
  loadStatus:LOAD_STATUSES.UNKNOWN
};

const fetchAllGoods=createAsyncThunk(`${GOODS}/fetchAllGoods`, (limit: number) => api.getGoods({ limit}));
export const actions = {
  fetchAllGoods
};

export const {reducer}=createSlice({
  name:`${GOODS}`,
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchAllGoods.pending,(state)=>{
       state.loadStatus = LOAD_STATUSES.LOADING;
    })
    builder.addCase(fetchAllGoods.rejected,(state)=>{
       state.loadStatus = LOAD_STATUSES.ERROR;
    })
    builder.addCase(fetchAllGoods.fulfilled,(state,action)=>{
      state.goods = action.payload;
       state.loadStatus = LOAD_STATUSES.LOADED;
    })

  }

})



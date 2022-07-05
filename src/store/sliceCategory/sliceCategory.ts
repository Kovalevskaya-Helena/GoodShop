import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from '../../constants'
import {Good,Api} from 'api'


const api= new Api ();
const CATEGORY='category'

export interface CategoryState {
  category:{ items: Good[]; total: number };
  loadStatus: LOAD_STATUSES;
}
const initialState: CategoryState = {
  category:{
    items:[],
 total:0
  
  },
  loadStatus:LOAD_STATUSES.UNKNOWN
};


const fetchCategory=createAsyncThunk(`${CATEGORY}/fetchCategory`, api.getGoodsByCategory);
export const actions = {
  fetchCategory
};


export const {reducer}=createSlice({
  name:`${CATEGORY}`,
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchCategory.pending,(state)=>{
       state.loadStatus = LOAD_STATUSES.LOADING;
    })
    builder.addCase(fetchCategory.rejected,(state)=>{
       state.loadStatus = LOAD_STATUSES.ERROR;
    })
    builder.addCase(fetchCategory.fulfilled,(state,action)=>{
      state.category = action.payload;
       state.loadStatus = LOAD_STATUSES.LOADED;
    })

  }

})


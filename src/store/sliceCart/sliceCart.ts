import {createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from '../../constants'
import { Api,Good} from "api";
import { getGoodById } from "./selectorsCart";
import { rootStore,AppDispatch } from "../store";

const api= new Api ();

const CART='cart'

interface GoodInCart {
  good: Good;
  count: number; 
  id: string;
}

export interface CartState {
  cart: GoodInCart[];
  loadStatus: LOAD_STATUSES;
}

const initialState: CartState = {
  cart: [],
  loadStatus:LOAD_STATUSES.UNKNOWN
};


const fetchCart = createAsyncThunk(`${CART}/fetchCart`,api.getGoodFromCart)

export const { reducer, actions: sliceActions }=createSlice({
  name: CART,

  initialState,
  reducers: {},

  extraReducers:(builder)=>{
    builder.addCase(fetchCart.pending,(state)=>{
       state.loadStatus = LOAD_STATUSES.LOADING;
    });

    builder.addCase(fetchCart.rejected,(state)=>{
       state.loadStatus = LOAD_STATUSES.ERROR;
    });

    builder.addCase(fetchCart.fulfilled,(state,action)=>{
      state.cart = action.payload;
       state.loadStatus = LOAD_STATUSES.LOADED;
    });
  }
});

const addToCart = createAsyncThunk<void, Good, { state: rootStore, dispatch: AppDispatch }>(`${CART}/fetchAddToCart`,
  async(product, { dispatch, getState } )=> {
    const goodInCart = getGoodById(product.id)(getState());
    const currentCounter = goodInCart?.count ?? 0;

    await api.updateCart(product, currentCounter + 1);

    dispatch(fetchCart());
  }
);

const removeFromCart = createAsyncThunk<void, Good, { state: rootStore, dispatch: AppDispatch }>(`${CART}/fetchAddToCart`,
  async(product, { dispatch, getState } )=> {
    const goodInCart = getGoodById(product.id)(getState());

    if (!goodInCart) {
      return;
    }

    await api.updateCart(product,  goodInCart.count - 1);

    dispatch(fetchCart());
  }
);


export const actions = {
  fetchCart,
  addToCart,
  removeFromCart,
};
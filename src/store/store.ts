import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer  as goodReducer} from "./slice";
import {reducer as categoryReducer} from './sliceCategory'

const rootReducer = combineReducers({
  good: goodReducer,
  categories:categoryReducer
  
});



export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type rootStore = ReturnType<typeof rootReducer>;

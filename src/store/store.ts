import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer  as categoryReducer} from './sliceCategory'
import {reducer as categoriesReducer} from './sliceCategories'

const rootReducer = combineReducers({
  category: categoryReducer,
  categories:categoriesReducer
  
});



export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type rootStore = ReturnType<typeof rootReducer>;

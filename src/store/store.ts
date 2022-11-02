import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer  as categoryReducer} from './sliceCategory'
import {reducer as categoriesReducer} from './sliceCategories'
import {reducer as popularCategoriesReducer} from './slicePopularCategory'
import {reducer as allGoodsReducer} from './sliceGoods'
import {reducer as goodReducer} from './sliceProduct'
import {reducer as cartReducer} from './sliceCart'


const rootReducer = combineReducers({
  category: categoryReducer,
  categories:categoriesReducer,
  popularCategories:popularCategoriesReducer,
  goods:allGoodsReducer,
  good:goodReducer,
  cart:cartReducer,
  
});



export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type rootStore = ReturnType<typeof rootReducer>;

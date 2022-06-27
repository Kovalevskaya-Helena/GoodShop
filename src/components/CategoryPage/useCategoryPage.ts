import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import {actions, selectorsPopularCategories} from 'store/slicePopularCategory'
import { AppDispatch } from 'store/store';


export const useCategoryPage = () => {
  const dispatch=useDispatch<AppDispatch>()
  const popularCategories=useSelector(selectorsPopularCategories.getPopularCategories)
  
  const loading=useSelector(selectorsPopularCategories.getIsLoadingSeletor)
  const loaded=useSelector(selectorsPopularCategories.getIsLoadedSeletor)
  const error=useSelector(selectorsPopularCategories.getIsErrorSeletor)

  useEffect (()=>{
    dispatch(actions.fetchPopularCategories())
  },[]);

  return {
    popularCategories,
    loading,
    loaded,
    error,
  };
};
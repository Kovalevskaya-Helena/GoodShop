import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import { selectorsPopularCategories,actionsPopularCategories } from "store";
import { AppDispatch } from 'store';

export const useCategoryPage = () => {
  const dispatch=useDispatch<AppDispatch>()
  const popularCategories=useSelector(selectorsPopularCategories.getPopularCategories)
  
  const loading=useSelector(selectorsPopularCategories.getIsLoading)
  const loaded=useSelector(selectorsPopularCategories.getIsLoaded)
  const error=useSelector(selectorsPopularCategories.getIsError)

  useEffect (()=>{
    dispatch(actionsPopularCategories.fetchPopularCategories())
  },[]);

  return {
    popularCategories,
    loading,
    loaded,
    error,
  };
};
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import { selectorsCategory, actionsCategory } from "store";
import { AppDispatch } from 'store';


export const useCardCategory = (id:string) => {
  const dispatch=useDispatch<AppDispatch>();
  const category=useSelector(selectorsCategory.getCategory)
  const loading=useSelector(selectorsCategory.getIsLoading)
  const loaded=useSelector(selectorsCategory.getIsLoaded)
  const error=useSelector(selectorsCategory.getIsError)

  useEffect(()=>{
    dispatch(actionsCategory.fetchCategory(id))
  },[id])

  const {items}=category

  return {
    items,
    loading,
    loaded,
    error,
  };
};
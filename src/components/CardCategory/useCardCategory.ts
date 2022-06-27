import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import {actions,selectorsCategory} from '../../store/sliceCategory'
import { AppDispatch } from 'store/store';


export const useCardCategory = (id:string) => {
  const dispatch=useDispatch<AppDispatch>();
  const category=useSelector(selectorsCategory.getCategory)
  const loading=useSelector(selectorsCategory.getIsLoadingSeletor)
  const loaded=useSelector(selectorsCategory.getIsLoadedSeletor)
  const error=useSelector(selectorsCategory.getIsErrorSeletor)

  useEffect(()=>{
    dispatch(actions.fetchCategory(id))
  },[])

  const {items}=category

  return {
    items,
    loading,
    loaded,
    error,
  };
};
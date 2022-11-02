import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useParams,useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import { selectorsCategory,actionsCategory } from 'store';
import { AppDispatch } from 'store';



export const useSelectedCategoryPage = () => {
  const {idCategory}=useParams() as {idCategory:string};
  const category=useSelector(selectorsCategory.getTransformCategory)
  const dispatch=useDispatch<AppDispatch>()
  const navigate=useNavigate()
  const loading=useSelector(selectorsCategory.getIsLoading)
  const error=useSelector(selectorsCategory.getIsError)
  const loaded=useSelector(selectorsCategory.getIsLoaded)

  useEffect (()=>{
    dispatch(actionsCategory.fetchCategory(idCategory))
  },[idCategory]);

  const goBack=()=>navigate(-1);

  return {
    category,
    loading,
    error,
    loaded,
    goBack
  };
};
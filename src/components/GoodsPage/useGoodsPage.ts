import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import { actions,selectorsAllGoods } from 'store/sliceGoods';
import { actionsCategories} from 'store/sliceCategories';
import { AppDispatch } from 'store/store';


export const useGoodsPage = () => {
  const dispatch=useDispatch<AppDispatch>()
  const allGoods=useSelector(selectorsAllGoods.getMapGoods)

  useEffect (()=>{
   dispatch(actions.fetchAllGoods())
   dispatch(actionsCategories.actions.fetchCategories())
  },[]);
  return {
    allGoods,
  };
};
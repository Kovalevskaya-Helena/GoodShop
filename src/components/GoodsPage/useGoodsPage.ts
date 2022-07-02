import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import { selectorsGoods,actionsGoods,actionsCategories } from 'store';
import { AppDispatch } from 'store';


export const useGoodsPage = () => {
  const dispatch=useDispatch<AppDispatch>()
  const allGoods=useSelector(selectorsGoods.getMapGoods)

  useEffect (()=>{
   dispatch(actionsGoods.fetchAllGoods())
   dispatch(actionsCategories.fetchCategories())
  },[]);
  return {
    allGoods,
  };
};
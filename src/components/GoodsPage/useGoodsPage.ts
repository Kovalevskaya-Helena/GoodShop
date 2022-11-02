import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import { selectorsGoods,actionsGoods,actionsCategories } from 'store';
import { AppDispatch } from 'store';


export const useGoodsPage = () => {
  const dispatch=useDispatch<AppDispatch>()
  const allGoods=useSelector(selectorsGoods.getMapGoods)
  const loading = useSelector(selectorsGoods.getIsLoading);
  const loaded = useSelector(selectorsGoods.getIsLoaded);
  const error = useSelector(selectorsGoods.getIsError);

  useEffect (()=>{
   dispatch(actionsGoods.fetchAllGoods(220))
   dispatch(actionsCategories.fetchCategories())
  },[]);
  return {
    allGoods,
    loading,
    loaded,
    error
  };
};
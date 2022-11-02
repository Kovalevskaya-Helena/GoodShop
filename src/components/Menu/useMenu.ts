import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useEffect,useState} from 'react'
import { selectorsCategories, actionsCategories} from 'store';
import { AppDispatch } from 'store';
import type { DrawerProps, } from 'antd';


export const useMenu= () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  const showDrawer = () => {
    setVisible(true);
  };
  const hideDrawer = () => {
    setVisible(false);
  };
  const menuItems=useSelector(selectorsCategories.getTrancformCategory);
  const loading=useSelector(selectorsCategories.getIsLoading)
  const loaded=useSelector(selectorsCategories.getIsLoaded)
  const error=useSelector(selectorsCategories.getIsError)
  const dispatch=useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(actionsCategories.fetchCategories())
  
  },[])
  return {
    menuItems,
    loading,
    loaded,
    error,visible,placement,showDrawer,hideDrawer
  };
};
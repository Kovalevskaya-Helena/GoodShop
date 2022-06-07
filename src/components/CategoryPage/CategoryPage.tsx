import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import { actions, selectorsCategory } from 'store/sliceCategory';
import { AppDispatch } from 'store/store';
import { Api } from 'api';
import { CardCategory } from 'components/CardCategory';

const api=new Api()
export const CategoryPage:React.FC=()=>{
  const dispatch=useDispatch<AppDispatch>();
  const categoriesItems=useSelector(selectorsCategory.getCategory)

  useEffect(()=>{
  dispatch(actions.fetchCategories)
  },[])
  
console.log(categoriesItems);

const {categories}=categoriesItems

  return (<ul >{categories.map(({label,id,type})=> <li key={id}>
         <CardCategory label={label} id={id} type={type}/>
        </li>)}</ul>);
}

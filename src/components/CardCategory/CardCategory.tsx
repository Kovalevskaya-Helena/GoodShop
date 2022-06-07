import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import {actions,selectorsCategory} from '../../store/sliceCategory'
import { AppDispatch } from 'store/store';
import { Api } from 'api';
import { CardItem } from 'components/Card/card';
import css from './cardcategory.module.css'

interface CardCategory {
  id: string,
  label:string,
  type:string
}

const api=new Api()
export const CardCategory:React.FC<CardCategory>=({id,type,label})=>{


  const dispatch=useDispatch<AppDispatch>();
  const category=useSelector(selectorsCategory.getCategory)

  useEffect(()=>{
  api.getCategories()
    dispatch(actions.fetchCategory(id))
  },[])

  const {items,total}=category
  return (<ul className={css.container}>{items.map(({label,id,price,img})=> <div className={css.container} key={id}><li >
         <CardItem label={label} id={id} price={price} img={img}/>
        </li></div>)}</ul>);
}
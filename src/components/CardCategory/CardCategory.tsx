import React from 'react'
import { Card } from 'components/Card/Card';
import css from './cardcategory.module.css'
import { ErrorAlert } from 'components/ErrorAlert';
import { Spinner } from 'components/Spinner';
import {useCardCategory} from './useCardCategory'

interface CardCategoryProps {
  id: string,
  label:string,
  type:string
}

export const CardCategory:React.FC<CardCategoryProps>=({id,type,label})=>{


  const categoryHook=useCardCategory(id)

  return (<>
  {categoryHook.loading&&<Spinner/>}
    {categoryHook.error &&<ErrorAlert/>}
  {categoryHook.loaded&&<ul className={css.container}>{categoryHook.items.map(({label,id,price,img})=> <div className={css.container} key={id}><li >
         <Card label={label} id={id} price={price} img={img}/>
        </li></div>)}</ul>}
        </>)
}
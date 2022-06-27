import React from 'react'
import { CardItem } from 'components/Card/CardItem';
import css from './cardcategory.module.css'
import { ErrorAlert } from 'components/ErrorAlert';
import { Spinner } from 'components/Spinner';
import {useCardCategory} from './useCardCategory'

interface CardCategory {
  id: string,
  label:string,
  type:string
}

export const CardCategory:React.FC<CardCategory>=({id,type,label})=>{


  const data=useCardCategory(id)

  return (<>
  {data.loading&&<Spinner/>}
    {data.error &&<ErrorAlert/>}
  {data.loaded&&<ul className={css.container}>{data.items.map(({label,id,price,img})=> <div className={css.container} key={id}><li >
         <CardItem label={label} id={id} price={price} img={img}/>
        </li></div>)}</ul>}
        </>)
}
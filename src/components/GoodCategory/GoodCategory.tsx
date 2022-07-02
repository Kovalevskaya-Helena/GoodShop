import React from 'react'
import {Good} from '../../api/api'
import {Card} from '../Card'
import css from './goodCategory.module.css'
import {List } from 'antd';
import { Divider } from 'antd';


interface GoodCategoryProps{
   label:string,
   items:Good[]
}


export const GoodCategory:React.FC<GoodCategoryProps>=({label,items})=>{
  

const data=items
   return (<>
      <Divider><div className={css.label}>{label}</div></Divider>
   
   <Divider></Divider>
   <List grid={{ gutter:40,column:4 }} 
   dataSource={data}
   renderItem={item => (
      <div>
      <List.Item>
        <Card label={item.label} id={item.id} price={item.price} img={item.img}/>
      </List.Item></div>
    )}
   >
   </List>

   </>)
   
}








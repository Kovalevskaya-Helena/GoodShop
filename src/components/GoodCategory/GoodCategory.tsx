import React from 'react'
import {Good} from '../../api/api'
import {CardItem} from '../Card'
import css from './goodCategory.module.css'
import {List } from 'antd';
import { Divider } from 'antd';


interface GoodCategory{
   label:string,
   items:Good[]
}


export const GoodCategory:React.FC<GoodCategory>=({label,items})=>{
  

const data=items
   return (<>
      <Divider><div className={css.label}>{label}</div></Divider>
   
   <Divider></Divider>
   <List grid={{ gutter:40,column:4 }} 
   dataSource={data}
   renderItem={item => (
      <div>
      <List.Item>
        <CardItem label={item.label} id={item.id} price={item.price} img={item.img}/>
      </List.Item></div>
    )}
   >
   </List>

   </>)
   
}








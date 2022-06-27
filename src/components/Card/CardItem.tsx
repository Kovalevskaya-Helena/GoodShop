import React from 'react'
import { Card } from 'antd';


interface Card {
  id: string,
  label:string,
  img:string,
  price:number
}
export const CardItem:React.FC<Card>=({img,price,label})=>{
  const { Meta } = Card;
  return(
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={img} />}
  >
    <Meta title={price} description={label} />
  </Card>

  )
}
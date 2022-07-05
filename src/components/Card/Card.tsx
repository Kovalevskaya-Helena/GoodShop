import React from 'react'
import { Card as CardAntd } from 'antd';
import { Link } from "react-router-dom";


interface CardProps {
  id: string,
  label:string,
  img:string,
  price:number
}
export const Card:React.FC<CardProps>=({id,img,price,label})=>{


  return(
    <Link to={`/good/${id}`}>
<CardAntd
    hoverable
    style={{ width: 240 }}
    cover={<img alt="goods" src={img} />}
  >
    <CardAntd.Meta title={price} description={label} />
  </CardAntd>
    </Link>
    
  )
}
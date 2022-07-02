import React from 'react'
import {Table} from 'antd';
import { useGoodsPage } from './useGoodsPage';


export const GoodsPage:React.FC=()=>{


  const goodsHook=useGoodsPage()

  const columns=[
    {
      title:'№',
      dataIndex:'id',
      key:'id'
    },
    {
      title:'Category',
      dataIndex:'categoryLabel',
      key:'categoryTypeId'
    },
    {
      title:'Goods',
      dataIndex:'label',
      key:'id',
      render:(label:string)=><a>{label}</a>
    },
    {
      title:'Description',
      dataIndex:'description',
      key:'id'
    },
    {
      title:'Price',
      dataIndex:'price',
      key:'id'
    }
  ]
  return (
    <Table dataSource={goodsHook.allGoods} columns={columns} pagination={{total:220,pageSize:10}}></Table>
  )
}